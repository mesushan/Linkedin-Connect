var x = document.getElementsByClassName('button-secondary-medium');

/* //accepting the very first connection in Linkedin
for (var i = 0; i < 1; i++){ */

//accepting all the connections available in Linkedin
for (var i = 0; i < x.length; i++) {

  /* //checking if the console prints the given action
  console.log('kali') */

  x[i].click();
}