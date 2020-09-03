let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/81202016010.jpg') {
    myImage.setAttribute('src','images/mollieandellie.jpg');
  } else {
    myImage.setAttribute('src','images/81202016010.jpg');
  }
}
