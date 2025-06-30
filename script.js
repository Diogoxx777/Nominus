function validar(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usernameValid = document.getElementById("username");
    const passwordValid = document.getElementById("password");
    
    if(!usernameValid.checkValidity() || !passwordValid.checkValidity()){

        usernameValid.placeholder = "* Campo obrigatorio";
        passwordValid.placeholder = "* Campo obrigatorio";

        usernameValid.style.border = "1px solid red";
        usernameValid.style.boxShadow = " 0 0 10px red"; 
        usernameValid.style.borderRadius = "10px";
        usernameValid.style.marginTop = "10px";

        passwordValid.style.border = "1px solid red"; 
        passwordValid.style.boxShadow = " 0 0 10px red"; 
        passwordValid.style.borderRadius = "10px";
        passwordValid.style.marginTop = "10px";

        
        usernameValid.addEventListener("input", () => {
        usernameValid.style.border = "";
        usernameValid.style.boxShadow = "";
        usernameValid.style.borderRadius = "";
        usernameValid.style.marginTop = "";
        usernameValid.placeholder = "";
        });

        passwordValid.addEventListener("input", () => {
        passwordValid.style.border = "";
        passwordValid.style.boxShadow = "";
        passwordValid.style.borderRadius = "";
        passwordValid.style.marginTop = "";
        passwordValid.placeholder = "";
        });

        return;
    }

    if(username == "admin" && password == "admin"){
        window.location.href = "cadastro.html";
    }else{
        document.getElementById("back").style.display = "flex";
    }
}

function close_alert(){
    document.getElementById("back").style.display = "none";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
