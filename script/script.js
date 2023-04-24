let divPainel = document.querySelector("#painel");

let scrollableArea = window.innerWidth;
let wheelScrollUp = WheelEvent.DOM_DELTA_LINE;
let scrollAmmount = window.scrollX;

console.log(`Scrollable Area: ${scrollableArea}`);
console.log(`Scroll Up: ${wheelScrollUp}`);


//Botão Next Scroll da Div Painel
document.getElementById("next").addEventListener("click",  ()=>{

    divPainel.scrollLeft += 300;

})

//Botão Previous Scroll da Div Painel============================

document.getElementById("previous").addEventListener("click",  ()=>{

    divPainel.scrollLeft -= 300;

})


//Wheel do Mouse Scroll da Div Painel===========================

divPainel.addEventListener("wheel", (event)=>{
    //impede o comportamento padrão do evento wheel do mouse
    
 if(wheelScrollUp > 0 )
 {
    event.preventDefault();
 divPainel.scrollLeft += 300;
 scrollAmmount += divPainel.scrollLeft;

}else if(wheelScrollUp === 1 && scrollAmmount === Math.ceil(scrollableArea) )
{
    event.preventDefault();
    divPainel.scrollLeft -= 300;
    // scrollAmmount -= divPainel.scrollLeft;
}
console.log(scrollAmmount);
})

