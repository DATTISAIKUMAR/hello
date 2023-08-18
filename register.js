
function hello(){
    let email1=document.getElementById("ema").value;
    let pass=document.getElementById("pass").value;
    let first=email1.indexOf("@");
    let last=email1.lastIndexOf(".");
    if(email1=="" ){
        confirm("enter the email");
        return false;
    }
    else if(first==0 && last < first){
        alert("enter the valid email");

    }
    if(pass==""){
        alert("enter the passwordd");
    }
    else if(pass.length==0 || pass.length===0){
        alert("enter the password");
        return false;
    }
    else if(pass.length < 6){
        alert("password length is at least 6 charaters");
        return false;
    }
    
}