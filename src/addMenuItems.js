import { entreeItems, sideItems } from './menuItemsList';
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
        if(entreeItems[i].glutenfree == true){
            let glutenIcon = document.createElement('div');
            glutenIcon.classList.add('glutenIcon');
            titleLine.appendChild(glutenIcon);
        }
        titleLine.appendChild(title);
        


        menuitem.appendChild(titleLine);
        entrees.appendChild(menuitem);
      };

      for (let i = 0; i < sideItems.length; i++){
        let menuitem = document.createElement('div');
        menuitem.classList.add('itemBox');
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
        


        menuitem.appendChild(titleLine);
        sides.appendChild(menuitem);
      }

     







}