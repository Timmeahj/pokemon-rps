var bulbasaur = document.getElementById('bulbasaur');
var charmander = document.getElementById('charmander');
var squirtle = document.getElementById('squirtle');

var choice;
var computerChoice;

var playerScore = 0;
var computerScore = 0;

bulbasaur.addEventListener('click', function (){
    choice = 'bulbasaur';
    playGame();
});

charmander.addEventListener('click', function (){
    choice = 'charmander';
    playGame();
});

squirtle.addEventListener('click', function (){
    choice = 'squirtle';
    playGame();
});

function playGame(){
    computerChoice = choose();
    console.log('computer chose: '+computerChoice)
    if(choice === 'bulbasaur'){
        if(computerChoice === 'charmander'){
            //computer wins
            computerScore++;
            document.getElementById('result').innerText = 'computer wins';
        }else if(computerChoice === 'squirtle'){
            //player wins
            playerScore++;
            document.getElementById('result').innerText = 'player wins';
        }else{
            //tie
            document.getElementById('result').innerText = 'tie';
        }
    }
    if(choice === 'charmander'){
        if(computerChoice === 'charmander'){
            //tie
            document.getElementById('result').innerText = 'tie';
        }else if(computerChoice === 'squirtle'){
            //computer wins
            computerScore++;
            document.getElementById('result').innerText = 'computer wins';
        }else{
            //player wins
            playerScore++;
            document.getElementById('result').innerText = 'player wins';
        }
    }
    if(choice === 'squirtle'){
        if(computerChoice === 'charmander'){
            //player wins
            playerScore++;
            document.getElementById('result').innerText = 'player wins';
        }else if(computerChoice === 'squirtle'){
            //tie
            document.getElementById('result').innerText = 'tie';
        }else{
            //computer wins
            computerScore++;
            document.getElementById('result').innerText = 'computer wins';
        }
    }
    updateScore();
    updateImage();
}

function choose(){
    //chosenPokemon has to contain one of the 3 pokemon chosen randomly
    var allPokemon = ['bulbasaur', 'charmander', 'squirtle'];
    var randomNumber = randomNumberBetween(0, 3);
    var chosenPokemon = allPokemon[randomNumber];
    return chosenPokemon;
}

function randomNumberBetween(a, b){
    return Math.floor(b*Math.random())+a;
}

function updateScore(){
    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('computerScore').innerText = computerScore;
}

function updateImage(){
    document.getElementById('playerPokemon').src = "images/" + choice + ".svg";
    document.getElementById('computerPokemon').src = "images/" + computerChoice + ".svg";
}



