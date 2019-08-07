// Helper functions for generating random url and full url
const changeToFullUrl = function(longURL) {
  let urlPartsArr = longURL.split("//");
  if (urlPartsArr.length === 1) {
    return "http://" + urlPartsArr[0];
  }
  return longURL;
};

const generateRandomString = function(
  length = 6,
  chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
) {
  let result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

module.exports = {
  generateRandomString,
  changeToFullUrl
};
