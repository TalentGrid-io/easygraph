import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionRepository } from './position.repository';
import { PositionService } from './position.service';

@Module({
    imports: [TypeOrmModule.forFeature([PositionRepository])],
    providers: [PositionService],
    exports: [PositionService],
})
export class PositionModule {}
