import { Module } from '@nestjs/common';
import { PositionRepository } from './position.repository';
import { PositionService } from './position.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Position, PositionSchema } from './position.entity';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Position.name, schema: PositionSchema },
        ]),
    ],
    providers: [PositionService, PositionRepository],
    exports: [PositionService],
})
export class PositionModule {}
