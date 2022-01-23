import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('matches')
export class Match {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    user: string;

    @Column()
    position: string;

    @Column()
    score: number;
}
