var wins = 0;
var loss = 0;
var tie = 0;

while(true)
{
    //prompts user to enter rock paper or scissors
    var result = window.prompt("Enter R, P, or S:"); 
    result = result.toLowerCase();
    console.log(result)

    // computer randomly generates rock, paper, scissor
    var computer = Math.floor(Math.random()*3);


        


    // checks to see if we won or lost
    if(result == "r") //human chooses rock
    {
        if(computer == 0) //checks to see if computer is rock
        {
            //we tied
            console.log("computer chose rock");
            console.log("tie");
            window.alert("You tied");
            tie++; 
        }
        else if(computer == 1) // computer chose paper
        {
            //we lost
            console.log("computer chose paper");
            console.log("lost");
            window.alert("You lost");
            loss++;
        }
        else //computer chose scissors
        {
            //we won
            console.log("computer chose scissors");
            console.log("you win");
            window.alert("You won");
            wins++;
        }
    }
    else if(result == "p") //human chooses paper
    {
        if(computer == 0) //checks to see if computer is rock
        {
            console.log("computer chose rock");
            console.log("you win");
            window.alert("You won");
            wins++;
        }
        else if(computer == 1) // computer chose paper
        {
            console.log("computer chose paper");
            console.log("tie");
            window.alert("You tied");
            tie++;
        }
        else //computer chose scissors
        {
            //we lost
            console.log("computer chose scissors");
            console.log("lost");
            window.alert("You lost");
            loss++;
        }
    }
    else if(result == "s") //human chooses scissors
    {
        if(computer == 0) //checks to see if computer is rock
        {
            console.log("computer chose rock");
            console.log("lost");
            window.alert("You lost");
            loss++;
        }
        else if(computer == 1) // computer chose paper
        {
            console.log("computer chose paper");
            console.log("you win");
            window.alert("You won");
            wins++;
        }
        else //computer chose scissors
        {
            //we tie
            console.log("computer chose scissors");
            console.log("tie");
            window.alert("You tied");
            tie++;
        }
    }
    else{ //invalid input
        window.alert("Invalid Input");
    }
    window.alert("Stats:\n Wins: " + wins + "\n Losses: " + loss + "\n Ties: " + tie);
}
//scoreboard
