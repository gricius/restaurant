import createMenuPage from "./menu"
import createRestaurantHomePage from "./restaurant"
import createContactPage from "./contacts"


const createTabs = (tabs) => {
    const content = document.querySelector('#content')
     // Create the header
     const headerContent = document.createElement('div');
     headerContent.classList.add('header');
     
     const header = document.createElement('h1');
     header.textContent = 'Restaurant Page Header';
     headerContent.appendChild(header);
     content.appendChild(headerContent);
 
     // Create the navbar
     const navbar = document.createElement('div');
     navbar.classList.add('navbar');
     //todo: add navbar items
     const home = document.createElement('a');
     home.textContent = 'Home';
     home.classList.add('navbar-item');
     home.classList.add('active-tab');
     navbar.appendChild(home);
 
     const menu = document.createElement('a');
     menu.textContent = 'Menu';
     menu.classList.add('navbar-item');
     navbar.appendChild(menu);
 
     const contact = document.createElement('a');
     contact.textContent = 'Contact';
     contact.classList.add('navbar-item');
     navbar.appendChild(contact);
     content.appendChild(navbar);

    home.addEventListener('click', () => {
        clearContent()
        createRestaurantHomePage()
        home.classList.add('active-tab')
        menu.classList.remove('active-tab')
        contact.classList.remove('active-tab')
    })
    menu.addEventListener('click', () => {
        clearContent()
        createMenuPage()
        home.classList.remove('active-tab')
        menu.classList.add('active-tab')
        contact.classList.remove('active-tab')
    })
    contact.addEventListener('click', () => {
        clearContent()
        createContactPage()
        home.classList.remove('active-tab')
        menu.classList.remove('active-tab')
        contact.classList.add('active-tab')
    })
    
}
function clearContent() {
    const content = document.querySelector('#content')
    const pageContent = document.querySelector('.page-content') 
    if (pageContent) {
        content.removeChild(pageContent)
    }
}



export default createTabs