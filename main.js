document.addEventListener( "click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , exibenome);
document.getElementById( "soma" ).addEventListener( "click" , somar);

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


  
function somar()
{

    let num1 = document.getElementById( "num1" ).value;
    let num2 = document.getElementById( "num2" ).value;
    document.getElementById( "resultado1").innerHTML =  parseFloat( num1 ) + parseFloat( num2 );
}

function dividir()
{
    let num1 = document.getElementById( "num3" ).value;
    document.getElementById( "num4" ).innerHTML = "";
    document.getElementById( "resultado1").value= "num1"/"num2";
}

function multiplicar()
{
    let num1 = document.getElementById( "num5" ).value;
    document.getElementById( "num6" ).innerHTML = "";
    document.getElementById( "resultado1").value= "num1"*"num2";
}

function subtrair()
{
    let num1 = document.getElementById( "num7" ).value;
    document.getElementById( "num8" ).innerHTML = "";
    document.getElementById( "resultado1").value= "num1"-"num2";
}