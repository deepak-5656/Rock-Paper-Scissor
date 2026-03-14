

// two users are there two varaibles we take
let userscore = 0;
let comscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

// computer generate random id okay
const gencomputerchoice = ()=>{
    //rock,paper, scissors --it generates randomely to match user
    const options =["rock","paper","scissors"];
    // Math.random()*3 //it generaes randome number from 0 to 2 only if we multipu with 3 or 4 means 0 to 4 
   const randomind =  Math.floor(Math.random()*3);
   return options[randomind];
}

const drawgame= ()=>{
    // console.log("game was draw"); 
    msg.innerText = "Game was draw! Play Again";
    msg.style.backgroundColor="#081b31";
}

const showwinner=(userwin,userchoicid,comchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        // console.log("you win!");
        msg.innerText = `You Win! Yours choice ${userchoicid} beats  ${comchoice}`;
        msg.style.backgroundColor="green";
    }else{
        comscore++;
        compscorepara.innerText=comscore;
        // console.log("you lose");
        msg.innerText = `You Lose! computer choice ${comchoice} beats your ${userchoicid}`;
         msg.style.backgroundColor="red";
    }
}

const playgame =(userchoicid)=>{
    console.log("user choice= ",userchoicid);
    //generate compurter choice
    const comchoice = gencomputerchoice();
    console.log("computer choice= ",comchoice);
    if(userchoicid==comchoice){
        drawgame();
    }else{
        let userwin =true;
        if(userchoicid==="rock"){
            // comp may as paper, scissors
           userwin= comchoice==="paper"?false:true;
        }
        else if(userchoicid==="paper"){
            //rock or scissors
           userwin= comchoice==="scissors"?false:true;
        }
        else{
            //comp as rock or paper if user has siccers
            userwin= comchoice=="rock"?false:true;
        }
        showwinner(userwin,userchoicid,comchoice);
    }
}



// each div ston paper sic we add event listner
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoicid = choice.getAttribute("id");
        playgame(userchoicid);
    })
})