// const login = document.querySelector("#login_clicked");
// function login_clickedd() {
//     alert('로그인하세요!');
// }
// login.addEventListener("click", login_clickedd);

// const header_h1 = document.querySelector("#header_h1");
// function h1_clicked() {
//     console.log("h1이 클릭되었습니다.")
// }
// header_h1.addEventListener("click", h1_clicked);


// function id_text() {
//     const id = prompt("id를 입력하세요");
//     console.log(id);
// }
// const login_menu = document.querySelector("#login_clicked")
// login_menu.addEventListener("click",id_text)

const h1 = document.querySelector("#login_clicked");
function handleh1click () {
    const currentColor = h1.style.color;
    let newcolor;
    if (currentColor ==="blue"){
        newcolor ="white";
    } else {
        newcolor ="blue";
    }
    h1.style.color=newcolor;
};
h1.addEventListener("click",handleh1click);