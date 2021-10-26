import {showSocial} from './followMe.js'
const d = document;

window.onload = function(){
    sessionStorage.setItem('welcome', 'true'); 
    document.getElementById('changeS').classList = '';
    showSocial();
};