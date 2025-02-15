//document.addEventListener("DOMContentLoaded", function() {

const nd = 1; // يمكن تغييره حسب الحاجة

fetch(`http://localhost/w/getProfiles.php?network_id=${nd}`)
    .then(response => response.json())
    .then(data => {
        const profilesDiv = document.getElementById('profiles');
        profilesDiv.innerHTML = ""; // تفريغ المحتوى السابق

        if (!data.error) {
            data.forEach(profile => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${profile.price}</td><td>${profile.time}</td><td>${profile.transfer}</td><td>${profile.validity}</td>`;
                profilesDiv.appendChild(row);
            });
        } else {
            profilesDiv.innerHTML = `<tr><td colspan="4">${data.error}</td></tr>`;
        }
    })
    .catch(error => {
        console.error('خطأ في جلب البيانات:', error);
    });
// });