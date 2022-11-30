const rollDiceBtn = document.getElementById('rollDiceBtn')
rollDiceBtn.addEventListener('click', function () {
  //Get random number between 1 and 6
  const firstRandomNumber = Math.floor(Math.random() * 6) + 1
  const secondRandomNumber = Math.floor(Math.random() * 6) + 1

  rollUser1Die(firstRandomNumber)
  rollUser2Die(secondRandomNumber)
  checkWinner(firstRandomNumber, secondRandomNumber)
})

function rollUser1Die(firstRandomNumber) {
  //images/dice1.png upto images/dice6.png
  const firstDiceImage = `assets/dice${firstRandomNumber}.png`

  document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage)
}

function rollUser2Die(secondRandomNumber) {
  //images/dice1.png up to images/dice6.png
  const secondDiceImage = 'assets/dice' + secondRandomNumber + '.png'

  document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage)
}

//logic for winner
const checkWinner = (firstRandomNumber, secondRandomNumber) => {
  document.querySelector('.rolls-message').innerHTML = `User1 rolled a 
  <span>
  ${firstRandomNumber}
  </span> and User2 rolled a 
  <span>
  ${secondRandomNumber}
  </span>`

  if (firstRandomNumber > secondRandomNumber) {
    document.querySelector('.winner').innerHTML = 'The winner is User 1'
  } else if (firstRandomNumber < secondRandomNumber) {
    document.querySelector('.winner').innerHTML = 'The winner is User 2'
  } else {
    document.querySelector('.winner').innerHTML = 'It is a draw!'
  }
}
