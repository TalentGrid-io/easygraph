import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchRepository } from './match.repository';
import { MatchService } from './match.service';

@Module({
    imports: [TypeOrmModule.forFeature([MatchRepository])],
    providers: [MatchService],
    exports: [MatchService],
})
export class MatchModule {}
