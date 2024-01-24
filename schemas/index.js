// schemas/index.js

import mongoose from 'mongoose';

const connect = () => {
  mongoose
    .connect(
      process.env.MONGODB_URI,
      {
        dbName: process.env.DB_NAME, // todo_memo 데이터베이스명을 사용합니다.
      }
    )
    .then(() => console.log('MongoDB 연결에 성공하였습니다.'))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

mongoose.connection.on('error', (err) => {
  console.error('MongoDB 연결 에러', err);
});

export default connect;
