import { Injectable } from '@nestjs/common';

import { Match } from './match.entity';

import { MatchRepository } from './match.repository';

@Injectable()
export class MatchService {
    constructor(private readonly matchRepository: MatchRepository) {}

    public async getById(id: string): Promise<Match> {
        return this.matchRepository.findById(id);
    }
}
