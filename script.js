const text = document.getElementById("paragraphe").textContent;
console.log(text);

function myFunction() {
  return text + ' welcome to my blog';
}
console.log(myFunction());

function checkIsBingo(number) {
  if (number > 5) {
    return 'Bingo';
  }else {
    return 'oups';
  }
}
console.log(checkIsBingo(3));
console.log(checkIsBingo(5));
console.log(checkIsBingo(7));