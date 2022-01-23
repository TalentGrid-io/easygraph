import { join } from 'path';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

import { MatchModule } from './modules/match/match.module';
import { PositionModule } from './modules/position/position.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule.forRoot(),
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            debug: false,
            playground: false,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            include: [MatchModule, PositionModule, UserModule],
        }),
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: process.env['TYPEORM_URL'],
            entities: [process.env['TYPEORM_ENTITIES']],
            useNewUrlParser: true,
            logging: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
