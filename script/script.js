var create = window.document.querySelector("#create")
var sperfil = window.document.querySelector("#sperfil")
var mainame = window.document.querySelector("#mainame")
var secname = window.document.querySelector("#secname")
var genelement = window.document.querySelector("#ehgen")
var imggender = window.document.querySelector("#gendericon")
var imgicon = window.document.querySelector("#imageicon")
var idade = window.document.querySelector("#mostraidade")
var gendername = window.document.querySelector("#gendername")

var reverencia = window.document.querySelector("#reverencia")
var revitem = document.getElementById("revitem");

var inputname
var inputsecname
var revitem
var validade

var page = true

function start(){
    sperfil.style="display:none"
    clgender()
}

function clgender(){
    genelement.style="display: none"
}
function opgender(){
    genelement.style="display: block"
}

function reverenciar(){
    switch(revitem.options[revitem.selectedIndex].value){
        case 'arte': reverencia.innerHTML = 'Visionario(a)';
            break;
        case 'admin': reverencia.innerHTML = 'Diretor(a)';
            break;
        case 'atle': reverencia.innerHTML = 'Grande';
            break;
        case 'autom': reverencia.innerHTML = 'Inventor(a)';
            break;
        case 'arqui': reverencia.innerHTML = 'Projetista';
            break;
        case 'alime': reverencia.innerHTML = 'Chef';
            break;
        case 'biolo': reverencia.innerHTML = 'Cientista';
            break;
        case 'comun': reverencia.innerHTML = 'Diplomata';
            break;
        case 'enge': reverencia.innerHTML = 'Chefe(a)';
            break;
        case 'elet': reverencia.innerHTML = 'Tecnico(a)';
            break;
        case 'hist': reverencia.innerHTML = 'Pesquisador(a)';
            break;
        case 'inves': reverencia.innerHTML = 'Empresario(a)';
            break;
        case 'info': reverencia.innerHTML = 'Tecnico(a)';
            break;
        case 'logis': reverencia.innerHTML = 'Tecnico(a)';
            break;
        case 'legis': reverencia.innerHTML = 'Excelentissimo(a)';
            break;
        case 'medic': reverencia.innerHTML = 'Doutor(a)';
            break;
        case 'mecan': reverencia.innerHTML = 'Tecnico(a)';
            break;
        case 'marce': reverencia.innerHTML = 'Artesão';
            break;
        case 'mento': reverencia.innerHTML = 'Mestre(a)';
            break;
        case 'matem': reverencia.innerHTML = 'Genio(a)';
            break; /*------------------------*/
        case 'opera': reverencia.innerHTML = 'Operador(a)';
            break;
        case 'organ': reverencia.innerHTML = 'Chefe(a)';
            break;
        case 'psico': reverencia.innerHTML = 'Doutor(a)';
            break;
        case 'prog': reverencia.innerHTML = 'Mestre(a)';
            break;
        case 'quim': reverencia.innerHTML = 'Criador(a)';
            break;
        case 'segur': reverencia.innerHTML = 'Senhor(a)';
            break;
        case 'venda': reverencia.innerHTML = 'Consultor(a)';
            break;
        default: reverencia.innerHTML = 'Nobre'
    }
    
}

function iconeidade(){
    validade = Number(window.document.querySelector("#idade").value)
    if(validade < 17){
        if(document.getElementById('ifemi').checked){
            imgicon.setAttribute('src','imagens/age/girl.png')
        }else{
            imgicon.setAttribute('src','imagens/age/boy.png')
        }
    }else if(validade > 16 && validade <= 60){
        if(document.getElementById('ifemi').checked){
            imgicon.setAttribute('src','imagens/age/woman.png')
        }else{
            imgicon.setAttribute('src','imagens/age/man.png')
        }
    }else{
        if(document.getElementById('ifemi').checked){
            imgicon.setAttribute('src','imagens/age/elderwoman.png')
        }else{
            imgicon.setAttribute('src','imagens/age/elderman.png')
        }
    }
}

function iconegenero(){
    if(document.getElementById('imasc').checked){
        imggender.setAttribute('src','imagens/gender/male.png')
        gendername.innerHTML = 'Masculino'
    }else if(document.getElementById('ifemi').checked){
        imggender.setAttribute('src','imagens/gender/female.png')
        gendername.innerHTML = 'Feminino'
    }else{
        imggender.setAttribute('src','imagens/gender/ogender.png')
        gendername.innerHTML = window.document.querySelector("#igen").value
    }
}

function change(){
    page = !page;
    if(page){

        create.style="display:none"
        sperfil.style="display:block"

        inputname = window.document.querySelector("#ipnome").value
        mainame.innerHTML = inputname + ','

        inputsecname = window.document.querySelector("#ipsnome").value
        secname.innerHTML = inputsecname

        idade.innerHTML = window.document.querySelector("#idade").value + ' Anos'

        reverenciar()
        iconegenero()
        iconeidade()
        
    }else{
        create.style="display:block"
        sperfil.style="display:none"
    }
}

