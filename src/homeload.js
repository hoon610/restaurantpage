export const loadHome = () => {
    
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
    console.log("yo")
}
