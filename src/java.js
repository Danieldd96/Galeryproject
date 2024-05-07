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



function Login() {
    const usu = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    console.log(usu, pass);
    if(usu === 'Danieluser' && pass === '123456'){
        window.location.href = 'galeria.html'
        alert("Inicio de sesion Exitoso")
    }
}

