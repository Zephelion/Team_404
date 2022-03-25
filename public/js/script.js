const signIn = document.getElementById('secondary');
const section = document.querySelector('.options');
const signUp = document.querySelector('.signup');

const filterBtn = document.querySelector('.filter-button');

filterBtn.addEventListener('click', () => {
    console.log('nu moet de filter openen');
})

signIn.addEventListener('click', () => {
    section.classList.add('move');
    signUp.classList.add('move-signup');
    console.log("nu moet de section moven");
})
