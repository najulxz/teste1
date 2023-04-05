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
    let num3 = document.getElementById( "num3" ).value;
    let num4 = document.getElementById( "num4" ).value;
    document.getElementById( "resultado2").innerHTML =  parseFloat( num3 ) / parseFloat( num4 );
}

function multiplicar()
{
    let num5 = document.getElementById( "num5" ).value;
    let num6 = document.getElementById( "num6" ).value;
    document.getElementById( "resultado3").innerHTML =  parseFloat( num5 ) * parseFloat( num6 );
}

function subtrair()
{
    let num7 = document.getElementById( "num7" ).value;
    let num8 = document.getElementById( "num8" ).value;
    document.getElementById( "resultado4").innerHTML =  parseFloat( num7 ) - parseFloat( num8 );
}