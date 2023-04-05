document.addEventListener( "click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , exibenome);

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function exibenome()
{
    let usuario = document.getElementById( "nome" ).value ;
    document.getElementById( "mensagem" ).innerHTML = " meu nome e: " + usuario;
    document.getElementById( "nome" ).value = "" ;
}

documen.getElementById( "btn-soma" ).addEventListener( "click" , somar);

function somar()
{
    let conta = document.getElementById( "num1" ).value;
    document.getElementById( "num2" ).innerHTML = "";
    document.getElementById( "resultado").value= "num1"+"num2";
}