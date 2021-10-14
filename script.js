// MENU BURGER
const ToggleButton = document.getElementById('ToggleButton');
const SideBarreResponsive = document.getElementById('SideBarreResponsive');

ToggleButton.addEventListener('click', show);

function show(){
    SideBarreResponsive.classList.toggle('active');
}


// const accueil = document.querySelector('.accueil');

// accueil.addEventListener('click',() =>{
//     SideBarreResponsive.classList.remove('active')
// })


//  const text = document.querySelector(".julian");
//  const strText = text.textContent;
//  const splitText = strText.split("");
//  text.textContent = "";
//  for (let i = 0 ; i < splitText.length; i++){
//      textInnerHTML += "<span>" + splitText[i] + "</span>";

//  }

//  let char = 0;
//  let timer = SetInterval(onTick, 50);

//  function onTick(){
//      const span = text.querySelectorAll("span")[char];
//      span.classList.add("fade");
//      char++;
//     if (char === splitText.lenght){
//          complete();
//          return;
//      }
//  }

// //  function complete(){
// //      clearInterval(timer);
//     // timer = null;
// }

