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
    title.classList.add('sidebarTitle')
    title.textContent = entreeItems[entreeId].name;
    const foodDescription = document.createElement('div');
    foodDescription.textContent = entreeItems[entreeId].paragraph;
    foodDescription.classList.add('sidebarContent')
    const entreeImage = document.createElement('img');
    entreeImage.src = entreeItems[entreeId].image;

    sidebar.appendChild(title);
    sidebar.appendChild(foodDescription);
    sidebar.appendChild(entreeImage);

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
    
    sidebar.appendChild(title);
    sidebar.appendChild(foodDescription);
    

    content.appendChild(sidebar);
}