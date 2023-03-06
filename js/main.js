const signIn = document.querySelector('.sign');
const signInWindow = document.querySelector('.or');
const webmasterButton = document.querySelector('.webmaster-button');
const webmasterWindow = document.querySelector('.webmaster');
const advertiserButton = document.querySelector('.advertiser-button');
const advertiserWindow = document.querySelector('.advertiser');

signIn.addEventListener('click', (evt) => {
    evt.preventDefault()
    signInWindow.style.display = 'flex';
})
webmasterButton.addEventListener('click', (evt) => {
    evt.preventDefault()
    webmasterWindow.style.display = 'flex';
})
advertiserButton.addEventListener('click', (evt) => {
    evt.preventDefault()
    advertiserWindow.style.display = 'flex';
})
