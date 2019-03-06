const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init(e) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.which);

  if (key === code[index]) {
    console.log(key)
    index++
    if (index === code.length){
      alert("You cracked the code!")

      index = 0;
    }
    else {
      key = NaN;
      init(e)
    }
  }
}


window.addEventListener('keydown', init)
