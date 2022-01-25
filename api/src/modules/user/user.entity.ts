import { Document, SchemaTypes, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Position } from '../position/position.entity';

export type UserDocument = User & Document;

@Schema({
    collection: 'users',
    timestamps: false,
})
export class User {
    @Prop({ type: SchemaTypes.ObjectId, required: true })
    _id: Types.ObjectId;

    @Prop({ type: String, required: true })
    name: string;

    @Prop({ type: String, required: true })
    surname: string;

    @Prop({ type: String, required: true, unique: true })
    email: string;
}
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.method('toClient', function () {
    const obj = this.toObject();

    obj.id = obj._id;
    delete obj._id;

    return obj;
});

@ObjectType('user')
export class UserQuery {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    surname: string;

    @Field()
    email: string;
}
