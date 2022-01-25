import { Module } from '@nestjs/common';
import { MatchRepository } from './match.repository';
import { MatchService } from './match.service';
import { MatchResolver } from './match.resolver';
import { UserModule } from '../user/user.module';
import { PositionModule } from '../position/position.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Match, MatchSchema } from './match.entity';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Match.name, schema: MatchSchema }]),
        UserModule,
        PositionModule,
    ],
    providers: [MatchRepository, MatchService, MatchResolver],
    exports: [MatchService],
})
export class MatchModule {}
