const signIn = document.getElementById('secondary');
const section = document.querySelector('.options');
const signUp = document.querySelector('.signup');

// console.log(signIn);

// signIn.addEventListener('click', () => {
//     section.classList.add('move');
//     signUp.classList.add('move-signup');
//     console.log("nu moet de section moven");
// })

////////////////////////
// Filter pop-up menu //
////////////////////////
const settingsButton = document.querySelector(".settings-button");

settingsButton.addEventListener("click", toggleMenu = () => document.querySelector(".pop-up-form").classList.toggle("pop-up-function"));

// settingsButton.addEventListener("click", console.log("hi"));