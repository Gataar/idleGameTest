let gold = 0;
let begValue = 1;
let goldClick = 1;
let goldSecond = 0;
upgrade1.style.display = "none";
document.getElementById("money").innerHTML = gold;

let 


function beg(){
    document.getElementById("money").innerHTML = gold;
    gold = gold + begValue;
    console.log(gold);
    
}

function upgradeBegging(){
    begValue = begValue * 1.25;
}

function sleepBegging(){

}

function paidUpgrade(){
    let upgrade1 = document.getElementById("paidUpgrade")
    if (gold>5){
        upgrade1.style.display = "block";
    
    }
    else{
        upgrade1.style.display = "none";
    }
    
}
