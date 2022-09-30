function getOptions(){
    var x= document.getElementById("mySelect")
    var y = "No. of items in dropdown is : ";
  var i;
  l=document.getElementById("mySelect").length;  
  y = y+l;
  for (i=0;i<x.length;i++)
    {
      y = y + "\n" + x.options[i].text;
    }
    alert(y);
  }
  