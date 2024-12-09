// new Promise((resolve, reject) => {
//   resolve();
// })
//   .then(() => {
//     console.log();
//   }) // resolve() 시 호출
//   .catch(); // error 발생시

// const fetched = fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log(fetched);

// function getData() {
//   return new Promise((resolve, reject) => {
//     let data = 100;
//     resolve(data);
//   });
// }

// getData()
//   .then((data) => console.log(data))
//   .catch();

// function getData(callback) {
//   return new Promise((resolve, reject) => {
//     $.get("https://jsonplaceholder.typicode.com/todos/1", (response) => {
//       if (response) resolve(response);
//       else reject(new Error("에러발생"));
//     });
//   });
// }

// getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

function testPromise() {
  new Promise((resolve, reject) => {
    console.log("hello");
    setTimeout(() => {
      resolve();
    }, 3000);
  })
    .then(() => console.log("bye"))
    .catch((err) => console.log(err));

  console.log("hello again");
}

testPromise();
