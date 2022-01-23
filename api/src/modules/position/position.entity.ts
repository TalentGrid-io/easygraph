import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('positions')
export class Position {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    status: boolean;
}
