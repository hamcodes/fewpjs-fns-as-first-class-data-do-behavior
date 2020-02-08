/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const t = time.split(':');
  const pt = parseInt(t[0]);
  if ( pt >= 0 && pt < 12){
    return 'Good Morning'
  } else if ( pt >= 12 && pt < 17 ){
    return 'Good Afternoon'
  } else if ( pt >= 17 ) {
    return 'Good Evening'
  } else 
    return 'Not a valid time'
}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
/* Write your implementation of displayMessage() */
