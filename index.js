// console.log(document.getElementById("goaloptions").value);
// target=document.getElementById("test");
// target.innerHTML+='<span class="goalchoice"><button onclick="goalfive()">test</button></span>';
// console.log(document.getElementById("test").innerText)
var mygoal=Math.floor((Math.random() * 10)+1);
document.getElementById("mygoal").innerHTML=mygoal;
document.getElementById("my-goal").innerHTML=mygoal;
ss=document.querySelectorAll(".goalchoic");
for (let i = 0; i < ss.length; i++) {
    // console.log(ss[i].value);
    if (ss[i].value==mygoal){
        ss[i].style.display="none";
    }
  }

function goalten(){
    yourgoal= 10;
    document.getElementById("your-goal").innerHTML=yourgoal;
    document.getElementById("page-one").style.display="none";
    document.getElementById("page-two").style.display="block";
}
function goalone(){
    yourgoal= 1;
    document.getElementById("your-goal").innerHTML=yourgoal;
    document.getElementById("page-one").style.display="none";
    document.getElementById("page-two").style.display="block";
}
function goaltwo(){
    yourgoal= 2;
    document.getElementById("your-goal").innerHTML=yourgoal;
    document.getElementById("page-one").style.display="none";
    document.getElementById("page-two").style.display="block";
}
function goalthree(){
    yourgoal= 3;
    document.getElementById("your-goal").innerHTML=yourgoal;
    document.getElementById("page-one").style.display="none";
    document.getElementById("page-two").style.display="block";
}
function goalfour(){
    yourgoal= 4;
    document.getElementById("your-goal").innerHTML=yourgoal;
    document.getElementById("page-one").style.display="none";
    document.getElementById("page-two").style.display="block";
}
function goalfive(){
    yourgoal= 5;
    document.getElementById("your-goal").innerHTML=yourgoal;
    document.getElementById("page-one").style.display="none";
    document.getElementById("page-two").style.display="block";
}
function goalsix(){
    yourgoal= 6;
    document.getElementById("your-goal").innerHTML=yourgoal;
    document.getElementById("page-one").style.display="none";
    document.getElementById("page-two").style.display="block";
}
function goalseven(){
    yourgoal= 7;
    document.getElementById("your-goal").innerHTML=yourgoal;
    document.getElementById("page-one").style.display="none";
    document.getElementById("page-two").style.display="block";
}
function goaleight(){
    yourgoal= 8;
    document.getElementById("your-goal").innerHTML=yourgoal;
    document.getElementById("page-one").style.display="none";
    document.getElementById("page-two").style.display="block";
}
function goalnine(){
    yourgoal= 9;
    document.getElementById("your-goal").innerHTML=yourgoal;
    document.getElementById("page-one").style.display="none";
    document.getElementById("page-two").style.display="block";
}



// function Goals(){
//     yourgoal= document.getElementById("yourgoal").value;
//     document.getElementById("your-goal").innerHTML=yourgoal;
//     document.getElementById("next").style.display="block";
// }


 
function pagethree(){
    document.getElementById("page-two").style.display="none";
    document.getElementById("page-three").style.display="block";
}

var output;
function scorezero(){
    var Yours= 0
    var mine= Math.floor(Math.random() * 6);
    var total = parseInt(Yours) + parseInt(mine);
    var your_goal=document.getElementById("your-goal").innerHTML;
    console.log(your_goal)
    console.log("Yours: "+Yours)
    console.log("mine: "+mine)
    document.getElementById("yourchoice").innerHTML=Yours;
    document.getElementById("mychoice").innerHTML=mine;
    document.getElementById("total").innerHTML=total;
    console.log(total)
    if (total==mygoal){
        output="I win";
    }
    else if (total==your_goal){
        output="You win!!";
    }
    else{
        output="replay";
    }
    console.log(output)
    document.getElementById("output").innerHTML=output;
    if (output=="replay"){
        document.getElementById("close").style.display="block";
        document.getElementById("again").style.display="none";
        document.getElementById("home").style.display="none";
    }
    else{
        document.getElementById("close").style.display="none";
        document.getElementById("again").style.display="block";
        document.getElementById("home").style.display="block";
    }
    // document.getElementById("first").style.display="none";
    // document.getElementById("second").style.display="block";
}

function scoreone(){
    var Yours= 1
    var mine= Math.floor(Math.random() * 6);
    var total = parseInt(Yours) + parseInt(mine);
    var your_goal=document.getElementById("your-goal").innerHTML;
    console.log(your_goal)
    console.log("Yours: "+Yours)
    console.log("mine: "+mine)
    document.getElementById("yourchoice").innerHTML=Yours;
    document.getElementById("mychoice").innerHTML=mine;
    document.getElementById("total").innerHTML=total;
    console.log(total)
    if (total==mygoal){
        output="I win";
    }
    else if (total==your_goal){
        output="You win!!";
    }
    else{
        output="replay";
    }
    console.log(output);
    document.getElementById("output").innerHTML=output;
    if (output=="replay"){
        document.getElementById("close").style.display="block";
        document.getElementById("again").style.display="none";
        document.getElementById("home").style.display="none";
    }
    else{
        document.getElementById("close").style.display="none";
        document.getElementById("again").style.display="block";
        document.getElementById("home").style.display="block";
    }
}

function scoretwo(){
    var Yours= 2
    var mine= Math.floor(Math.random() * 6);
    var total = parseInt(Yours) + parseInt(mine);
    var your_goal=document.getElementById("your-goal").innerHTML;
    console.log(your_goal)
    console.log("Yours: "+Yours)
    console.log("mine: "+mine)
    document.getElementById("yourchoice").innerHTML=Yours;
    document.getElementById("mychoice").innerHTML=mine;
    document.getElementById("total").innerHTML=total;
    console.log(total)
    if (total==mygoal){
        output="I win";
    }
    else if (total==your_goal){
        output="You win!!";
    }
    else{
        output="replay";
    }
    console.log(output);
    document.getElementById("output").innerHTML=output;
    if (output=="replay"){
        document.getElementById("close").style.display="block";
        document.getElementById("again").style.display="none";
        document.getElementById("home").style.display="none";
    }
    else{
        document.getElementById("close").style.display="none";
        document.getElementById("again").style.display="block";
        document.getElementById("home").style.display="block";
    }
}

function scorethree(){
    var Yours= 3
    var mine= Math.floor(Math.random() * 6);
    var total = parseInt(Yours) + parseInt(mine);
    var your_goal=document.getElementById("your-goal").innerHTML;
    console.log(your_goal)
    console.log("Yours: "+Yours)
    console.log("mine: "+mine)
    document.getElementById("yourchoice").innerHTML=Yours;
    document.getElementById("mychoice").innerHTML=mine;
    document.getElementById("total").innerHTML=total;
    console.log(total)
    if (total==mygoal){
        output="I win";
    }
    else if (total==your_goal){
        output="You win!!";
    }
    else{
        output="replay";
    }
    console.log(output)
    document.getElementById("output").innerHTML=output;
    if (output=="replay"){
        document.getElementById("close").style.display="block";
        document.getElementById("again").style.display="none";
        document.getElementById("home").style.display="none";
    }
    else{
        document.getElementById("close").style.display="none";
        document.getElementById("again").style.display="block";
        document.getElementById("home").style.display="block";
    }
}

function scorefour(){
    var Yours= 4
    var mine= Math.floor(Math.random() * 6);
    var total = parseInt(Yours) + parseInt(mine);
    var your_goal=document.getElementById("your-goal").innerHTML;
    console.log(your_goal)
    console.log("Yours: "+Yours)
    console.log("mine: "+mine)
    document.getElementById("yourchoice").innerHTML=Yours;
    document.getElementById("mychoice").innerHTML=mine;
    document.getElementById("total").innerHTML=total;
    console.log(total)
    if (total==mygoal){
        output="I win";
    }
    else if (total==your_goal){
        output="You win!!";
    }
    else{
        output="replay";
    }
    console.log(output);
    document.getElementById("output").innerHTML=output;
    if (output=="replay"){
        document.getElementById("close").style.display="block";
        document.getElementById("again").style.display="none";
        document.getElementById("home").style.display="none";
    }
    else{
        document.getElementById("close").style.display="none";
        document.getElementById("again").style.display="block";
        document.getElementById("home").style.display="block";
    }
}

function scorefive(){
    var Yours= 5
    var mine= Math.floor(Math.random() * 6);
    var total = parseInt(Yours) + parseInt(mine);
    var your_goal=document.getElementById("your-goal").innerHTML;
    console.log(your_goal)
    console.log("Yours: "+Yours)
    console.log("mine: "+mine)
    document.getElementById("yourchoice").innerHTML=Yours;
    document.getElementById("mychoice").innerHTML=mine;
    document.getElementById("total").innerHTML=total;
    console.log(total)
    if (total==mygoal){
        output="I win";
    }
    else if (total==your_goal){
        output="You win!!";
    }
    else{
        output="replay";
    }
    console.log(output);
    document.getElementById("output").innerHTML=output;
    if (output=="replay"){
        document.getElementById("close").style.display="block";
        document.getElementById("again").style.display="none";
        document.getElementById("home").style.display="none";
    }
    else{
        document.getElementById("close").style.display="none";
        document.getElementById("again").style.display="block";
        document.getElementById("home").style.display="block";
    }
}





