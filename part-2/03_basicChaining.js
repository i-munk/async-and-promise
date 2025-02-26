const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersChaining = () => {
  return getDataFromFilePromise(user1Path)
    .then((user1Data) => getDataFromFilePromise(user2Path)
      .then((user2Data) => [JSON.parse(user1Data), JSON.parse(user2Data)])
    );
};

module.exports = {
  readAllUsersChaining
};