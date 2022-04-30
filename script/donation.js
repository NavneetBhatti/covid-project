
function validateletter() { 
    var name = document.getElementById('fname').value; 
    var letters= /[a-zA-Z]$/;
    

    if (letters.test(name) == false) { 
        window.alert("Please enter your name properly"); 
        fname.focus(); 
        return false; 
    } 

    

}
function validatenumber()
{
    var amount = document.getElementById('amount').value; 
    var numbers= /[0-9]$/;
    if (numbers.test(amount) == false { 
        window.alert("Please enter the amount properly"); 
        amount.focus(); 
        return false; 
    } 
}
