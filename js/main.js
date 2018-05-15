$(document).ready( function() {
  //"Global || top level" variables
  //functions
  //listeners
  //code that runs

  //VARIABLES -------------------------------------------------

  var userChoice
  var options = ['rock', 'paper', 'scissors']
  var compChoice
  var userScore = 0
  var compScore = 0

  //FUNCTIONS -------------------------------------------------

  function compChooses() {
    compChoice = options[Math.floor(Math.random() * options.length)]
  }

  function printChoices() {
    $('#userClicked').text('You chose: ' + userChoice)
    $('#compClicked').text('The computer chose: ' + compChoice)
  }

  function compareUserRock(compChoice) {
    userChoice = 'rock'
    outcome = $('#outcome')
    switch(compChoice) {
      case 'rock':
        outcome.text("IT'S A TIE!")
        break
      case 'paper':
        outcome.text("PAPER BEATS ROCK... YOU LOSE")
        compScore++
        break
      case 'scissors':
        outcome.text("ROCK BEATS SCISSORS! YOU WIN!")
        userScore++
        break
    }
  }

  function compareUserPaper(compChoice) {
    userChoice = 'paper'
    outcome = $('#outcome')
    switch(compChoice) {
      case 'rock':
        outcome.text("PAPER BEATS ROCK! YOU WIN!")
        userScore++
        break
      case 'paper':
        outcome.text("IT'S A TIE!")
        break
      case 'scissors':
        outcome.text("SCISSORS BEATS PAPER... YOU LOSE")
        compScore++
        break
    }
  }

  function compareUserScissors(compChoice) {
    userChoice = 'scissors'
    outcome = $('#outcome')
    switch(compChoice) {
      case 'rock':
        outcome.text("ROCK BEATS SCISSORS... YOU LOSE")
        compScore++
        break
      case 'paper':
        outcome.text("SCISSORS BEATS PAPER! YOU WIN!")
        userScore++
        break
      case 'scissors':
        outcome.text("IT'S A TIE!")
        break
    }
  }

  // LISTENERS -------------------------------------------------

  $('#rock').on('click', function() {
    userChoice = 'rock'
    compChooses()
    printChoices()
    compareUserRock(compChoice)
  })

  $('#paper').on('click', function() {
    userChoice = 'paper'
    compChooses()
    printChoices()
    compareUserPaper(compChoice)
  })

  $('#scissors').on('click', function() {
    userChoice = 'scissors'
    compChooses()
    printChoices()
    compareUserScissors(compChoice)
  })

})