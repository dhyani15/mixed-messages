function randomNumber (num){
    return Math.floor(Math.random()*num);
}
let firstWord = [2,'lil','Moon','kid','biggie','yung']
let secondWord = ['cease','B','peep','durk','dicky','lean','thug','lee']

function rapName (){
    return console.log(firstWord[randomNumber(firstWord.length)]+' '+secondWord[randomNumber(secondWord.length)])
}

rapName()