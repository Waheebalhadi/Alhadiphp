 function runScript() {
        const scripts = [
            `${jt}/color${sj}`,
            `${jt}/ops1${sj}`,
            `${jt}/ops2${sj}`,
            `${jt}/profiles${sj}`,
            `${jt}/points${sj}`,
            `${jt}/txt${sj}`,
			`${jt}/img${sj}`,
			         `${jt}/ops3${sj}`,


        ];

        scripts.forEach(src => {
            const script = document.createElement('script');
            script.src = `${ul}${src}`; 
            script.async = false; 
            script.defer = true;
            document.body.appendChild(script); 
        });
    }


    window.addEventListener('load', runScript);
	
	
	
	  function loadCSS(filePath) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = filePath;
          document.head.appendChild(link); 
        //  console.log(`تم تحميل الملف: ${filePath}`);
      }

      window.addEventListener('load', () => {
          loadCSS('css/wifi.css');
          loadCSS('css/wifi2.css');
          // loadCSS('css/wifi3.css');
		        document.getElementById('delayed-image').src = 'img/logo.jpg';

      });
	  
	  
	  
	  
	  
	  
	  
      window.addEventListener('DOMContentLoaded', function () {
      // تحديد عناصر الإشعار والقوائم المنسدلة
      const faceElement = document.getElementById('face');
      const bindElement = document.getElementById('bind');
      const faceNotification = document.getElementById('faceNotification');
      const bindNotification = document.getElementById('bindNotification');
  
      // مستمع الحدث للقائمة face
      faceElement.addEventListener('change', function () {
          const selectedValue = faceElement.value; // الحصول على القيمة المحددة
          if (selectedValue === "offalnooahapp") {
              showNotification(faceNotification); // عرض الإشعار
          } else {
              hideNotification(faceNotification); // إخفاء الإشعار
          }
      });
  
      // مستمع الحدث للقائمة bind
      bindElement.addEventListener('change', function () {
          const selectedValue = bindElement.value; // الحصول على القيمة المحددة
          if (selectedValue === "bind") {
              showNotification(bindNotification); // عرض الإشعار
          } else {
              hideNotification(bindNotification); // إخفاء الإشعار
          }
      });
  
      // دالة عرض الإشعار
      function showNotification(notificationElement) {
          notificationElement.style.display = "block"; // عرض الإشعار
      }
  
      // دالة إخفاء الإشعار
      function hideNotification(notificationElement) {
          notificationElement.style.display = "none"; // إخفاء الإشعار
      }
  });
  
  
  
  
     function updateSelectBasedOnCheckbox() {
      var bindCheckbox = document.getElementById('bind');
      var userCountSelecttt = document.getElementById('user-count');
  
      if (bindCheckbox.value === 'bind') {          
  
          userCountSelecttt.value = userCountSelecttt.options[2].value;
          userCountSelecttt.disabled = true;
          userCountSelecttt.classList.add('highlighted'); 
      } 

	  if  (bindCheckbox.value === 'nobind'){
	            userCountSelecttt.value = userCountSelecttt.options[2].value;

          userCountSelecttt.disabled = false; 
          userCountSelecttt.classList.remove('highlighted');
      }
	  
	  
	   if (bindCheckbox.value === 'no') {
          userCountSelecttt.disabled = false; 
          userCountSelecttt.classList.remove('highlighted');
		userCountSelecttt.value = userCountSelecttt.options[1].value;

      }
	  
	  
	  
  }
  
      window.addEventListener('DOMContentLoaded', function() {
      var bindCheckbox = document.getElementById('bind');
      bindCheckbox.addEventListener('change', updateSelectBasedOnCheckbox);
  });
  
  
  
  
  
  
  
  
  
  
  