let screen = document.querySelector(".screen");
// ---QuerySelector: we target the screen by its selector and the we create a variable!

const uploadToScreen = (number) => {
  screen.append(number);
};
// ----------Once Clicked/Initialized ...i want the num_key to show its value to the screen

const clearScreen = () => {
  screen.innerHTML = "";
};
// -------- we use a function to target our screen variable we created and we set it to an empty string!//

const calculateTerms = (x, y, sign) => {
  if (sign === "+") {
    screen.innerHTML = parseInt(x) + parseInt(y);
  } else if (sign === "-") {
    screen.innerHTML = parseInt(x) - parseInt(y);
  } else if (sign === "X") {
    screen.innerHTML = parseInt(x) * parseInt(y);
  } else if (sign === "%") {
    screen.innerHTML = parseInt(x) / parseInt(y);
  } else {
    alert("somethings wrong");
  }
};

const splitInput = () => {
  let nput = screen.textContent;

  console.log(nput);
  // split into 2 container
  if (nput.includes("+")) {
    let solve = nput.split("+");
    console.log("input:", solve);
    calculateTerms(solve[0], solve[1], "+");
  } else if (nput.includes("-")) {
    let solve = nput.split("-");
    console.log("input:", solve);
    calculateTerms(solve[0], solve[1], "-");
  } else if (nput.includes("X")) {
    let solve = nput.split("X");
    console.log("input:", solve);
    calculateTerms(solve[0], solve[1], "X");
  } else if (nput.includes("%")) {
    let solve = nput.split("%");
    console.log("input:", solve);
    calculateTerms(solve[0], solve[1], "%");
  } else {
    alert("You need to add a Symbol in order to calculate");
  }
  // addContainer
};
const directions=()=>{
    let info=document.querySelector('.infoDiv')
info.innerHTML="use the keys for basic mathematical operations,the sqrt function will be added later!";
}
//lastly we have target another div with query selector a variable is made and then information is rendered!//