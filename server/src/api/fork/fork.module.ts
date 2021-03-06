import {
    Module, MiddlewaresConsumer, RequestMethod,
} from '@nestjs/common';
import { ForkController } from './fork.controller';
import { ForkService } from './fork.service';
import { AuthMiddleware } from '../../common/middlewares/auth.middleware';

@Module({
    controllers: [
        ForkController
    ],
    components: [
        ForkService
    ]
})
export class ForkModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes(ForkController)
    }
}
