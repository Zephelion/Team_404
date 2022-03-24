const signIn = document.getElementById('secondary');
const section = document.querySelector('.options');
const signUp = document.querySelector('.signup');

const users = document.querySelectorAll('.user');
const userName = document.querySelector('.pop-up span');
const user = document.querySelector('.user');
const popUp = document.querySelector('.pop-up');


users.forEach(user => {
    user.addEventListener('click', (e) => {
        console.log(e.currentTarget.innerText);

        // name of clicked user comes on pop-up
        userName.innerText = e.currentTarget.innerText;
    })
})

user.addEventListener('click', (e) => {
    popUp.classList.toggle("popUp");
})


signIn.addEventListener('click', () => {
    section.classList.add('move');
    signUp.classList.add('move-signup');
    console.log("nu moet de section moven");
})
