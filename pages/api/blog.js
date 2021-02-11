import nc from 'next-connect';
// import { all } from '@/middlewares/index';
import { getPosts, insertPost } from '../../db/comments';
import database from '../../utils/mongodb';

const handler = nc();

handler.use(database);

const maxAge = 1 * 24 * 60 * 60;

handler.get(async (req, res) => {
  const comments = await getPosts(req.db);

  if (req.query.from && comments.length > 0) {
    // This is safe to cache because from defines
    //  a concrete range of posts
    res.setHeader('cache-control', `public, max-age=${maxAge}`);
  }

  res.send({ comments });
});

handler.post(async (req, res) => {
  if (!req.body.comment) return res.status(400).send('You must write something');
  const post = await insertPost(req.db, {
    comment: req.body.comment,
    name: req.body.name,
    postID: req.body.postID,
  });

  return res.json({ post });
});

export default handler;

// import { connectToDatabase } from '../../utils/mongodb';

// export default async (req, res) => {
//   const { db } = await connectToDatabase();
//   const comments = await db.collection('portfolios').find({}).toArray();
//   res.json(comments);
// };

// handler.get(async (req, res) => {
//     const { date } = req.query;
//     const dataModel = { "_id": new ObjectID(), "date": date, "calories": { "label": "Calories", "total": 0, "target": 0, "variant": 0 }, "carbs": { "label": "Carbs", "total": 0, "target": 0, "variant": 0 }, "fat": { "label" : "Fat", "total": 0, "target": 0, "variant": 0 }, "protein": { "label" : "Protein", "total": 0, "target": 0, "variant": 0 }}
//     let doc = {}
//     if(date){
//         doc = await req.db.collection('daily').findOne({date: new Date(date)})
//     } else {
//         doc = await req.db.collection('daily').findOne()
//     }
//     if(doc == null){
//         doc = dataModel
//     }
//     res.json(doc)
// });

// import nextConnect from 'next-connect';
// import middleware from '../../middleware/database';

// const handler = nextConnect();

// handler.use(middleware);

// handler.get(async (req, res) => {
//   let doc = await req.db.collection('portfolios').findOne();
//   //   res.json(doc);
//   res.status(200).json({ name: 'John Doe' });
// });

// export default handler;
