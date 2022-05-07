const popupOpenBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-button');

popupOpenBtn.addEventListener("click", function (e) {
    e.preventDefault();
    togglePopup()
});

popupCloseBtn.addEventListener("click", function (e) {
    popup.classList.remove("popup__opened")
});
function togglePopup() {
    popup.classList.add("popup__opened")
}

let formElement = document.querySelector('.profile__info')
let nameInput = formElement.querySelector('.profile__name')
let jobInput =  formElement.querySelector('.profile__describe')
let saveBtn = formElement.querySelector('.popup__save-button')

function formSubmitHandler (evt) {
    evt.preventDefault();
    jobInput.value = ''
    nameInput.value = ''
    renderAdded();

    let nameInput = nameInput.value();
    let jobInput = jobInput.value();
    nameInput.textContent = '';
    jobInput.textContent = '';
}
formElement.addEventListener('submit', formSubmitHandler);
 popup.classList.remove("popup__opened")