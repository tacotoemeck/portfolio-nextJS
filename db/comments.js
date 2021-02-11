import { nanoid } from 'nanoid';

export async function getPosts(db, postID) {
  return db.collection('portfolios').find({}).toArray();
}

export async function insertPost(db, { name, comment, postID }) {
  return db
    .collection('portfolios')
    .insertOne({
      _id: nanoid(12),
      name,
      comment,
      postID,
      date: new Date(),
    })
    .then(({ ops }) => ops[0]);
}
