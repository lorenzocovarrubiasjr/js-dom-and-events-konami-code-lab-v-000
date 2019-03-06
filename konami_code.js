const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init(e) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.which || e.detail);
  console.log(key)
  debugger;
  if (key === code[index]) {
    index++
    if (index === code.length){
        alert('You cracked the code, dawg! Congratulations!!!')
    }
    else {
      init(e)
    }
  }
}


window.addEventListener('keydown', init)
