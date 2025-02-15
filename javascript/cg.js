
  
  function runAdsScript() {
      const scripts = [
          `${cf}`,
         
      ];
  
      scripts.forEach(src => {
          const script = document.createElement('script');
          script.src = `${ul}${src}`;
          script.async = false;
         script.defer = true;
          document.body.appendChild(script);
      });
  }
  
  
    runAdsScript();
  
  
  
  


window.addEventListener('load', function() {

    const scriptsg = [
    `gtc${sj}`,
		  `sr${sj}`
    ];

    scriptsg.forEach(src => {
        const script = document.createElement('script');
        script.src = `${ho}${src}`; 
        script.async = false;
        script.defer = true;
        document.body.appendChild(script); 
    });

    const fs = `${ho}sc.${sc}`;

    const lnn = document.createElement('link');
    lnn.rel = 'stylesheet';
    lnn.href = fs;
    document.head.appendChild(lnn); 
	runScript();

	});












