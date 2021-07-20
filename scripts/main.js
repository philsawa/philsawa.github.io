let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/81202016010.jpg') {
    myImage.setAttribute('src','images/mollieandellie2.jpg');
  } else {
    myImage.setAttribute('src','images/81202016010.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your preferred pronoun (e.g. "person" "per" or "pers").');
  if(!myName) {//if(myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ' knows Mollzilla is cool!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mollzilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
