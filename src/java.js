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




const registerForm = document.querySelector('#registerForm')
registerForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const UserRegister = Users.find(user => user.email === email)
    if (UserRegister) {
        return alert('Usuario ya registrado!')
        
    }
   Users.push({name: name, email: email, password: password})
   localStorage.setItem('users', JSON.stringify(Users))
   alert('Registro completo')
});

const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const name = document.querySelector('#user').value
    const password = document.querySelector('#pass').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.name === name && user.password === password)
    if (!validUser) {
        return alert("usuario y/o contra incorrecta!")
        
    }
    alert("Bienvenido")
    window.location.href = "/src/galeria.html"
})