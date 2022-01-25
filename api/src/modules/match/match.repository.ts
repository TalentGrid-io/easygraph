import { Match, MatchDocument } from './match.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

export class MatchRepository {
    constructor(
        @InjectModel(Match.name)
        private readonly matchModel: Model<MatchDocument>,
    ) {}

    public async findById(id: string): Promise<Match> {
        return this.matchModel.findById(id);
    }
}
