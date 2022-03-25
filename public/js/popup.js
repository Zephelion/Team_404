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