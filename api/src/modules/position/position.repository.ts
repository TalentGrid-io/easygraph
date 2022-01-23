import { EntityRepository, MongoRepository, ObjectID } from 'typeorm';

import { Position } from './position.entity';

@EntityRepository(Position)
export class PositionRepository extends MongoRepository<Position> {
    public async findById(id: string | ObjectID): Promise<Position> {
        return this.findOne(id);
    }
}
