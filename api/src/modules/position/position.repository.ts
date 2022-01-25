import { Position, PositionDocument } from './position.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class PositionRepository {
    constructor(
        @InjectModel(Position.name)
        private readonly positionModel: Model<PositionDocument>,
    ) {}

    public async findById(id: string): Promise<Position> {
        return this.positionModel.findById(id);
    }
}
