const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async () => {
  try {
    const user1Data = await getDataFromFilePromise(user1Path);
    const user2Data = await getDataFromFilePromise(user2Path);

    // JSON 문자열이면 파싱, 이미 객체면 그대로 사용
    const parsedUser1 = typeof user1Data === "string" ? JSON.parse(user1Data) : user1Data;
    const parsedUser2 = typeof user2Data === "string" ? JSON.parse(user2Data) : user2Data;

    return [parsedUser1, parsedUser2];
  } catch (error) {
    throw error; // 에러 발생 시 예외를 던짐
  }
};

// readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
};