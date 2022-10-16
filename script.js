let gold = 0;
let begValue = 1;
let goldClick = 1;
let goldSecond = 0;
let upgrade1 = document.getElementById("paidUpgrade");

document.getElementById("money").innerHTML = gold;
if (gold>5){
      
        upgrade1.style.display = "block";
    
    }
    else{
        upgrade1.style.display = "none";
      
    }


 





function beg(){
    document.getElementById("money").innerHTML = gold;
    gold = gold + begValue;
    console.log(gold);
  return;
    
}

function upgradeBegging(){
    begValue = begValue * 1.25;
}

function sleepBegging(){

}

function paidUpgrade(){
  
  
  //upgrade1.style.display = "none";
  //begValue = begValue * 2;
  //gold = gold - 20;
    
   
  
    
}
