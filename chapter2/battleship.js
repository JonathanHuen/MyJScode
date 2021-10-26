
var randomLoc = Math.floor(Math.random() * 5);  //Math.random和Math.floor的M务必大写
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {   //判断是否继续循环
    guess = prompt("Ready, aim, fire!(enter a number 0-6)"); //prompt函数用于获取用户输入
    
    if(guess < 0 || guess > 6) {    //判断输入值是否合法
        alert("Please enter a valid cell number!");
    }else {
        guesses = guesses + 1;
    
        if(guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;
        
            if(hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        }else {
            alert("MISS!");
        }
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);
