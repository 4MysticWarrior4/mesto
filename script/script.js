const popupOpenBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-button');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__describe');

const profileForm = document.querySelector('.popup__container');

const profileNameInput = document.querySelector('.popup__text_type_name');
const profileAboutInput = document.querySelector('.popup__text_type_about');
const profileSubmitBtn = profileForm.querySelector('.popup__save-button');

const likeButtons = document.querySelectorAll('.elements__button');

popupOpenBtn.addEventListener('click', openPopup);

function openPopup() {
  popup.classList.add('popup_opened');
  getProfileValues();
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function getProfileValues() {
  profileNameInput.value = profileName.textContent;
  profileAboutInput.value = profileAbout.textContent;
}

popupCloseBtn.addEventListener('click', closePopup);

profileForm.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileAbout.textContent = profileAboutInput.value;
  closePopup();
}