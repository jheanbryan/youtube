const containerTags = document.querySelector('.tags');
const rigthArrow = document.querySelector('.rigthArrow');
const leftArrow = document.querySelector('.leftArrow');

const scrollStep = 50;

rigthArrow.addEventListener('click', () => {
    if (containerTags.scrollLeft == 0) {
        leftArrow.classList.add('flex');
        containerTags.scrollLeft += scrollStep;

    } else{
        containerTags.scrollLeft += scrollStep;

    }

})

leftArrow.addEventListener('click',  () => {
    containerTags.scrollLeft -= scrollStep;
});
