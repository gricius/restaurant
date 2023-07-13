// module for creating context page
const createContactPage = () => {
    const content = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const header = document.createElement('h2');
    header.textContent = 'Contact Us';

    const name = document.createElement('input');
    name.setAttribute('style', 'height: 30px; margin-right: 10px');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Name');
    name.setAttribute('name', 'name');
    name.setAttribute('required', 'true');

    const email = document.createElement('input');
    email.setAttribute('style', 'height: 30px; margin-right: 10px');
    email.setAttribute('placeholder', 'Email');
    email.setAttribute('name', 'email');
    email.setAttribute('required', 'true');

    const message = document.createElement('textarea');
    message.setAttribute('style', 'height: 100px; margin-right: 10px');
    message.setAttribute('placeholder', 'Message');
    message.setAttribute('name', 'message');
    message.setAttribute('required', 'true');

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');

    form.appendChild(header);
    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(message);
    form.appendChild(submit);

    pageContent.appendChild(form);
    content.appendChild(pageContent);


}

export default createContactPage;