
const params = new URLSearchParams(window.location.search);
const fields = {
    firstName: params.get('firstName'),
    lastName: params.get('lastName'),
    email: params.get('email'),
    mobile: params.get('mobile'),
    business: params.get('business'),
    timestamp: params.get('timestamp')
};

for (const [id, value] of Object.entries(fields)) {
    const el = document.getElementById(id);
    if (el) el.textContent = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : 'Not provided';
}
 