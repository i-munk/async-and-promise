const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async () => {
  try {
    const user1Data = await getDataFromFilePromise(user1Path);
    const user2Data = await getDataFromFilePromise(user2Path);
    return [JSON.parse(user1Data), JSON.parse(user2Data)];
  } catch (error) {
    throw error; // 에러 발생 시 예외를 던짐
  }
};

// readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
};