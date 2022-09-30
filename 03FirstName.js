function getFormValue()
{
    var a=document.getElementById("forms");
    for(var i=0;i<a.length;i++)
    {
         if(a.elements[i].value!='Submit')
         {
            console.log(a.elements[i].value);
         }

    }
}