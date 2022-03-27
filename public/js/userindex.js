const filterBtn = document.querySelector('.filter-button');
const sectionFilter = document.querySelector('.filter-container');

console.log(sectionFilter);

filterBtn.addEventListener('click', () => {
    sectionFilter.classList.add('filter-up')
})