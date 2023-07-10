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
    const foodDescription = document.createElement('div');
    foodDescription.textContent = entreeItems[entreeId].paragraph;
    const welcomeImage = document.createElement('img');
    welcomeImage.src = "./images/cat.jpeg"

    sidebar.appendChild(title);
    sidebar.appendChild(foodDescription);
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
    const foodDescription = document.createElement('div');
    foodDescription.textContent = sideItems[sideId].paragraph;
    const welcomeImage = document.createElement('img');
    welcomeImage.src = "./images/cat.jpeg"

    sidebar.appendChild(title);
    sidebar.appendChild(foodDescription);
    sidebar.appendChild(welcomeImage);

    content.appendChild(sidebar);
}