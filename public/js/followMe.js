const d = document;
var html = 
  `<div class="social">
    <div><i class="fab fa-facebook-square"></i></div>
    <div><i class="fab fa-instagram"></i></div>
    <div><i class="fab fa-whatsapp"></i></div>
  </div>`
const elSocial = d.getElementById('SocialM')
elSocial.innerHTML = html;


function showSocial(){
    setTimeout(() => {
        d.getElementById("SocialM").classList = "active";
      }, 500);
}

function waveRot(){
  // console.log('hola')
  // elAbout.classList.toggle('left')
  // setInterval(() => {
  //   if(elAbout.classList == 'about active left'){
  //     elAbout.classList.toggle('left')
  //     elAbout.classList.toggle('right')
  //   } else{
  //     elAbout.classList.toggle('left')
  //     elAbout.classList.toggle('right')
  //   }
  // }, 3000);
  
}

export {showSocial,waveRot};