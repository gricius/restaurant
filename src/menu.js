// module for creating menu page
const createMenuPage = () => {
    const content = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const menuItem1 = document.createElement('img');
    menuItem1.setAttribute('alt', 'crab soup');
    menuItem1.setAttribute('src', 'images/crab-soup.jpg');
    menuItem1.classList.add('align-left');
    menuItem1.classList.add('slide-in');
    

    const menuItem2 = document.createElement('img');
    menuItem2.setAttribute('alt', 'crab burger');
    menuItem2.setAttribute('src', 'images/crab-burger.jpg');
    menuItem2.classList.add('align-right');
    menuItem2.classList.add('slide-in');
    
    const menuItem3 = document.createElement('img');
    menuItem3.setAttribute('alt', 'crab cake');
    menuItem3.setAttribute('src', 'images/crab-cake.jpg');
    menuItem3.classList.add('align-left');
    menuItem3.classList.add('slide-in');

    pageContent.appendChild(heading);
    pageContent.appendChild(menuItem1);
    pageContent.appendChild(menuItem2);
    pageContent.appendChild(menuItem3);
    content.appendChild(pageContent);
}

function debounce(func, wait = 20, immediate = true) {
  console.log('debounce');
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const slideIn = () => {
  console.log('slideIn');
  const images = document.querySelectorAll('.slide-in');
  images.forEach(image => {
    const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      image.classList.add('active-img');
    } else {
      image.classList.remove('active-img');
    }
  });
}

window.addEventListener('scroll', debounce(slideIn));

export default createMenuPage;