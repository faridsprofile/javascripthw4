const userPassword = document.getElementById('userpassword');
const button = document.getElementById('btn');


let show = false;

button.addEventListener('click', ()=>{


    show= !show;

    if(show){
        userPassword.setAttribute('type', 'Text');
        button.setAttribute('class', 'fa-solid fa-eye-slash')
    
    }else{
        userPassword.setAttribute('type', 'password');
        button.setAttribute('class', 'fa-solid fa-eye')
    }

})
