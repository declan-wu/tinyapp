const urlDatabase = {
  b6UTxQ: {
    longURL: "https://www.tsn.ca",
    userID: "aJ48lW",
    dateCreated: "Aug 8th 19",
    clicks: 0,
    uniqueClicks: 0
  },
  i3BoGr: {
    longURL: "https://www.google.ca",
    userID: "aJ48lW",
    dateCreated: "Aug 8th 19",
    clicks: 0,
    uniqueClicks: 0
  }
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
