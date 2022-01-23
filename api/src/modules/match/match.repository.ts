import { EntityRepository, MongoRepository, ObjectID } from 'typeorm';

import { Match } from './match.entity';

@EntityRepository(Match)
export class MatchRepository extends MongoRepository<Match> {
    public async findById(id: string | ObjectID): Promise<Match> {
        return this.findOne(id);
    }
}
