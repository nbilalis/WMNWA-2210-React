import { AnyError, Db, MongoClient } from 'mongodb';

let _client: MongoClient, _db: Db;

const connect = (uri: string, onError: (err: AnyError) => void) => {
  _client = _client ?? new MongoClient(uri);

  _client.connect((err, client) => {
    // Verify we got a good "db" object
    if (client) {
      _db = client.db('past-exams');
      console.log('Successfully connected to MongoDB.');
    }

    if (err) {
      onError(err);
    }
  });
};

const get = () => {
  return _db;
};

export { connect, get };
