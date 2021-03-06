import List from './list';
import './index.scss';

interface Config {
    name: string;
    displayName: string;
    menus?: Array<string>;
    editable: {
        style?: any,
        distanceLeft?: any,
        distanceTop?: any,
        target?: any,
        position?: any,
        horizontal?: any,
        vertical?: any,
        items?: any,
        images?: any
    };
}

const config: Config = {
    name: 'list',
    displayName: '列表',
    menus: [],
    editable: {
        items: [{label: '商品数', component: 'GoodsNumber', defaultValue: 1 }],
        images: [{label: '上传图片', component: 'Upload'}],
        style: {
            layout: ['Basic'],
            goodsItem: ['Basic']
        }
    }
};

export {
    config,
}

export default List;
