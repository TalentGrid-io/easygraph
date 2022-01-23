import { join } from 'path';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

import { MatchModule } from './modules/match/match.module';
import { PositionModule } from './modules/position/position.module';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        GraphQLModule.forRoot({
            debug: false,
            playground: false,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            include: [MatchModule, PositionModule, UserModule],
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
