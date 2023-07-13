
const createRestaurantHomePage = () => {
    const content = document.getElementById('content');
    
    // Create the main content
    const mainContent = document.createElement('div');
    mainContent.classList.add('page-content');
    
    const mainHeader = document.createElement('h2');
    mainHeader.textContent = 'Welcome to the Restaurant Page';
    mainContent.appendChild(mainHeader);

    const mainParagraph = document.createElement('p');
    mainParagraph.textContent = 'Experience culinary excellence like never before!';
    mainContent.appendChild(mainParagraph);

    const mainParagraph2 = document.createElement('p');
    mainParagraph2.textContent = 'Our restaurant offers a delightful blend of flavors, exceptional service, and a warm and inviting atmosphere. Whether you\'re looking for a romantic dinner, a family gathering, or a casual lunch with friends, we have something to satisfy every palate.';
    mainContent.appendChild(mainParagraph2);

    const mainParagraph3 = document.createElement('p');
    mainParagraph3.textContent = 'Our expert chefs prepare each dish with the finest ingredients, ensuring a memorable dining experience. From delectable appetizers to mouthwatering entrees and indulgent desserts, our menu is crafted to please even the most discerning food enthusiasts.';
    mainContent.appendChild(mainParagraph3);

    const mainParagraph4 = document.createElement('p');
    mainParagraph4.textContent = 'Come and join us at Restaurant Name for an unforgettable dining adventure. We look forward to serving you!';
    mainContent.appendChild(mainParagraph4);


    content.appendChild(mainContent);
}

export default createRestaurantHomePage;