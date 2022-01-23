import {
    BadRequestException,
    ForbiddenException,
    Injectable,
} from '@nestjs/common';

import { User } from './user.entity';

import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    public async getById(id: string): Promise<User> {
        return this.userRepository.findById(id);
    }
}
