var d = new Date()
var hora = window.document.querySelector("#hora")
var create = window.document.querySelector("#create")
var sperfil = window.document.querySelector("#sperfil")
var mainame = window.document.querySelector("#mainame")
var secname = window.document.querySelector("#secname")
var genelement = window.document.querySelector("#ehgen")
var imggender = window.document.querySelector("#gendericon")
var imgicon = window.document.querySelector("#imageicon")
var imgdate = window.document.querySelector("#dateicon")
var idade = window.document.querySelector("#mostraidade")
var gendername = window.document.querySelector("#gendername")
var botalterna = window.document.querySelector("#botaoalterna")
var diahoje = window.document.querySelector("#diahoje")

var reverencia = window.document.querySelector("#reverencia")
var revitem = document.getElementById("revitem");

var inputname
var inputsecname
var revitem
var validade
var clockloop

var bclock = true
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

function autonamesize(){
    
    mainame.innerHTML = inputname + ','
    if((mainame.innerHTML.length-1)>10){
        if((mainame.innerHTML.length-1)>20){
            mainame.style="font-size: 2em; margin-top:-15px"
        }else{
            mainame.style="font-size: 4em; margin-top:-25px"
        }
    }else{
        if((mainame.innerHTML.length-1)<6){
            mainame.style="font-size: 9.6em"
        }else{
            mainame.style="font-size: 6.6em"
        }
    }
    
}

function reverenciar(){
    if(d.getHours() >= 4 && d.getHours() <= 8){
        reverencia.innerHTML = "Boa manhã, "
    }else if(d.getHours() >= 9 && d.getHours() < 13){
        reverencia.innerHTML = "Bom dia, "
    }else if(d.getHours() >= 13 && d.getHours() < 19){
        reverencia.innerHTML = "Boa tarde, "
    }else if(d.getHours() >= 19 && d.getHours() <= 23){
        reverencia.innerHTML = "Boa noite, "
    }else if(d.getHours() >= 0 && d.getHours() < 5){
        reverencia.innerHTML = "Boa madrugada, "
    }
    switch(revitem.options[revitem.selectedIndex].value){
        case 'arte': reverencia.innerHTML += 'Visionario(a)';
            break;
        case 'admin': reverencia.innerHTML += 'Diretor(a)';
            break;
        case 'atle': reverencia.innerHTML += 'Grande';
            break;
        case 'autom': reverencia.innerHTML += 'Inventor(a)';
            break;
        case 'arqui': reverencia.innerHTML += 'Projetista';
            break;
        case 'alime': reverencia.innerHTML += 'Chef';
            break;
        case 'biolo': reverencia.innerHTML += 'Cientista';
            break;
        case 'comun': reverencia.innerHTML += 'Diplomata';
            break;
        case 'enge': reverencia.innerHTML += 'Chefe(a)';
            break;
        case 'elet': reverencia.innerHTML += 'Tecnico(a)';
            break;
        case 'hist': reverencia.innerHTML += 'Pesquisador(a)';
            break;
        case 'inves': reverencia.innerHTML += 'Empresario(a)';
            break;
        case 'info': reverencia.innerHTML += 'Tecnico(a)';
            break;
        case 'logis': reverencia.innerHTML += 'Tecnico(a)';
            break;
        case 'legis': reverencia.innerHTML += 'Excelentissimo(a)';
            break;
        case 'medic': reverencia.innerHTML += 'Doutor(a)';
            break;
        case 'mecan': reverencia.innerHTML += 'Tecnico(a)';
            break;
        case 'marce': reverencia.innerHTML += 'Artesão';
            break;
        case 'mento': reverencia.innerHTML += 'Mestre(a)';
            break;
        case 'matem': reverencia.innerHTML += 'Genio(a)';
            break; /*------------------------*/
        case 'opera': reverencia.innerHTML += 'Operador(a)';
            break;
        case 'organ': reverencia.innerHTML += 'Inspetor(a)';
            break;
        case 'psico': reverencia.innerHTML += 'Doutor(a)';
            break;
        case 'prog': reverencia.innerHTML += 'Desenvolvedor(a)';
            break;
        case 'quim': reverencia.innerHTML += 'Criador(a)';
            break;
        case 'segur': reverencia.innerHTML += 'Senhor(a)';
            break;
        case 'venda': reverencia.innerHTML += 'Consultor(a)';
            break;
        default: reverencia.innerHTML += 'Prezado(a)'
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

function botalt(){
    page ? botalterna.innerHTML='Voltar' : botalterna.innerHTML='Confirmar'
}

function clock(){
    d = new Date()
    bclock = !bclock
    if(bclock){
        hora.innerHTML = (d.getHours()<10?'0'+d.getgetHours():d.getHours())+':'+(d.getMinutes()<10?'0'+d.getMinutes():d.getMinutes())
    }else{
        hora.innerHTML = (d.getHours()<10?'0'+d.getgetHours():d.getHours())+' '+(d.getMinutes()<10?'0'+d.getMinutes():d.getMinutes())
    }

    if((d.getHours()>18 && d.getHours()<=23)||(d.getHours()>=0 && d.getHours()<5)){
        imgdate.setAttribute('src','imagens/daily/night.png')
    }else if((d.getHours()>4 && d.getHours()<=6)||(d.getHours()>4 && d.getHours()<=6)){
        imgdate.setAttribute('src','imagens/daily/sunset.png')
    }else{
        imgdate.setAttribute('src','imagens/daily/day.png')
    }
}

function daynow(){
    d = new Date()
    
    switch(d.getDay()){
        case 0:
            diahoje.innerHTML = "Domingo"
            break;
        case 1:
            diahoje.innerHTML = "Segunda-Feira"
            break;
        case 2:
            diahoje.innerHTML = "Terça-Feira"
            break;
        case 3:
            diahoje.innerHTML = "Quarta-Feira"
            break;
        case 4:
            diahoje.innerHTML = "Quinta-Feira"
            break;
        case 5:
            diahoje.innerHTML = "Sexta-Feira"
            break;
        case 6:
            diahoje.innerHTML = "Sabado"
            break;
    }
    diahoje.innerHTML += "<br>"+d.getDate()+"/"+((d.getMonth())+1)+"/"+d.getFullYear()
}

function change(){
    page = !page;
    botalt()
    if(page){
        create.style="display:none"
        sperfil.style="display:block"

        inputsecname = window.document.querySelector("#ipsnome").value
        secname.innerHTML = inputsecname + '.'
        inputname = window.document.querySelector("#ipnome").value
        idade.innerHTML = window.document.querySelector("#idade").value + ' Anos'

        clock()/* -Hora atualizando em tempo real- */
        clockloop = setInterval(clock, 500);
        daynow()

        autonamesize()
        reverenciar()
        iconegenero()
        iconeidade()
    }else{
        create.style="display:block;"
        sperfil.style="display:none;"
        clearInterval(clockloop)
    }
}

