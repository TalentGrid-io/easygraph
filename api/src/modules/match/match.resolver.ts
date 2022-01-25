import { NotFoundException } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Match, MatchQuery } from './match.entity';
import { MatchService } from './match.service';
import { UserService } from '../user/user.service';
import { PositionService } from '../position/position.service';
import { User } from '../user/user.entity';
import { Position } from '../position/position.entity';

@Resolver(() => MatchQuery)
export class MatchResolver {
    constructor(
        private readonly matchService: MatchService,
        private readonly userService: UserService,
        private readonly positionService: PositionService,
    ) {}

    @Query((returns) => MatchQuery)
    async match(@Args('id') id: string): Promise<Match> {
        console.log('id', id);
        const match = await this.matchService.getById(id);
        if (!match) {
            throw new NotFoundException(id);
        }
        return match;
    }

    @ResolveField()
    async user(@Parent() match: Match): Promise<User> {
        const { user } = match;
        return this.userService.getById(user);
    }

    @ResolveField()
    async position(@Parent() match: Match): Promise<Position> {
        const { position } = match;
        return this.positionService.getById(position);
    }
}
