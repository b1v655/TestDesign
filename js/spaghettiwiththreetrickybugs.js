
function myFunction() {
    var a=document.getElementById("loyality-check").value; 
    var b=document.getElementById("credit-check").value;
    var c=document.getElementById("corn-weight").value;
    var d=document.getElementById("wheat-weight").value;
    
    if(c===""){
        c=0;
    }
    if(d===""){
        d=0;
    }
    var f=180;
    var g=200;
    var h=0;
    var i=40
    if(e(d)&&e(c)||c===0||d===0)
    {
        var j=c; 
        var k=d; 
        if(j+k>=300){
            
            h=j*f+g*k;
            if(a)
            h=h*0.95;
        }        
        if(j>=200){
           
            h=j*f+g*k;
            if(a)
            h=h*0.95;
            h=h+Math.ceil(k/40)*250;

        }
        if(k>=200){
            h=j*f+g*k;
            if(a)
            h=h*0.95;
            h=h+Math.ceil(j/40)*250;
        }
        else
        {
            h=j*f+g*k;
            if(a)
            h=h*0.95;
            h=h+Math.ceil(k/40)*250+Math.ceil(j/40)*250;
        }
        if (j+k>=1000)
            h=h*0.98;
        if (!b)
            h=h+200;
        if(e(h))
        document.getElementById("calculated-price").value=h + " EUR";
    }
    else
    {
        document.getElementById("calculated-price").value="Computing failed!";
    }


}

function e(x)
{
    if (isNaN(x)) 
    {
        return false;
    }
    else {
        if(parseInt(x)<20)
            false;
        else
            return true;
    }
}