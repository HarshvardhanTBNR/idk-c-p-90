function addUser(){
    player1name=document.getElementById("player1name").value;
    player2name=document.getElementById("player2name").value;
    
    localStorage.setItem("player1name",player1name);
    localStorage.setItem("player2name",player2name);
    
    window.location="game_page.html";
    }

player1score=0;
player2score=0;

document.getElementById("player1_name").innerHTML=player1name +" : ";
document.getElementById("player2_name").innerHTML=player2name +" : ";

document.getElementById("player1_name").innerHTML=player1name + " : " ;
document.getElementById("player2_name").innerHTML=player2name +" : ";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("player_question").innerHTML="Question turn : "+ player1name;
document.getElementById("player_answer").innerHTML="Answer turn : "+ player2name;

