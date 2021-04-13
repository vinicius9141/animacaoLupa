function exibirMenssagem(){
    var conteudo = document.getElementById('buscar').value;
    alert(conteudo);
    var correto = prompt("O valor digitado " + conteudo + " esta correto?" )
    if (correto === "sim" || correto === "Sim" || correto === "SIM") {
        alert('entao ta bom')
    }else{
        alert("azar seu")
    }
    
}


//função pra mudar com as cores estao nas opções
function mudarBotao(){
    var corSelecionada = document.getElementById('seleCor').value
    console.log(corSelecionada)
    document.getElementById('changeColor').style.background=(corSelecionada)
}
//inclui a cor e armazena no local storage
function incluirCor(){
    var corInclusa = prompt('Hexadecimal da cor que deseja incluir')
    var corLocalStorage = document.querySelector('.novaCor').value = ('#' + corInclusa)
    return localStorage.setItem('cor' , corLocalStorage);
}
// pega a cor no local storage e altera para uma nova 
function setarCor(){
    var corArmazenada = localStorage.getItem('cor');
    console.log(corArmazenada)
    document.getElementById('changeColor').style.background = (corArmazenada)
}
//Reseta para a cor padrão
function resetarCor(){
    var defaultColor ="#008080"
    document.getElementById('changeColor').style.background = (defaultColor)
}
