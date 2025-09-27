const donateBtn = document.getElementById('donate-btn');

donateBtn.addEventListener('click', () => {
    alert('Thank you for your donation!');
});

const optInForm = document.getElementById('opt-in-form');

optInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing, ${name}! We'll send updates to ${email}.`);
    optInForm.reset();
});