


//window.addEventListener('load', function() {
      fetch(`${sp}client/getsettings${pp}?action=get_settings&network_id=${nd}&read_pass=${rs}`)
          .then(response => response.json())
          .then(data => {
              handleSettings(data);
          })
       //   .catch(error => console.error('Error fetching settings:', error));

      function handleSettings(data) {
          const breakButton = document.getElementById('direct-break-button');
          const liveButton = document.getElementById('direct-live-button');
          const targetDiv = document.getElementById('status'); // تحديد الـ div المطلوب

          if (data['break-button'] === 'on' && data['break-url']) {
              const breakUrl = `${hp}${data['break-url']}`;
              breakButton.style.display = 'inline-block';
              breakButton.addEventListener('click', function() {
                  window.location.href = breakUrl;
              });
          } else {
              breakButton.style.display = 'none';
          }

          if (data['live-stream'] === 'on' && data['live-stream-url']) {
              const liveStreamUrl = `${hp}${data['live-stream-url']}`;
              liveButton.style.display = 'inline-block';
              liveButton.addEventListener('click', function() {
                  window.location.href = liveStreamUrl;
              });
          } else {
              liveButton.style.display = 'none';
          }

   if (data['auto-direct-break'] === 'on' && data['break-url']) {
    let checkLoggedIn = setInterval(() => {
        if (typeof loggedIn !== "undefined" && loggedIn === true) {
            clearInterval(checkLoggedIn); // إيقاف المراقبة
            setTimeout(() => {
                if (typeof loggedIn !== "undefined" && loggedIn === true) { // تحقق مرة أخرى قبل التوجيه
                    window.location.href = `${hp}${data['break-url']}`;
                } else {
                  //  console.log("User is no longer logged in. Aborting redirection.");
                }
            }, 5000); // التوجيه بعد التأكد من loggedIn
        }
    }, 1000); // التحقق كل 100 ملي ثانية
}

if (data['auto-direct-live'] === 'on' && data['live-stream-url']) {
    let checkLoggedInM = setInterval(() => {
        if (typeof loggedIn !== "undefined" && loggedIn === true) {
            clearInterval(checkLoggedInM); // إيقاف المراقبة
            setTimeout(() => {
                if (typeof loggedIn !== "undefined" && loggedIn === true) { // تحقق مرة أخرى قبل التوجيه
                    window.location.href = `${hp}${data['live-stream-url']}`;
                } else {
                   // console.log("User is no longer logged in. Aborting redirection.");
                }
            }, 5000); // التوجيه بعد التأكد من loggedIn
        }
    }, 1000); // التحقق كل 100 ملي ثانية
}

      }
  //});