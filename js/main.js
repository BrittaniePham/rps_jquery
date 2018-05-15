$(document).ready( function() {
  //"Global || top level" variables
  //functions
  //listeners
  //code that runs

  //VARIABLES
  var userChoice
  var options = ['rock', 'paper', 'scissors']
  var compChoice

  //FUNCTIONS
  function updateUserScore() {
  }

  function updateCompScore() {
  }

  function compChooses() {
    compChoice = options[Math.floor(Math.random() * options.length)]
  }

  function printScore() {
    $('#userClicked').text('You chose: ' + userChoice)
    $('#compClicked').text('The computer chose: ' + compChoice)
  }

  //LISTENERS
  $('#rock').on('click', function() {
    userChoice = 'rock'
    compChooses()
    printScore()
  })

  $('#paper').on('click', function() {
    userChoice = 'paper'
    compChooses()
    printScore()
  })

  $('#scissors').on('click', function() {
    userChoice = 'scissors'
    compChooses()
    printScore()
  })

})