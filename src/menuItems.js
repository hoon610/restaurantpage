export const addMenuItems = () => {

    const entrees = document.querySelector('.entrees');
    const sides = document.querySelector('.sides');

    let entreeItems = [
        {
            "name": "ROCK BOP",
            "description": "Korean style tangy fried chicken",
            "caloriecount": "968 cal",
            "glutenfree": false,
            "imagelink": 7
        },
        {
            "name": "COMBO BOP",
            "description": "Your choice of two proteins / veggies",
            "caloriecount": "567 - 841 cal",
            "glutenfree": false,
            "imagelink": 7
        },
        {
            "name": "B BOP",
            "description": "Korean style BBQ beef",
            "caloriecount": "694 cal",
            "glutenfree": false,
            "imagelink": 7
        },
        {
            "name": "PIGGY BOP",
            "description": "Korean style BBQ pork",
            "caloriecount": "774 cal",
            "glutenfree": false,
            "imagelink": 7
        },
        {
            "name": "KKO KKO BOP",
            "description": "Korean style BBQ chicken",
            "caloriecount": "714 cal",
            "glutenfree": true,
            "imagelink": 7
        },
        {
            "name": "DOOCHI BOP",
            "description": "Fried Tofu",
            "caloriecount": "531 cal",
            "glutenfree": true,
            "imagelink": 7
        },
        {
            "name": "VEGGIE BOP",
            "description": "Korean style, Veggies",
            "caloriecount": "452 cal",
            "glutenfree": true,
            "imagelink": 7
        },
        {
            "name": "NOODLE BOP",
            "description": "Korean style sweet potato noodles",
            "caloriecount": "244 cal",
            "glutenfree": true,
            "imagelink": 7
        },
        {
            "name": "UGLY BOP",
            "description": "Korean style fried chicken",
            "caloriecount": "883 cal",
            "glutenfree": true,
            "imagelink": 7
        },
        {
            "name": "MANDOO BOP",
            "description": "Deep-Fried Pot stickers",
            "caloriecount": "603 cal",
            "glutenfree": false,
            "imagelink": 7
        }
    ]


    let sideItems = [
        {
            "name": "MANDOO",
            "description": "Deep-fried potstickers, 3pc",
            "glutenfree": false,
            "imagelink": 7
        },
        {
            "name": "KIMCHI",
            "description": "Korean spicy cabbage, 4oz",
            "glutenfree": false,
            "imagelink": 7
        }
        ,
        {
            "name": "GF NOODLE",
            "description": "Gluten free noodle substitution",
            "glutenfree": false,
            "imagelink": 7
        },


      ]

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