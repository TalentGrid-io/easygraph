import { EntityRepository, MongoRepository, ObjectID } from 'typeorm';

import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends MongoRepository<User> {
    public async findById(id: string | ObjectID): Promise<User> {
        return this.findOne(id);
    }
}
