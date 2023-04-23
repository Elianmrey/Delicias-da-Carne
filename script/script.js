let divPainel = document.querySelector("#painel");

document.getElementById("next").addEventListener("click", function ()
{
divPainel.scrollLeft += 300;
})

document.getElementById("previous").addEventListener("click", function ()
{
divPainel.scrollLeft -= 300;
})