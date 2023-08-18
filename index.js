var p1=Math.floor(Math.random()*6)+1;
var p2=Math.floor(Math.random()*6)+1;

if(p1>p2){
    document.querySelector(".head h1").innerHTML="Player 1 wins!!!";
}else if(p1<p2){
    document.querySelector(".head h1").innerHTML="Player 2 wins!!!";
}else{
    document.querySelector(".head h1").innerHTML="!DRAW!";
}
document.querySelector(".player1").classList.toggle("dice"+p1);
document.querySelector(".player2").classList.toggle("dice"+p2);


function refreshPage() {
        location.reload();

}