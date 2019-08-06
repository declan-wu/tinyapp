const urlDatabase = {
  b2xVn2: "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

module.exports = urlDatabase;
// {
//   all: () => urlDatabase,
//   count: () => Object.keys(urlDatabase).length,
//   add: (short, long) => (urlDatabase[short] = long),
//   get: short => urlDatabase[short],
//   update: (short, long) => {
//     if (urlDatabase.hasOwnProperty(short)) {
//       urlDatabase[short] = long;
//     }
//   }
// };
