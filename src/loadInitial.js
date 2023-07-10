import { loadMenu } from './loadMenu.js';
import { loadContact } from './loadContact.js';

export const loadHome = () => {
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
        const menu = document.createElement('div');
        menu.textContent = "MENU";
        menu.classList.add('menuButton');
        menu.addEventListener("click", loadMenu);
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
    aboutUsTitle.textContent = 'Our Story';

    const aboutUs1 = document.createElement('div');
    aboutUs1.classList.add('aboutUs', 'aboutUs1');
    aboutUs1.textContent = "We're here to end your boredom with the same old food choices.";
    
    const mainPageImage = document.createElement('img');
    mainPageImage.classList.add('mainPageImage');
    mainPageImage.src = "./images/Cupbop.jpg"

    
    const aboutUs2 = document.createElement('div');
    aboutUs2.classList.add('aboutUs', 'aboutUs2');
    aboutUs2.textContent = "The Cupbop menu is our own delicious take on Korean comfort food! Exotically flavorful, naturally healthy dishes you've never had a chance to try— and we make them all affordable, fresh, and lightning fast.";




    block.appendChild(aboutUsTitle);
    block.appendChild(aboutUs1);
    
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


export const loadInitial = () => {
    let hi = document.getElementById('content');
    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('mainWrapper');
    hi.appendChild(mainWrapper);
    
    loadHome();


    /* sidebar */
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    
    const welcome = document.createElement('div');
    welcome.textContent = 'Welcome';
    welcome.classList.add("sidebarTitle")
    const welcomeText = document.createElement('div');
    welcomeText.classList.add("sidebarContent")
    welcomeText.textContent = 'We are proud to bring Lowell the best of Korean cuisine! Mark your calendars because our new location in downtown Lowell opens in just six months!';
    const welcomeImage = document.createElement('img');
    welcomeImage.classList.add("sidebarImage")
    welcomeImage.src = "./images/homeSidebar.png"

    sidebar.appendChild(welcome);
    sidebar.appendChild(welcomeText);
    sidebar.appendChild(welcomeImage);

    content.appendChild(sidebar);

}
