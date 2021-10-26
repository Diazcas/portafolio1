import { changeSOut, changeSOutnI } from './changeS.js';

const d = document;
const body = d.getElementsByTagName("body")[0];
var location = window.location.href.substring(22, window.location.href.length);
var msjHtml = 
`<form class="out" id="msj" action="post">
  <fieldset>
    <label for="email">E-mail:</label>
    <input class="inp" type="email" name="email" id="email" placeHolder="anibalmauriciod@gmail.com"><br>
    <label for="textarea">Mensaje: </label>
    <textarea class="inp" name="textarea" id="textarea" cols="30" rows="5"></textarea><br>
    <legend>Contactame</legend>
    <input type="submit" id="submit" value="Enviar">
  </fieldset>
</form>`

var navHtml = 
  `<div class="labels">
    <label id="label1">Home</label>
    <label id="label2">Proyectos</label>
    <label id="label3">Contáctame</label>
    <label id="label4">Conocimiento</label>
  </div>
  <ul>
    <li class="menu">
      <a><i class="fas fa-home"></i></a>
    </li>
    <li class="menu">
      <a><i class="far fa-folder"></i></a>
    </li>
    <li class="menu">
      <a><i class="far fa-envelope"></i></a>
    </li>
    <li class="menu">
      <a><i class="far fa-question-circle"></i></a>
    </li>
  </ul>`

d.getElementsByTagName('nav')[0].innerHTML = navHtml;
var formFilter = d.getElementById("formfilter");
formFilter.innerHTML = msjHtml;
d.getElementById('submit').disabled = 'true'
var elNav = d.getElementsByClassName("menu");
var elNavHome = elNav[0];
var elNavFolder = elNav[1];
var elNavMsj = elNav[2];
var elNavAbout = elNav[3];

function mostrarTema(i) {
  var el = d.getElementById(`${"label" + i}`);
  el.className = "active";
  var el1 = d.getElementsByTagName(`a`)[i - 1];
  el1.className = "hover";
}

function ocultarTema(i) {
  var el = d.getElementById(`${"label" + i}`);
  el.className = "";
  var el1 = d.getElementsByTagName(`a`)[i - 1];
  el1.className = "";
}

elNavHome.addEventListener(
  "mouseover",
  function () {
    mostrarTema(1);
  },
  false
);

elNavHome.addEventListener(
  "click",
  function () {
    sessionStorage.setItem('welcome', 'true');
    if (location == 'index.html') {
      d.getElementById("changeS").classList = "activeM";
      setTimeout(() => {
        changeSOut();
      }, 500);
    } else {
      d.getElementById("changeS").classList = "active";
      setTimeout(() => {
        window.open("index.html", "_self");
      }, 500);
    }
  },
  false
);

elNavHome.addEventListener(
  "mouseout",
  function () {
    ocultarTema(1);
  },
  false
);

elNavFolder.addEventListener(
  "mouseover",
  function () {
    mostrarTema(2);
  },
  false
);

elNavFolder.addEventListener(
  "click",
  function () {

    if (location == 'proyectos.html') {
      d.getElementById("changeS").classList = "activeM";
      setTimeout(() => {
        changeSOutnI();
      }, 500);
    } else {
      d.getElementById("changeS").classList = "active";
      setInterval(() => {
        window.open("proyectos.html", "_self");
      }, 500);
    }
  },
  false
);

elNavFolder.addEventListener(
  "mouseout",
  function () {
    ocultarTema(2);
  },
  false
);

elNavMsj.addEventListener(
  "mouseover",
  function () {
    mostrarTema(3);
  },
  false
);

function showContactMeIndex() {
  var formMsj = d.getElementById("msj");
  var hgroup = d.getElementsByTagName("hgroup")[0];
  if (formMsj.classList == "active1 active") {
    formMsj.classList = "";
    formFilter.classList.toggle("active");
    formFilter.classList.toggle("show");
    formFilter.classList = "";
    setTimeout(() => {
      hgroup.classList = "";
      formFilter.classList = 'out'
    }, 200);

  } else {
    hgroup.classList = "msjActive";
    formMsj.classList = "active1";
    formFilter.classList.toggle("active");
    setTimeout(() => {
      formMsj.classList = "active1 active";
      formFilter.classList.toggle("show");
    }, 500);
  }
}

function showContactMe() {
  var formMsj = d.getElementById("msj");
  var formFilter = d.getElementById("formfilter");
  if (formMsj.classList == "active1 active") {
    formMsj.classList = "";
    formFilter.classList.toggle("active");
    formFilter.classList.toggle("show");
    formFilter.classList = "";
    setTimeout(() => {
      formFilter.classList = 'out'
    }, 200);

  } else {
    formMsj.classList = "active1";
    formFilter.classList.toggle("active");
    setTimeout(() => {
      formMsj.classList = "active1 active";
      formFilter.classList.toggle("show");
    }, 100);
  }
}

elNavMsj.addEventListener(
  "click",
  function () {
    // console.log('hola')
    if (location == 'index.html') {
      showContactMeIndex();
    } else {
      showContactMe();
    }
  },
  false
);

// console.log(location)

if (location == 'index.html') {
  d.getElementById('formfilter').addEventListener('click', showContactMeIndex, false)
  // console.log('hola')
}

elNavMsj.addEventListener(
  "mouseout",
  function () {
    ocultarTema(3);
  },
  false
);

elNavAbout.addEventListener(
  "mouseover",
  function () {
    mostrarTema(4);
  },
  false
);

elNavAbout.addEventListener(
  "mouseout",
  function () {
    ocultarTema(4);
  },
  false
);

elNavAbout.addEventListener('click',
  function () {
    if (location == 'recorrido.html') {
      d.getElementById("changeS").classList = "activeM";
      setTimeout(() => {
        changeSOutnI();
      }, 500);
    } else {
      d.getElementById("changeS").classList = "active";
      setInterval(() => {
        window.open("recorrido.html", "_self");
      }, 500);
    }
  }
  , false);