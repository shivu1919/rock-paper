function Paper(){

    let ai;
    let num = Math.random();
    num = num * 100;
    if(num>=0 && num<=33){
        ai="rock"
    }

    if(num>33 && num<=66){
        ai="paper"
    }

    if(num>66){
        ai="scissor"
    }

    if(ai=="rock"){
        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="You Won"
        
    }

    if(ai=="paper"){
        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="Game Drawn"
        
    }

    if(ai=="scissor"){
        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="Computer won"
    }
}


function Scissor(){
    
    let ai;
    let num = Math.random();
    num = num * 100;
    if(num>=0 && num<=33){
        ai="rock"
    }

    if(num>33 && num<=66){
        ai="paper"
    }

    if(num>66){
        ai="scissor"
    }

    if(ai=="rock"){
        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="Computer Won"

        
    }

    if(ai=="paper"){
        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="You won"
        
    }

    if(ai=="scissor"){
        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="Game Drawn"
    }
}

function Rock(){
    
    let ai;
    let num = Math.random();
    num = num * 100;
    if(num>=0 && num<=33){
        ai="rock"
    }

    if(num>33 && num<=66){
        ai="paper"
    }

    if(num>66){
        ai="scissor"
    }

    if(ai=="rock"){
        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="Game drawn"

        
    }

    if(ai=="paper"){
        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="Computer won"
        
    }

    if(ai=="scissor"){
        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="You won"
    }
}