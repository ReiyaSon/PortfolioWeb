const date = document.getElementById('date')
const setCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	date.textContent = currentYear
}
setCurrentYear()


const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const socials = document.querySelector('.social-nav')
const navLinks = document.querySelectorAll('.nav-links')

const toggleMobileMenu = () => {
	hamburger.classList.toggle('open')
	navList.classList.toggle('open')
	socials.classList.toggle('open')
	document.body.classList.toggle('open')
}

navLinks.forEach(link => link.addEventListener('click', toggleMobileMenu))
hamburger.addEventListener('click', toggleMobileMenu)


AOS.init()

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

   
    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

   
    if (!message) {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }

  
    if (isValid) {
        alert('Form submitted successfully!');
    
        document.getElementById('contactForm').reset();
    }
});
