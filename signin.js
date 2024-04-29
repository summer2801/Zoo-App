const form = document.querySelector(".signup form"),
        button = form.querySelector(".button input"),
        errorTxt = form.querySelector(".error-txt");
const loadinDot = document.querySelector(".loading-animation");

form.onsubmit = (e)=>{
    e.preventDefault();
}

button.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/signin.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let response = xhr.response;
                if(response === "success"){
                    loadinDot.style.display = "inline-flex";
                    setInterval(()=>{
                        location.href = "login.php";
                    }, 5000)
                }else{
                    errorTxt.style.display = "block";
                    errorTxt.textContent = response;
                }
            }
        }
    }

    let formData = new FormData(form);
    xhr.send(formData);
}