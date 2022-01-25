import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PositionDocument = Position & Document;

@Schema({
    collection: 'positions',
    timestamps: false,
})
@ObjectType()
export class Position {
    @Prop({ type: SchemaTypes.ObjectId, required: true })
    _id: Types.ObjectId;

    @Prop({ type: String, required: true })
    name: string;

    @Prop({ type: Boolean, required: true })
    status: boolean;
}

export const PositionSchema = SchemaFactory.createForClass(Position);
PositionSchema.method('toClient', function () {
    const obj = this.toObject();

    obj.id = obj._id;
    delete obj._id;

    return obj;
});

@ObjectType('position')
export class PositionQuery {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    status: boolean;
}
