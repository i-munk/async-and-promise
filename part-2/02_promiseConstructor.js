const fs = require("fs");

const getDataFromFilePromise = function (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err); // 에러 발생 시 reject 호출
      } else {
        resolve(data.trim()); // 불필요한 공백 제거 후 문자열 반환
      }
    });
  });
};

module.exports = {
  getDataFromFilePromise
};