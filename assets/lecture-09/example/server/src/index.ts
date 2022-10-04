import express from 'express';
import cors from 'cors';
import path from 'path';

import { AnyError } from 'mongodb';

import subjectRouter from './routes/subjects';
import paperRouter from './routes/papers';

import { connect } from './db';

/*
import * as dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '/../.env') });
 */

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(subjectRouter);
app.use(paperRouter);

// get driver connection

app.listen(port, () => {
  if (process.env.ATLAS_URI) {
    // perform a database connection when server starts
    connect(process.env.ATLAS_URI, (err: AnyError) => {
      if (err) console.error(err);
    });

    console.log(`Server is running on port: ${port}`);
  } else {
    console.log('Please set your environment variables');
  }
});
