import { odd, even } from "./var.mjs";

function checkOddOrEvem(num) {
  if (num % 2) {
    return odd;
  }
  return even;
}

export default checkOddOrEvem;
