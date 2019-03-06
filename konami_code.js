const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;
let keys = [];

function init(e) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.which || e.detail);
  console.log(key)
  debugger;
  if (key === code[index]) {
    keys.push(key)
    index++
    if (index === code.length){
        (keys === code) ? (alert("You cracked the code!"), index = 0, keys = []) : (index = 0, keys = []);
    }
    else {
      init(e)
    }
  }
}


window.addEventListener('keydown', init)
