let input = parseInt(prompt("Enter the Maximum Number you want to Enter : "))

const target = Math.floor(Math.random()*input)+1;

while(!input){
    input= parseInt(prompt('Enter a Valid Number !!'));
}

let guess = prompt("Enter Your First guess : ")
let attempts = 1 ;

while (parseInt(guess) !== target){
    if (guess.toLowerCase() == 'quit'){
        console.log(' OK , YOU QUITT  !! ');
        break;
    }
    guess = parseInt(guess)
    if (guess > target){
        guess = prompt('Too High , Pls Enter some Less Value !!')
        attempts++
    }else if (guess < target) {
        guess = prompt('Too low , Pls Enter some High Value !!')
        attempts++
    }else {
        guess = prompt(" Enter a Valid Number or Quit the Game ")
    }
    
}
console.log('CONGRATS !! YOU WIN')
console.log(`You Took ${attempts} attempts to crack the Guessing Game`)
