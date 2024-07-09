let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".newGame");
newGame.addEventListener("click", () => {
  location.reload();
});

let trun0 = true;

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const disbaleBox = ()=>{
   for (let box of boxes){
    box.disabled = true
   }
} 

const enableBox = ()=>{
    for (let box of boxes){
     box.innerHTML = ""
     box.disabled = false
     msg.classList.add("hide")
    }
 } 

resetbtn.addEventListener("click", enableBox)


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (trun0) {
      box.innerText = "O";
      trun0 = false;
    } else {
      box.innerText = "X";
      trun0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const showwinner = (winner) => {
  msg.innerText = `Congratulation's Winner is ${winner}`;
  msg.classList.remove("hide");
  disbaleBox();
};

const checkwinner = () => {
  for (let pattern of winPattern) {
    let post1val = boxes[pattern[0]].innerText;
    let post2val = boxes[pattern[1]].innerText;
    let post3val = boxes[pattern[2]].innerText;
    if (post1val != "" && post2val != "" && post3val != "") {
      if (post1val === post2val && post2val === post3val) {
        console.log("winner", post1val);
        showwinner(post1val);
        disbaleBox()

      }
    }
  }
};

