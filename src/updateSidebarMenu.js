import { entreeItems, sideItems } from './menuItemsList';
export const updateSidebarMenuEntree = (entreeId) => {
    
    const content = document.querySelector('#content');
    const sidebarOld = document.querySelector('.sidebar');
  if (sidebarOld) {
    sidebarOld.parentNode.removeChild(sidebarOld);
  }
    
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    
    const title = document.createElement('div');
    title.textContent = entreeItems[entreeId].name;
    const welcomeText = document.createElement('div');
    welcomeText.textContent = 'We are proud to bring Lowell the best of Korean cuisine';
    const welcomeImage = document.createElement('img');
    welcomeImage.src = "./images/cat.jpeg"

    sidebar.appendChild(title);
    sidebar.appendChild(welcomeText);
    sidebar.appendChild(welcomeImage);

    content.appendChild(sidebar);
}

export const updateSidebarMenuSide = (sideId) => {
    
    const content = document.querySelector('#content');
    const sidebarOld = document.querySelector('.sidebar');
  if (sidebarOld) {
    sidebarOld.parentNode.removeChild(sidebarOld);
  }
    
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    
    const title = document.createElement('div');
    title.textContent = sideItems[sideId].name;
    const welcomeText = document.createElement('div');
    welcomeText.textContent = 'We are proud to bring Lowell the best of Korean cuisine';
    const welcomeImage = document.createElement('img');
    welcomeImage.src = "./images/cat.jpeg"

    sidebar.appendChild(title);
    sidebar.appendChild(welcomeText);
    sidebar.appendChild(welcomeImage);

    content.appendChild(sidebar);
}