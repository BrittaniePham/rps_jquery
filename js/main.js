$(document).ready( function() {
  //"Global || top level" variables
  //functions
  //listeners
  //code that runs

  var userChoice = 'none'

  //FUNCTIONS
  function updateUserScore() {
  }

  function updateCompScore() {
  }

  //LISTENERS
  $('#rock').on('click', function() {
    userChoice = 'rock'
    console.log('You chose ' + userChoice)
    $('userClicked').text('You chose' + userChoice)
  })

  $('#paper').on('click', function() {
    userChoice = 'paper'
    console.log('You chose ' + userChoice)
    $('userClicked').text('You chose' + userChoice)
  })

  $('#scissors').on('click', function() {
    userChoice = 'scissors'
    console.log('You chose ' + userChoice)
    $('userClicked').text('You chose' + userChoice)
  })

})