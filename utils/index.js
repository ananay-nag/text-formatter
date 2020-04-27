const { httpConstant } = require('../constant');
const utility = {
  infoLogger,
  handleError,
  isString,
  isArray,
  isObject,
  isExactMatchObject,
  isExactMatchArray
};

function infoLogger(message, type = "INFO", isLogged = true) {
  if (isLogged) {
    console.log(
      JSON.stringify({
        message: message,
        type: type
      })
    );
  }
}
function handleError(message, code) {
  return JSON.stringify({
    message: message ? message : "unknown error",
    code: code ? code : httpConstant.RESPONSE_CODE.BAD_REQUEST
  });
}
function isString(string) {
  return (
    (typeof string === "String" || typeof string === "string") &&
    string.trim().length !== 0
  );
}
function isArray(array) {
  return array instanceof Array && array.length > 0;
}
function isObject(object) {
  return typeof object === "object" && Object.keys(object).length > 0;
}
function isExactMatchObject(text, data) {
  return Object.keys(data).length === text.match(/{(\w+)}/gi).length;
}
function isExactMatchArray(text, data) {
  return data.length === text.match(/{(\w+)}/gi).length;
}
module.exports.utility=utility;
