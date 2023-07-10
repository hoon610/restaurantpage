import { entreeItems, sideItems } from './menuItemsList';
import { updateSidebarMenuEntree, updateSidebarMenuSide } from './updateSidebarMenu';
export const addMenuItems = () => {
    
    const entrees = document.querySelector('.entrees');
    const sides = document.querySelector('.sides');

    

      for (let i = 0; i < entreeItems.length; i++){
        let menuitem = document.createElement('div');
        menuitem.classList.add('itemBox');

        let titleLine = document.createElement('div');
        titleLine.classList.add('titleLine');

        let title = document.createElement('div');
        title.classList.add('title');

        title.textContent = entreeItems[i].name;

        let description = document.createElement('div');
        description.classList.add('description');

        description.textContent = entreeItems[i].description;
        titleLine.appendChild(title);
        if(entreeItems[i].glutenfree == true){
            let glutenIcon = document.createElement('img');
            glutenIcon.classList.add('glutenIcon');
            titleLine.appendChild(glutenIcon);
            glutenIcon.src = './images/glutenfree.png';
        }
        

        let entreeId = entreeItems[i].id;
        menuitem.addEventListener('click', function() {
          updateSidebarMenuEntree(entreeId);
          console.log('Clicked on entree with ID:', entreeId);

  });

        menuitem.appendChild(description);
        menuitem.appendChild(titleLine);
        entrees.appendChild(menuitem);
      };

      for (let i = 0; i < sideItems.length; i++){
        let menuitem = document.createElement('div');
        menuitem.classList.add('sideBox', i);
        let titleLine = document.createElement('div');
        titleLine.classList.add('titleLine');
        let title = document.createElement('div');
        title.classList.add('title');
        title.textContent = sideItems[i].name;
        if(sideItems[i].glutenfree == true){
            let glutenIcon = document.createElement('div');
            glutenIcon.classList.add('glutenIcon');
            titleLine.appendChild(glutenIcon);
        }
        titleLine.appendChild(title);

        let sideId = sideItems[i].id;
        menuitem.addEventListener('click', function() {
          updateSidebarMenuSide(sideId);
          console.log('Clicked on side with ID:', sideId);
        
        });

        menuitem.appendChild(titleLine);
        sides.appendChild(menuitem);
      }

     







}