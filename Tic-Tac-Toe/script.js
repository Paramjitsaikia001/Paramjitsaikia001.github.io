let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resetBtn");
let newBtn =document.querySelector(".newBtn");

let msgContainer =document.querySelector(".msg-container");
let msg =document.querySelector(".msg");

let turn0 =true;
let cout=0;
let winsPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML="O";
            turn0=false;
        }else{
            box.innerHTML='X';
            turn0=true;
        }
        box.disabled=true;
        cout++;

        let isWinner=checkWinner();
        if(cout==6 && !isWinner){
            gameOver();
        }
    })
});


const resetGame=()=>{
    turn0=true;
    cout=0;
    enableBox();
    msgContainer.classList.add("hide");
    remove=false;

}

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

const newGame=()=>{
    
    resetGame()
    document.querySelector("main").classList.remove("hide")
    enableBox()

}

const gameOver=()=>{
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disabledbox();
document.querySelector("main").classList.add("hide")

}


const disabledbox= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner = (winner)=>{
msg.innerHTML=`winner is ${winner}`;
msgContainer.classList.remove("hide");
document.querySelector("main").classList.add("hide")
};

const checkWinner=()=>{
for (let pattern of winsPatterns) {
   let pos1val=boxes[pattern[0]].innerHTML;
   let pos2val=boxes[pattern[1]].innerHTML;
   let pos3val=boxes[pattern[2]].innerHTML;

   if(pos1val !="" && pos2val !="" && pos3val !=""){
    if(pos1val === pos2val && pos2val === pos3val){
        showWinner(pos1val);
        return true
    }
   }
}
}


resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",newGame)