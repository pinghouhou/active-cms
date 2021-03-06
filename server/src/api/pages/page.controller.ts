import {
    Controller, Get, Post,
    Request, Response, Body,
    HttpStatus, Param, UsePipes,
    UseInterceptors
} from '@nestjs/common';
import { PageService } from './page.service';
import Utils from '../../common/utils';
import CommonService from '../../common/common.service';
import { Exception } from '../../common/exception/error.exception';

import { CreatePageDto, IspublishDto, SharePageDto } from '../../dto/page.dto';
import { encodeCreatePipe, encodeUpdatePipe } from '../../common/pipe/page.pipe';

@Controller('page')
export class PageController {
    constructor(private service: PageService) {}

    @Get('/query/:id')
    async getPage(@Response() res, @Param('id') id) {
        let page: any = await this.service.getPage(id);
        page = CommonService.commonResponse(Utils.parseContent(page));
        res.status(HttpStatus.OK).json(page);
    }

    @Get('/remove/:id')
    async removePage(@Request() req, @Response() res, @Param('id') id) {
        const page: any = await this.service.getPage(id);
        const { user } = req.session;

        if (!page || user._id != page.owerUser) {
            throw new Exception('删除页面失败', 500);
        }
        else {
            let result = await this.service.removePage(id);
            result = CommonService.commonResponse(result);
            res.status(HttpStatus.OK).json(result);
        }
    }

    @Get('/queryByTitle')
    async pagingQuery(@Request() req, @Response() res) {
        const { query } = req;
        const { content = '' } = query;
        let pages = await this.service.pagingQuery(query, {title: {$regex: content, $options: 'i'}, publish: true});
        res.status(HttpStatus.OK).json(CommonService.commonResponse(pages));
    }

    @Get('/lists')
    async queryLists(@Request() req, @Response() res) {
        const { query } = req;
        const { user } = req.session;
        const { content = '' } = query;
        let result = await this.service.pagingQuery(query, {owerUser: user._id, title: {$regex: content, $options: 'i'}})
        res.status(HttpStatus.OK).json(CommonService.commonResponse(result));
    }

    @Get('/shareLists')
    async shareLists(@Request() req, @Response() res) {
        const { query } = req;
        const { user } = req.session;
        let result = await this.service.pagingQuery(query, {owerUser: user._id})
        res.status(HttpStatus.OK).json(CommonService.commonResponse(result));
    }

    @Post('/share')
    async share(@Response() res, @Body() body: SharePageDto) {
        const { users } = body;
        users.forEach(element => {
            const { userId, pageId } = element;
            this.service.share({userId, pageId});
        });
        res.status(HttpStatus.OK).json({code: 200, message: '分享成功', data: []});
    }

    @Post('/publish')
    async publish(@Request() req, @Response() res, @Body() body: IspublishDto) {
        const { id, type = true } = body;
        const { user } = req.session;
        const page: any = await this.service.getPage(id, {content: 0});

        if (user._id != page.owerUser) {
            throw new Exception('操作错误', 500);
        } 
        else {
            const result = await this.service.update(id, {publish: type});
            res.status(HttpStatus.OK).json(CommonService.commonResponse({}));
        }
    }

    @Post('/update/fork')
    async updateFork(@Request() req, @Response() res, @Body() body) {
        const { id, title } = body;
        const { user } = req.session;
        const result = await this.service.updateFork(user._id, id, title);
        res.status(HttpStatus.OK).json(result);
    }

    @Post('/update')
    @UsePipes(new encodeUpdatePipe())
    async updatePage(@Response() res, @Body() body) {
        const { id, page } = body;
        const result = await this.service.updatePage(id, page);
        res.status(HttpStatus.OK).json(result);
    }

    @Post()
    @UsePipes(new encodeCreatePipe())
    async addPage(@Request() req, @Response() res, @Body() body: CreatePageDto) {
        const { user } = req.session;
        const result = await this.service.addPage({
            body,
            createUser: user._id,
            owerUser: user._id
        });
        res.status(HttpStatus.OK).json(result);
    }
}
