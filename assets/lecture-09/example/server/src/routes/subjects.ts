'use strict';

import { Router, Request, Response } from 'express';
import { get } from '../db';

import { ObjectId } from 'mongodb';

const router = Router();

router.route('/subjects').get(async (req: Request, res: Response) => {
  let db = get();

  let slug, type;

  if ((slug = req.query.type)) {
    type = await db.collection('school-types').findOne({ slug });
  }

  const subjects = await db
    .collection('subjects')
    //.find(type ? { type_id: type._id } : {})
    .aggregate([
      {
        $match: type ? { type_id: type._id } : {},
      },
      {
        $lookup: {
          from: 'school-types',
          localField: 'type_id',
          foreignField: '_id',
          as: 'type',
        },
      },
    ])
    .toArray();

  res.json(subjects);
});

router.route('/subjects/:id').get((req: Request, res: Response) => {
  let db = get();

  db.collection('subjects').findOne(
    { _id: new ObjectId(req.params.id) },
    (err: any, result: any) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

/* // This section will help you create a new record.
recordRoutes.route('/record/add').post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    person_name: req.body.person_name,
    person_position: req.body.person_position,
    person_level: req.body.person_level,
  };
  db_connect.collection('records').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
recordRoutes.route('/update/:id').post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      person_name: req.body.person_name,
      person_position: req.body.person_position,
      person_level: req.body.person_level,
    },
  };
  db_connect.collection('records').updateOne(myquery, newvalues, function (err, res) {
    if (err) throw err;
    console.log('1 document updated');
    response.json(res);
  });
});

// This section will help you delete a record
recordRoutes.route('/:id').delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection('records').deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log('1 document deleted');
    response.status(obj);
  });
}); */

export default router;
