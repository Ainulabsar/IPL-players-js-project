console.log("This is my javascript utiity")
let draggable = document.getElementById("batsman");
let Rupee1 = document.getElementById("Rs1");
let Rupee2 = document.getElementById("Rs2");
let Rupee3 = document.getElementById("Rs3");
let Rupee4 = document.getElementById("Rs4");
let teamname1 = document.getElementsByClassName("teamname1");
let teamname2 = document.getElementsByClassName("teamname2");
let teamname3 = document.getElementsByClassName("teamname3");
let teamname4 = document.getElementsByClassName("teamname4");
let r1 = 10000;
let r2 = 10000;
let r3 = 10000;
let r4 = 10000;
let div = ""
function allowDrop(ev) {
  ev.preventDefault();
  let data = ev.target.id
  div = data.toString()
  console.log(data)
}
drag = async (ev) => {
  ev.dataTransfer.setData("text", ev.target.id);
}
substract = async () => {
  console.log(div)
  if (div == 'rcb') {
    Rupee1.textContent -= r1;
  } else if (div == 'csk') {
    Rupee2.textContent -= r2;
  } else if (div == 'rr') {
    Rupee3.textContent -= r3;
  } else if (div == 'mi') {
    Rupee4.textContent -= r4;
  } 
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  // console.log(data)
  ev.target.appendChild(document.getElementById(data));
  console.log(ev.target)
  substract();
}
