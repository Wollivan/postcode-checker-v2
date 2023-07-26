const postcodes = require("./postcodes.json");

const checkPostcode = (userPostcode) => {
  const match = postcodes.find((item) => item.postcode.replace(/\s/g, "") === userPostcode.replace(/\s/g, ""));
  if (match) {
    return match.authority;
  } else {
    return "ineligible";
  }
};

console.log(checkPostcode("L111JL"));
