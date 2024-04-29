const pswrdField = document.querySelectorAll(".field input[type='password']"),
        eyebtn = document.querySelector(".field img");

eyebtn.onclick = ()=>{
    pswrdField.forEach(element => {
        if(element.type === "password"){
            element.type = "text";
            eyebtn.src = "img/eye-off.svg";
        }else{
            element.type = "password";
            eyebtn.src = "img/eye-line.svg";
        }
    });
}