import { Document, SchemaTypes, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserQuery } from '../user/user.entity';
import { PositionQuery } from '../position/position.entity';

export type MatchDocument = Match & Document;

@Schema({
    collection: 'matches',
    timestamps: false,
})
export class Match {
    @Prop({ type: SchemaTypes.ObjectId, required: true })
    _id: Types.ObjectId;

    @Prop({ type: String, required: true })
    user: string;

    @Prop({ type: String, required: true })
    position: string;

    @Prop({ type: Number, required: true })
    score: number;
}

export const MatchSchema = SchemaFactory.createForClass(Match);

MatchSchema.method('toClient', function () {
    const obj = this.toObject();

    obj.id = obj._id;
    delete obj._id;

    return obj;
});

@ObjectType('match')
export class MatchQuery {
    @Field(() => ID)
    id: string;

    @Field(() => UserQuery)
    user: UserQuery;

    @Field(() => PositionQuery)
    position: PositionQuery;

    @Field()
    score: number;
}
