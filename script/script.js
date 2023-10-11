var create = window.document.querySelector("#create")
var sperfil = window.document.querySelector("#sperfil")
var mainame = window.document.querySelector("#mainame")
var secname = window.document.querySelector("#secname")

var inputname
var inputsecname

var page = true

function start(){
    sperfil.style="display:none"
}

function change(){
    if(page){
        page=false;
        create.style="display:none"
        sperfil.style="display:block"
        inputname = window.document.querySelector("#ipnome").value
        mainame.innerHTML = inputname
        inputsecname = window.document.querySelector("#ipsnome").value
        secname.innerHTML = inputsecname
    }else{
        page=true;
        create.style="display:block"
        sperfil.style="display:none"
    }
}