module.exports={
  httpConstant: {
    RESPONSE_CODE: {
      NOT_ACCEPTABLE: 406,
      SUCCESS: 200,
      BAD_REQUEST: 400,
      FORBIDDEN: 403,
    }
  },
    errorHandle: {
      code: {
    
      },
      message: {
          "IN_SUFFICIENT":"in-sufficient parameter in method.",
          "IS_STRING":"message should be a string type.",
          "IS_OBJECT":"replce value should be in key value pair.",
          "IS_ARRAY":"replce value should be in Array.",
          "KEYS_NOT_MATCHED":"replace keys did not match exact keys."
      }
}
}