var count = 0;
var countx = 0;

function counter()
{
   
    count = count + 1;
    countx = countx + 1;
    document.getElementById("count-el").innerHTML = count;

    
}

var pre = "";



function save()
{
    pre = pre + count  + "- ";

    document.getElementById("pre").innerHTML ="Previous count :" + pre + "<br>TOTAL PASSANGER FOR TODAY : " + countx;


    count = 0;
    document.getElementById("count-el").innerHTML = count;

}

