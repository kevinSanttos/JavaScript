function verificar(){
    var nacio = document.getElementById('nacionalidade')
    var res = document.getElementById('res')
    if(nacio != 'Brasil'){
        res.innerText = 'Você é estrangeiro'
    }
    else{
        res.innerText = 'você é Brasileiro'
    }
}