// var axios = require("axios");

// 전체 User 조회
const getUsers = async () => {
  try {
    const response = await axios.get("/users");
    console.log(response.data);

    const users = response.data;

    let result = "";
    users.forEach((user) => {
      result += `<tr>`;
      result += `<th scope="row">${user._id}</th>`;
      result += `<td>${user.name}</td>`;
      result += `<td>${user.age}</td>`;
      result += `<td>${user.married ? "기혼" : "미혼"}</td>`;
      result += `</tr>`;
    });
    document.querySelector("#user-list tbody").innerHTML = result;
  } catch (error) {
    console.log(error);
  }
};

//등록버튼을 누르면(submit)
//폼 안에 작성한 내용 가져오기
document.querySelector("#user-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const age = form.age.value;
  const married = form.married.checked;

  if (!name) {
    alert("이름을 확인해 주세요");
    return;
  }
  if (!age) {
    // alert("나이를 확인해 주세요");
    // return;
    return alert("나이를 확인해 주세요");
  }

  try {
    // 라우터 경로
    await axios.post("/users", { name, age, married });
    // 전체 User 조회 함수 호출
    getUsers();
  } catch (error) {
    console.log(error);
  }

  // 폼 화면 clear
  form.name.value = "";
  form.age.value = "";
  form.married.checked = false;
});

//댓글등록을 누르면(submit)
//submit 기능 중지, 아이디, 내용 들어왔는지 확인
document.querySelector("#comment-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const userid = form.userid.value;
  const comment = form.comment.value;

  if (!userid) {
    alert("아이디를 확인해 주세요");
    return;
  }
  if (!comment) {
    // alert("나이를 확인해 주세요");
    // return;
    return alert("댓글을 확인해 주세요");
  }

  try {
    // 라우터 경로
    await axios.post("/comments", { userid, comment });
    // 현재 댓글 작성자의 전체 comments 가져오는 함수 호출
    //
  } catch (error) {
    console.log(error);
  }

  // 폼 화면 clear
  form.userid.value = "";
  form.comment.value = "";
});
