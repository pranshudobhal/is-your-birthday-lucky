//take user's complete birthday
var fullBirthday = document.getElementById('birthday');

//take user's lucky number
var luckyNumber = document.getElementById('lucky-number');

//click function to check if birthday is lucky or not
document.getElementById('submit').addEventListener('click', calcLucky);

function calcLucky() {
  //take value of birthday and display it
  var birthday = fullBirthday.value;
  document.getElementById('demo').innerText = birthday;

  //split the birthday into array of digits
  birthday = birthday.split('');

  //convert array into string and replace - and , with empty space
  var newBirth = birthday.toString().replaceAll('-', '');
  newBirth = newBirth.replaceAll(',', '');

  //convert digits to integer and calculate sum
  var sumOfBirthday = 0;
  for (var i = 0; i < newBirth.length; i++) {
    sumOfBirthday += parseInt(newBirth[i]);
  }

  //display sum of digits of birthday
  document.getElementById('demo2').innerText = sumOfBirthday;

  //take lucky number and convert to integer
  var number = parseInt(luckyNumber.value);

  //display lucky number
  document.getElementById('luck').innerText = number;

  var lucky = "I'm sorry but Your birthday is not lucky :(";

  //check if sum of digits of birthday is lucky or not
  if (sumOfBirthday % number === 0) {
    lucky = 'Yayy!! Your birthday is lucky for you!!! :D';
  }

  //display if lucky or not
  document.getElementById('lucky-display').innerText = lucky;
}
