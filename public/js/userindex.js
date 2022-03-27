const filterBtn = document.querySelector('.filter-button');
const sectionFilter = document.querySelector('.filter-container');
const filterForm = document.querySelector('.filter-form');
const userContainer = document.querySelector('.user-container');


const displayUsers = (data) =>{

    userContainer.innerHTML = "";
    data.forEach(match => {
        // console.log(match.user);
        const user = match.user;
        let html = `<div class="user">
                <div class="user-img"></div>
                <span>${user.firstname}</span>
             </div>`

        userContainer.insertAdjacentHTML('beforeend', html);
    });
}  

const filterUsers = (e) =>{
    e.preventDefault();

    const form = new FormData(e.target);
    const goals = form.get("goals");

    console.log(goals);

    axios.post('/filteruser', {goals:goals})
    .then(function (response) {
        // handle success
        // console.log(response.data.user);
        displayUsers(response.data);

        sectionFilter.classList.remove('filter-up');
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
}


filterBtn.addEventListener('click', () => {
    sectionFilter.classList.add('filter-up')
})

filterForm.addEventListener('submit', filterUsers);

