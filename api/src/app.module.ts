import { join } from 'path';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

import { MatchModule } from './modules/match/match.module';
import { PositionModule } from './modules/position/position.module';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        UserModule,
        PositionModule,
        MatchModule,
        ConfigModule.forRoot(),
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            include: [MatchModule, PositionModule, UserModule],
        }),
        MongooseModule.forRoot(process.env['MONGO_DB_URL']),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
