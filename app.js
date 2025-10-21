document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginBox = document.querySelector('.login-box');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'user' && password === 'password') {
            alert('Login Successful!');
        } else {
            loginBox.classList.add('shake');
            setTimeout(() => {
                loginBox.classList.remove('shake');
            }, 500);
            alert('Invalid Username or Password');
        }
    });

    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        loginBox.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
});