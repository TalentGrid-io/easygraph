import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.entity';

export class UserRepository {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<UserDocument>,
    ) {}

    public async findById(id: string): Promise<User> {
        return this.userModel.findById(id);
    }
}
