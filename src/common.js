  // TODO:

  // Create an object to keep track of count of each item
  // Create 2 variables to track the highest value and key
  // Loop through each string then track the entries and values occurences
  // Determine the max value of the entries
  // Filter the object to return the keys with the max value

const commonChars = (c) => {

  let res = {};

  for (let i = 0; i < c.length; i++) {
    const cur = res[`${c[i]}`];
    if (cur) {
      res[`${c[i]}`] = cur + 1;
    } else {
      res[`${c[i]}`] = 1;
    }
  }
  
  const mx = Math.max(...Object.values(res));

  const response = [];

  Object.entries(res).forEach(([key, value]) => {
    if (value === mx) response.push(key);
  });

  console.log(response);
  return response;
};

commonChars("aaabbbacccc");
// implementation
// annoying
// aaabbba
