const LoginBtnnLink = document.querySelector('.loginBtn');
const RegisterBtnnLink = document.querySelector('.registerBtn');
const wrapper = document.querySelector('.wrapper');
const menu = document.getElementById("menu")
const menu2 = document.getElementById("menu2")
const ocultarMenu = document.getElementById("ocultarMenu")

LoginBtnnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
    menu.classList.remove("hidden")
    menu2.classList.add("hidden")
});
RegisterBtnnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
    menu.classList.add("hidden")
    menu2.classList.remove("hidden")
});

const usuario = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password")
let listaN =[]
function Datos() {
















    localStorage.setItem('user-name', usuario.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('password', password.value)
    
    
}


function Login() {
    const usu = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    var nombre = localStorage.getItem("user-name");
    var email = localStorage.getItem("email");
    var contra = localStorage.getItem("password");


    console.log(usu, pass);
    if(usu === nombre && pass === contra){
        window.location.href = 'galeria.html'
        alert("Inicio de sesion Exitoso")
    }
}

