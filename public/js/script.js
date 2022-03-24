const signIn = document.getElementById('secondary');
const section = document.querySelector('.options');
const signUp = document.querySelector('.signup');

const users = document.querySelectorAll('.user');
const nameOfUser = document.querySelector('span')

users.forEach(user => {
    user.addEventListener('click', (e) => {
        console.log(e.currentTarget);

        
        user.contains(nameOfUser.currentTarget);
        console.log(nameOfUser.innerText)
    })
})

signIn.addEventListener('click', () => {
    section.classList.add('move');
    signUp.classList.add('move-signup');
    console.log("nu moet de section moven");
})
