

let divPainel = document.querySelector("#painel");

//Botão Next Scroll da Div Painel
document.getElementById("next").addEventListener("click",  ()=>{

    divPainel.scrollLeft += 300;

});

//Botão Previous Scroll da Div Painel============================

document.getElementById("previous").addEventListener("click",  ()=>{

    divPainel.scrollLeft -= 300;

});


//Wheel do Mouse Scroll da Div Painel===========================

divPainel.addEventListener("wheel", function (e){

  if(e.wheelDelta < 0)
{
    console.log("Rolar para Abaixo");
    divPainel.scrollLeft += 300;
} else
{
    console.log("Rolar para Cima");
    divPainel.scrollLeft -= 300; 
}
});