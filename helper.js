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

// given an email and user database, check if user exists, if exits, return the matching userID
const isRightUser = function(email, password) {
  for (user in users) {
    if (users[user].email === email && users[user].password === password) {
      return users[user].id;
    }
  }
};

const emailExist = function(email, users) {
  for (user in users) {
    if (users[user].email === email) {
      return true;
    }
  }
  return false;
};

// return an object of same form as urlDatabase that's associated with the user_id
const filterUrl = function(user_id, urlDatabase) {
  const ret = {};
  for (shortUrl in urlDatabase) {
    if (urlDatabase[shortUrl].userID === user_id) {
      ret[shortUrl] = urlDatabase[shortUrl];
    }
  }
  return ret;
};

module.exports = {
  generateRandomString,
  changeToFullUrl,
  isRightUser,
  filterUrl,
  emailExist
};
