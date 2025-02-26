const fs = require("fs");

const getDataFromFilePromise = function (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.trim()); // 공백 제거하여 문자열 반환
      }
    });
  });
};

module.exports = {
  getDataFromFilePromise
};