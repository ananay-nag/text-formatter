const blManager = {
  replaceObject
};
function replaceObject(text, objectData) {
  let str = text;
  let res = str.match(/{(\w+)}/gi);
  for (var index = 0; index < res.length; index++)
    str = str.replace(
      res[index],
      objectData[res[index].replace("{", "").replace("}", "")]
    );
  return str;
}
// function replaceArray(text, arrayData) {
//   let str = text;
//   let res = str.match(/{(\w+)}/gi);
//   for (var index = 0; index < res.length; index++)
//     str = str.replace(
//       res[index],
//       objectData[res[index].replace("{", "").replace("}", "")]
//     );
//   return str;
// }
module.exports = blManager;
