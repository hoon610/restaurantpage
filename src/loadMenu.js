import { loadHome } from './loadInitial.js';
import { loadContact } from './loadContact.js';
import { addMenuItems } from './addMenuItems.js';



export function loadMenu() {
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
        menu.textContent = "MENU";
        
        const contactUs = document.createElement('div');
        contactUs.textContent = "CONTACT US";
        contactUs.addEventListener("click", loadContact);
        contactUs.classList.add('contactUsButton')
        

        header.appendChild(home);
        header.appendChild(menu);
        header.appendChild(contactUs);


    main.appendChild(header);


        /* block */
    const aboutUsTitle = document.createElement('div');
    aboutUsTitle.classList.add('aboutUsTitle');
    aboutUsTitle.textContent = 'Menu';

    const menuTitleOne = document.createElement('div');
    menuTitleOne.classList.add('menuTitleOne', 'menuTitle');
    menuTitleOne.textContent = "Entrees";
    const entrees = document.createElement('div');
    entrees.classList.add('entrees', 'menuItemHolder');



    const menuTitleTwo = document.createElement('div');
    menuTitleTwo.classList.add('menuTitleTwo', 'menuTitle');
    menuTitleTwo.textContent = "Sides";
    const sides = document.createElement('div');
    sides.classList.add('sides', 'menuItemHolder');

    


    block.appendChild(aboutUsTitle);
    block.appendChild(menuTitleOne);
    block.appendChild(entrees);
    block.appendChild(menuTitleTwo);
    block.appendChild(sides);
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


    /* main */
    mainWrapper.appendChild(main);  
    addMenuItems();
    
  }