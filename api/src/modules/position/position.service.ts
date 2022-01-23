import { Injectable } from '@nestjs/common';

import { Position } from './position.entity';

import { PositionRepository } from './position.repository';

@Injectable()
export class PositionService {
    constructor(private readonly positionRepository: PositionRepository) {}

    public async getById(id: string): Promise<Position> {
        return this.positionRepository.findById(id);
    }
}
