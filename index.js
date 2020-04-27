/**
 * Created by developer on 5/27/19.
 */
const {utility} = require("./utils/index");
const { httpConstant, errorHandle } = require("./constant.js");
const blManager = require("./lib/index");
module.exports = {
  doFormatByObject: function(textMessage, objectData) {
    try {
      if (!textMessage || !objectData) {
        utility.infoLogger(errorHandle.message.IN_SUFFICIENT, "INFO", true);
       return  utility.handleError(
          errorHandle.message.IN_SUFFICIENT,
          httpConstant.RESPONSE_CODE.NOT_ACCEPTABLE
        );
      }
      if (!utility.isString(textMessage)) {
        utility.infoLogger(errorHandle.message.IS_STRING, "INFO", true);
        return utility.handleError(
          errorHandle.message.IS_STRING,
          httpConstant.RESPONSE_CODE.NOT_ACCEPTABLE
        );
      }
      if (!utility.isObject(objectData)) {
        utility.infoLogger(errorHandle.message.IS_OBJECT, "INFO", true);
        return utility.handleError(
          errorHandle.message.IS_OBJECT,
          httpConstant.RESPONSE_CODE.NOT_ACCEPTABLE
        );
      }
      if (utility.isExactMatchObject(textMessage, objectData)) {
        return blManager.replaceObject(textMessage, objectData);
      } else {
        utility.infoLogger(errorHandle.message.KEYS_NOT_MATCHED, "INFO", true);
        return utility.handleError(
          errorHandle.message.KEYS_NOT_MATCHED,
          httpConstant.RESPONSE_CODE.NOT_ACCEPTABLE
        );
      }
    } catch (e) {
      return utility.handleError(
        JSON.stringify(e),
        httpConstant.RESPONSE_CODE.NOT_ACCEPTABLE
      );
    }
  },
  // doFormatByArray: function(textMessage, arrayData) {
  //   try {
  //     if (!textMessage || !arrayData) {
  //       utility.infoLogger(errorHandle.message.IN_SUFFICIENT, "INFO", true);
  //      return  utility.handleError(
  //         errorHandle.message.IN_SUFFICIENT,
  //         httpConstant.RESPONSE_CODE.NOT_ACCEPTABLE
  //       );
  //     }
  //     if (!utility.isString(textMessage)) {
  //       utility.infoLogger(errorHandle.message.IS_STRING, "INFO", true);
  //       return utility.handleError(
  //         errorHandle.message.IS_STRING,
  //         httpConstant.RESPONSE_CODE.NOT_ACCEPTABLE
  //       );
  //     }
  //     if (!utility.isArray(arrayData)) {
  //       utility.infoLogger(errorHandle.message.IS_ARRAY, "INFO", true);
  //       return utility.handleError(
  //         errorHandle.message.IS_ARRAY,
  //         httpConstant.RESPONSE_CODE.NOT_ACCEPTABLE
  //       );
  //     }
  //     if (utility.isExactMatchArray(textMessage, arrayData)) {
  //       return blManager.replaceObject(textMessage, arrayData);
  //     } else {
  //       utility.infoLogger(errorHandle.message.KEYS_NOT_MATCHED, "INFO", true);
  //       return utility.handleError(
  //         errorHandle.message.KEYS_NOT_MATCHED,
  //         httpConstant.RESPONSE_CODE.NOT_ACCEPTABLE
  //       );
  //     }
  //   } catch (e) {
  //     return utility.handleError(
  //       JSON.stringify(e),
  //       httpConstant.RESPONSE_CODE.NOT_ACCEPTABLE
  //     );
  //   }
  // }
};
