
    function changeContent()
{
row = window.prompt("Input the Row number(0,1,2)", "0");
column = window.prompt("Input the Column number(0,1)","0");
cell = window.prompt("Input the Cell content");  
var x=document.getElementById('myTable').rows[parseInt(row,10)].cells;
x[parseInt(column,10)].innerHTML=cell;
}

