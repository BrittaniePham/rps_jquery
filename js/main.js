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

  //LISTENERS
  $('#rock').on('click', function() {
    userChoice = 'rock'
    console.log('You chose: ' + userChoice)
    $('#userClicked').text('You chose: ' + userChoice)
    compChooses()
    console.log('The computer chose: ' + compChoice)
    $('#compClicked').text('The computer chose: ' + compChoice)
  })

  $('#paper').on('click', function() {
    userChoice = 'paper'
    console.log('You chose: ' + userChoice)
    $('#userClicked').text('You chose: ' + userChoice)
    compChooses()
    console.log('The computer chose: ' + compChoice)
    $('#compClicked').text('The computer chose: ' + compChoice)
  })

  $('#scissors').on('click', function() {
    userChoice = 'scissors'
    console.log('You chose: ' + userChoice)
    $('#userClicked').text('You chose: ' + userChoice)
    compChooses()
    console.log('The computer chose: ' + compChoice)
    $('#compClicked').text('The computer chose: ' + compChoice)
  })

})