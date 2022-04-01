
const filterBtn = document.querySelector('.filter-button');
const sectionFilter = document.querySelector('.filter-container');
const filterForm = document.querySelector('.filter-form');
const userContainer = document.querySelector('.user-container');
const users = document.querySelectorAll('.user');
const userDetails = document.querySelector('.user-details');
const userIndex = document.querySelector('.index');


const displayUsers = (data) =>{

    userContainer.innerHTML = "";
    data.forEach(match => {
        const user = match.user;
        let html = `<div class="user">
                <div class="user-img">
                    <img src="/public/uploads/${user.picture}" alt="">
                </div>
                <span>${user.firstname}</span>
             </div>`

        userContainer.insertAdjacentHTML('beforeend', html);
    });
}  

const displaySingleUser = (data) => {
    console.log(data);

    // voeg uitknop toe
    let details = 
    `    <section class="user-details">
            <h2>${data.firstname}</h2>
            <h2>${data.lastname}</h2>
            <h2>${data.age}</h2>

            <form action="/like" method="post">

                <input type="hidden" name="id" value="${data._id}">
                <input type="submit" value="like">
            </form>
        </section>`
    userIndex.insertAdjacentHTML('beforeend', details)
}

const filterUsers = (e) =>{
    e.preventDefault();

    const form = new FormData(e.target);
    const goals = form.get("goals");

    console.log(goals);

    axios.post('/users/filter', {goals:goals})
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

users.forEach(user => {
    user.addEventListener('click', () =>{

        const id = user.dataset.id;
        axios.post('/users/getuser', {id:id})
        .then(function (response) {
            // handle success
            displaySingleUser(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    })
})

// maak eventListener voor uitknop (op userdetails.classlist)