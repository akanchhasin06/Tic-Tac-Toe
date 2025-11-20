let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgameBtn=document.querySelector("#new-game");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO = true; // player X, player O
let count=0;

const showwinner=(winner) =>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgcont.classList.remove("hide"); 
    disabledboxes();
};

const disabledboxes=() => {
    for(let box of boxes){
        box.disabled=true;
    }
};

const enaabledboxes=() => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const winPatterns = [
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
    box.addEventListener("click", () => {
       
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        }
        

        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let iswinner=checkwinner();

        if(count===9 && !iswinner){
            gamedraw();
        }
    });
});

const gamedraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
 disabledboxes();
};

const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner ",pos1val);
                showwinner(pos1val); 
            }
        }
    }
};

const Resetgame=() =>{
    turnO=true;
    count=0;
    enaabledboxes();
    msgcont.classList.add("hide");
};


newgameBtn.addEventListener("click",Resetgame);
reset.addEventListener("click",Resetgame);