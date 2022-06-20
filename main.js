let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'CAR 1.jpg') {
      myImage.setAttribute('src','CAR 2.jpg');
    } else {
      myImage.setAttribute('src','CAR 1.jpg');
    }
}
