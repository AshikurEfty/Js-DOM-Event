//option 1: directly set on the HTML element

//option 2: add onclick function
// Important: some time use this process
function makeRed(){
    document.body.style.backgroundColor="red";
  }

//option 3: add onclick function
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick= makeBlue;

function makeBlue(){
    document.body.style.backgroundColor='blue';
}


//option 4: add onclick function
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor='purple';
};

//option 5: add onclick function
const pinkButton= document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor='pink';
}

//option 6: add onclick function
const makeGreenButton = document.getElementById('make-green');
      makeGreenButton.addEventListener('click', function makeGreen(){
        document.body.style.backgroundColor='green';
      } )


 //option final 7: add onclick function 
 // Important: all time use this process
  // document.getElementById('make-gold', function(){})
  document.getElementById('make-goldenrod').addEventListener('click',  function(){
    document.body.style.backgroundColor='goldenrod';
  })    