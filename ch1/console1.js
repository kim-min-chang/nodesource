const String = "abc";
const number = 1;
const boolean = true;
const obj = {
  ouside: {
    inside: {
      key: "value",
    },
  },
};

// console.time("레이블 지정") : 시작시간
// console.timeEnd("레이블 지정") : 종료시간
console.time("전체 시간");
console.log("일반 로그");
console.timeEnd("전체 시간");
