const contentItems = document.querySelectorAll('.content-item')
const chooseButtons = document.querySelectorAll('.choose-color__btn')


document.addEventListener('click', function(event) {
    const button = event.target.closest('.choose-color__btn')
    if (button) {
        chooseButtons.forEach(chooseBtn => {
            chooseBtn.classList.remove('choose-color__btn--active')
        });
        button.classList.add('choose-color__btn--active')
        
        const buttonDataColor = button.dataset.btn
        contentItems.forEach(contentItem => {
            contentItem.classList.remove('header__img-active')
            if (contentItem.classList.contains(buttonDataColor)) {
                contentItem.classList.add('header__img-active')
            } 
        });
    }
})




