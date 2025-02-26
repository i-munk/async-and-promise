const fs = require("fs");

const getDataFromFile = function (filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return callback(err, null); // 에러 발생 시 콜백 실행
    }
    callback(null, data); // 성공 시 콜백 실행
  });
};

module.exports = {
  getDataFromFile
};