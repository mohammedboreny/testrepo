function compute()
{
         /*Create a variable called 'principal' and
    assign to it the value of the input element "principal"*/
     var principal = document.getElementById("principal").value;
    /* Create a variable called rate 
    and assign to it the value of the input element "rate" */
    var rate = document.getElementById("rate").value;
    /*Create a variable called years 
    and assign to it the value of the input element "years"*/ 
    var years = document.getElementById("years").value;
    /*Create a variable called interest
     and assign to it the value of principal * years * rate / 100*/
    var interest = principal * years * rate /100;
    /*Write the logic to convert the 'No of Years'
     into the actual year in the future.*/ 
    var year = new Date().getFullYear()+parseInt(years);
    /*Add validation for "Principal" input box.
     If the user enters zero or negative values,
     show an alert "Enter a positive number"*/
    if( principal <=0 && principal=="" ) {
        alert( "Enter a positive number" );
        principal.focus() ;
        return false;}
    else{
/*Get the reference to the element named 'result'*/ 
    var x = "If you deposit <mark>" + principal+",</mark><br>";
    var y = "at an interest rate of <mark>" + rate+"%,</mark><br>";
    var z = "You will receive an amount of <mark>" + interest+",</mark><br>";
    var w = "in the year <mark>" + year +"</mark>"; 
    document.getElementById("result").innerHTML=x+y+z+w;
    }
}
/*Write a function that reads the value of the range slider 
and displays it the <span>adjacent to the slider.*/
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

        