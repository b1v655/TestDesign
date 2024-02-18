
function myFunction() {
    var Loyality=document.getElementById("loyality-check").checked; // checkedet átírni valuera
    var Credit=document.getElementById("credit-check").checked;
    var Cornq=document.getElementById("corn-weight").value;
    var Wheatq=document.getElementById("wheat-weight").value;
    
    if(Cornq===""){
        Cornq=0;
    }
    if(Wheatq===""){
        Weath=0;
    }
    var Cornp=180;
    var Wheatp=200;
    var fullprice=0;
    var Truck=40
    if(checkInp(Wheatq)&&checkInp(Cornq)||Cornq===0||Wheatq===0)
    {
        var Cornqi=parseInt(Cornq);  //parsekat kiszedni
        var Wheatqi=parseInt(Wheatq); 
        if(Cornqi+Wheatqi>=300){
            
            fullprice=Cornqi*Cornp+Wheatp*Wheatqi;
            if(Loyality)
            fullprice=fullprice*0.95;
        } else          //kiszedeni
        if(Cornqi>=200){
           
            fullprice=Cornqi*Cornp+Wheatp*Wheatqi;
            if(Loyality)
            fullprice=fullprice*0.95;
            fullprice=fullprice+Math.ceil(Wheatqi/40)*250;

        } else
        if(Wheatqi>=200){
            fullprice=Cornqi*Cornp+Wheatp*Wheatqi;
            if(Loyality)
            fullprice=fullprice*0.95;
            fullprice=fullprice+Math.ceil(Cornqi/40)*250;
        }
        else
        {
            fullprice=Cornqi*Cornp+Wheatp*Wheatqi;
            if(Loyality)
            fullprice=fullprice*0.95;
            fullprice=fullprice+Math.ceil(Wheatqi/40)*250+Math.ceil(Cornqi/40)*250;
        }
        if (Cornqi+Wheatqi>=1000)
            fullprice=fullprice*0.98;
        if (!Credit)
            fullprice=fullprice+200;
        if(checkInp(fullprice))
        document.getElementById("calculated-price").value=fullprice + " EUR";
    }
    else
    {
        document.getElementById("calculated-price").value="Computing failed!";
    }


}

function checkInp(x)
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