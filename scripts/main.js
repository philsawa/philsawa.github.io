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
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Molzilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Molzilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
