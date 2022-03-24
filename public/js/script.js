///////////////
// CONSTANTS //
///////////////
const signIn = document.getElementById('secondary');
const section = document.querySelector('.options');
const signUp = document.querySelector('.signup');
const settingsButton = document.querySelector(".settings-button");


//////////////////////////////////////////
// !!!FUNTION THAT GIVES ME AN ERROR!!! //
//////////////////////////////////////////

// console.log(signIn);

// signIn.addEventListener('click', () => {
//     section.classList.add('move');
//     signUp.classList.add('move-signup');
//     console.log("nu moet de section moven");
// })


////////////////////////
// Filter pop-up menu //
////////////////////////
settingsButton.addEventListener("click", toggleMenu = () => document.querySelector(".pop-up-form").classList.toggle("pop-up-function"));


/////////////////////////////////
// FILTERING WITH LOCALSTORAGE //
/////////////////////////////////
const radioButtons = document.querySelectorAll(".radio-button")

radioButtons.forEach(function(radioButton){

	radioButton.addEventListener("click", function(e){
		// console.log(e.target.value);
		localStorage.clear();
		localStorage.setItem("preference", e.target.value);
	})
})

console.log(localStorage);