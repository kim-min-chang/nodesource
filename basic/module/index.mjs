import checkOddOrEvem from "./func.mjs";

import { odd, even } from "./var.mjs";

console.log(checkOddOrEvem(5));

function checkStringOddOrEvem(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}

console.log(checkStringOddOrEvem("banana"));
