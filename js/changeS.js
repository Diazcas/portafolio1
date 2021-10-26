
const d = document;
var loadingC = d.getElementById("loading");
var loadingCC = d.getElementsByTagName("loading")[0];

function changeSOut(){
    loadingC.classList = "exit";
    loadingCC.classList = "exit";
    loadingCC.style.display = 'none';
    loadingC.style.display = 'none';
    d.getElementById('changeS').classList = 'activeComing';
    setTimeout(() => {
        d.getElementById('changeS').classList = '';
    }, 1);
}

function changeSOutnI(){
    d.getElementById('changeS').classList = 'activeComing';
    setTimeout(() => {
        d.getElementById('changeS').classList = '';
    }, 1);
}

export {changeSOut, changeSOutnI};