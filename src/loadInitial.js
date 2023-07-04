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
    const footer = document.createElement('div');
    footer.classList.add('footer');
    
        /* header */
        let dog = "3"
        const home = document.createElement('div');
        home.classList.add('home');
        home.textContent = "HOME";
        const menu = document.createElement('div');
        menu.textContent = "MENU";
        menu.addEventListener("click", loadMenu);
        const contactUs = document.createElement('div');
        contactUs.textContent = "CONTACT US";
        contactUs.addEventListener("click", loadContact);

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
    const aboutUs2 = document.createElement('div');
    aboutUs2.classList.add('aboutUs', 'aboutUs2');
    aboutUs2.textContent = "The Cupbop menu is our own delicious take on Korean cuisine. Exotically flavorful, naturally healthy dishes you've never had a chance to try— and we make them all affordable, fresh, and lightning fast.";




    block.appendChild(aboutUsTitle);
    block.appendChild(aboutUs1);
    block.appendChild(aboutUs2);
    main.appendChild(block);

    /* footer */
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
    const welcomeText = document.createElement('div');
    welcomeText.textContent = 'We are proud to bring Lowell the best of Korean cuisine';
    const welcomeImage = document.createElement('img');
    welcomeImage.src = "./images/cat.jpeg"

    sidebar.appendChild(welcome);
    sidebar.appendChild(welcomeText);
    sidebar.appendChild(welcomeImage);

    content.appendChild(sidebar);

}
