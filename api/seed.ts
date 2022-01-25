import { MongoClient } from 'mongodb';
import 'dotenv/config';

const url = process.env.MONGO_DB_URL;
const client = new MongoClient(url);

async function seed() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('easygraph');
    const collections = await db.collections();
    await Promise.all(
        collections.map((collection) =>
            db.dropCollection(collection.collectionName),
        ),
    );
    const users = db.collection('users');
    const positions = db.collection('positions');
    const matches = db.collection('matches');

    const [{ insertedId: user }, { insertedId: position }] = await Promise.all([
        users.insertOne({
            name: 'Talha Emin',
            surname: 'Aydemir',
            email: 'talhaeminaydemir@gmail.com',
        }),
        positions.insertOne({
            name: 'Full-Stack Developer',
            status: true,
        }),
    ]);

    await matches.insertOne({
        user,
        position,
        score: 100,
    });

    console.log('done.');
    client.close();
}

seed();
