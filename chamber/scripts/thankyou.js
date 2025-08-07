//Get data filled in the form from the URL
const params = new URLSearchParams(window.location.search);
const fields = {
    firstname: params.get('firstname'),
    lastname: params.get('lastname'),
    email: params.get('email'),
    phone: params.get('phone'),
    business: params.get('business'),
    timestamp: params.get('timestamp')
};

for (const [id, value] of Object.entries(fields)) {
    const el = document.getElementById(id);
    if (el) el.textContent = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : 'Not provided';
}
 