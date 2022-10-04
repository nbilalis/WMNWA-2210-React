import { Router } from 'express';
import { ObjectId } from 'mongodb';

import { get } from '../db';

const router = Router();

router.route('/papers').get(async (req, res) => {
  let db = get();

  let subject_id = req.query.subject as string;

  if (!subject_id) {
    res.sendStatus(404);
    res.end();
  } else {
    const papers = await db
      .collection('papers')
      // .find({ subject_id: ObjectId(subject_id) })
      .aggregate([
        {
          $match: { subject_id: new ObjectId(subject_id) },
        },
        {
          $lookup: {
            from: 'subjects',
            localField: 'subject_id',
            foreignField: '_id',
            as: 'subject',
          },
        },
      ])
      .toArray();

    res.json(papers);

    /* res.json(
      papers.reduce((acc, cur) => {
        if (cur.year in acc) {
          return { ...acc, [cur.year]: [...acc[cur.year], cur] };
        } else {
          return { ...acc, [cur.year]: [cur] };
        }
      }, {})
    ); */
  }
});

export default router;
