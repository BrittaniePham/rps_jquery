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
    outcome = $('#outcome')
    switch(compChoice) {
      case 'rock':
        $('#outcome').removeClass('loser')
        $('#outcome').removeClass('winner')
        $('#outcome').addClass('tie')
        outcome.text("IT'S A TIE!")
        break
      case 'paper':
        $('#outcome').addClass('loser')
        $('#outcome').removeClass('winner')
        $('#outcome').removeClass('tie')
        outcome.text("PAPER BEATS ROCK... YOU LOSE")
        compScore++
        break
      case 'scissors':
        $('#outcome').addClass('winner')
        $('#outcome').removeClass('loser')
        $('#outcome').removeClass('tie')
        outcome.text("ROCK BEATS SCISSORS! YOU WIN!")
        userScore++
        break
    }
    $('#userScore').text('Your score: ' + userScore)
    $('#compScore').text("Computer's score: " + compScore)
  }

  function compareUserPaper(compChoice) {
    userChoice = 'paper'
    outcome = $('#outcome')
    switch(compChoice) {
      case 'rock':
        $('#outcome').addClass('winner')
        $('#outcome').removeClass('loser')
        $('#outcome').removeClass('tie')
        outcome.text("PAPER BEATS ROCK! YOU WIN!")
        userScore++
        break
      case 'paper':
        $('#outcome').removeClass('loser')
        $('#outcome').removeClass('winner')
        $('#outcome').addClass('tie')
        outcome.text("IT'S A TIE!")
        break
      case 'scissors':
        $('#outcome').addClass('loser')
        $('#outcome').removeClass('winner')
        $('#outcome').removeClass('tie')
        outcome.text("SCISSORS BEATS PAPER... YOU LOSE")
        compScore++
        break
    }
    $('#userScore').text('Your score: ' + userScore)
    $('#compScore').text("Computer's score: " + compScore)
  }

  function compareUserScissors(compChoice) {
    userChoice = 'scissors'
    outcome = $('#outcome')
    switch(compChoice) {
      case 'rock':
        $('#outcome').addClass('loser')
        $('#outcome').removeClass('winner')
        $('#outcome').removeClass('tie')
        outcome.text("ROCK BEATS SCISSORS... YOU LOSE")
        compScore++
        break
      case 'paper':
        $('#outcome').addClass('winner')
        $('#outcome').removeClass('loser')
        $('#outcome').removeClass('tie')
        outcome.text("SCISSORS BEATS PAPER! YOU WIN!")
        userScore++
        break
      case 'scissors':
        $('#outcome').removeClass('loser')
        $('#outcome').removeClass('winner')
        $('#outcome').addClass('tie')
        outcome.text("IT'S A TIE!")
        break
    }
    $('#userScore').text('Your score: ' + userScore)
    $('#compScore').text("Computer's score: " + compScore)
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

  $('#restart').on('click', function() {
    window.location.reload();
  })
});

// getElementById('restart').addEventListener('click', function() {
//    window.location.reload();
// })
