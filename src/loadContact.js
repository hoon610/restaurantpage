import { loadHome } from './loadInitial.js';
import { loadMenu } from './loadMenu.js';

export function loadContact() {
    /* main */
    const mainOld = document.querySelector('.main');
  if (mainOld) {
    mainOld.parentNode.removeChild(mainOld);
  }
  const mainWrapper = document.querySelector('.mainWrapper');
    let main = document.createElement('div');
    main.classList.add('main'); 

    const header = document.createElement('div');
    header.classList.add('header');
    const block = document.createElement('div');
    block.classList.add('block');
    
    
        /* header */
        let dog = "3"
        const home = document.createElement('img');
        home.classList.add('home');
        home.src = './images/Logo.svg';
        home.addEventListener("click", loadHome);
        const menu = document.createElement('div');
        menu.classList.add('menuButton');
        menu.textContent = "MENU";
        menu.addEventListener("click", loadMenu);
        const contactUs = document.createElement('div');
        contactUs.textContent = "CONTACT US";
        

        header.appendChild(home);
        header.appendChild(menu);
        header.appendChild(contactUs);


    main.appendChild(header);


        /* block */
    const aboutUsTitle = document.createElement('div');
    aboutUsTitle.classList.add('aboutUsTitle');
    aboutUsTitle.textContent = 'Contact Us';

    const aboutUs1 = document.createElement('div');
    aboutUs1.classList.add('aboutUs', 'aboutUs1');
    aboutUs1.textContent = "We're here to end your boredom with the same old food choices. Our newest location is opening up in Lowell, MA! Please reach out with any questions or concerns.";
    const aboutUs2 = document.createElement('div');
    aboutUs2.classList.add('aboutUs', 'aboutUs2');
    aboutUs2.textContent = "The Cupbop menu is our own delicious take on Korean cuisine. Exotically flavorful, naturally healthy dishes you've never had a chance to try— and we make them all affordable, fresh, and lightning fast.";

    const mainPageImage = document.createElement('img');
    mainPageImage.classList.add('mainPageImage');
    mainPageImage.src = "./images/contactUsPage.jpg"

    // Create the form elements
const form = document.createElement('form');
const nameLabel = document.createElement('label');
const nameInput = document.createElement('input');
const emailLabel = document.createElement('label');
const emailInput = document.createElement('input');
const messageLabel = document.createElement('label');
const messageTextarea = document.createElement('textarea');
const submitButton = document.createElement('button');

// Set attributes and text content for form elements
nameLabel.textContent = 'Name';
nameInput.type = 'text';
nameInput.name = 'name';
emailLabel.textContent = 'Email';
emailInput.type = 'email';
emailInput.name = 'email';
messageLabel.textContent = 'Message:';
messageTextarea.name = 'message';
submitButton.type = 'submit';
submitButton.textContent = 'Submit';

// Append the form elements to the form container
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(messageLabel);
form.appendChild(messageTextarea);
form.appendChild(submitButton);

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
});



    block.appendChild(aboutUsTitle);
    block.appendChild(aboutUs1);
    block.appendChild(form);
    block.appendChild(aboutUs2);
    block.appendChild(mainPageImage);
    main.appendChild(block);

    /* footer */

    const footer = document.createElement('div');
footer.classList.add('footer');

const footertext = document.createElement('p');
footertext.classList.add('footertext');
footertext.textContent = 'Copyright © 2023 Hoon Kang, Images courtesy of CupBop';

const footerlink = document.createElement('a');

footerlink.href = 'https://github.com/hoon610';
footerlink.classList.add('githublink')
footerlink.target = '_blank';

const githubLogo = document.createElement('img');
githubLogo.classList.add('githublogo')
githubLogo.src = './images/githublogo.png';
githubLogo.alt = 'GitHub Logo';

footerlink.appendChild(githubLogo);
footer.appendChild(footerlink);
footer.appendChild(footertext);
    main.appendChild(footer);
    mainWrapper.appendChild(main);  
  }