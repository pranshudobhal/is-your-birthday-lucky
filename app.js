//Take user's complete birthday
var fullBirthday = document.getElementById('birthday');

//Take user's lucky number
var luckyNumber = document.getElementById('lucky-number');

//check if sum  of digits is of birthday is divisible by lucky number
document.getElementById('submit').addEventListener('click', calcLucky);

function calcLucky() {
  var birthday = fullBirthday.value;
  birthday = birthday.split('-');

  var sumOfBirthday = 0;
  for (var i = 0; i < birthday.length; i++) {
    sumOfBirthday += parseInt(birthday[i]);
  }

  var number = parseInt(luckyNumber.value);

  var lucky = "I'm sorry but Your birthday is not lucky :(";

  if (sumOfBirthday % number === 0) {
    lucky = 'Yayy!! Your birthday is lucky for you!!! :D';
  }

  //   document.getElementById('demo').innerText = birthday;
  //   document.getElementById('demo2').innerText = sumOfBirthday;
  //   document.getElementById('luck').innerText = number;

  //display lucky or not
  document.getElementById('lucky-display').innerText = lucky;
}
