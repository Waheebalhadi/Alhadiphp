window.addEventListener('load', function() {

 const nd = 1; // network_id
document.getElementById('network-id-display').textContent=nd;

fetch(`http://localhost/w/getSettings.php?network_id=${nd}`)
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error(data.error);
        } else {
            if (data['show-vpn'] === 'on') {
                document.getElementById('vpn-settings').classList.add('hidden');
            }
            if (data['show-upcl'] === 'on') {
                document.getElementById('upcl-settings').classList.add('hidden');
            }
            if (data['show-face'] === 'on') {
                document.getElementById('face-settings').classList.add('hidden');
            }
            if (data['show-bind'] === 'on') {
                document.getElementById('bind-settings').classList.add('hidden');
            }
            if (data['show-user-count'] === 'on') {
                document.getElementById('user-count-settings').classList.add('hidden');
            }
            if (data['show-block-formatted-devices'] === 'on') {
                document.getElementById('full-screen-alert').style.display = 'none';
            }
            if (data['show-block-card-guessing'] === 'on') {
                document.getElementById('block-card-guessing-settings').classList.remove('hidden');
            }
        }
    })
    .catch(error => console.error('Error fetching settings:', error));
});