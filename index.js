var output=document.getElementById('text2');
var button=document.getElementsByTagName('input');
var currentDisplay;
for(i=0;i<button.length;i++)
{
    button[i].onclick=function(e){
        var input =e.target.value
        updateDisplay(input);
        currentDisplay=output.value;
    }
}


function updateDisplay(input)
{
    console.log(currentDisplay);
            if(input=="C")
            {
                output.value=" ";
            }
            else if(input!="C"&&input!="=")
            {
                output.value+=input;
            }
            else if(input=="=")
            {
                var display=output.value;
                output.value=eval(display);
            }
}
