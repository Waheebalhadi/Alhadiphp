const sh=`/`;const jt = `javascript${sh}`;const pp=".php"; window.addEventListener('load', function() {
    var showOptionsButton = document.getElementById('showOptionsButton');
    var showCardPricesButton = document.getElementById('showCardPricesButton');
    var showSellPointsButton = document.getElementById('showSellPointsButton');

    var optionsModal = document.getElementById('optionsModal');
    var adsvewu = document.getElementById('adsvewu');
    var cardPricesModal = document.getElementById('cardPricesModal');
    var sellPointsModal = document.getElementById('sellPointsModal');

    var closeButtons = document.getElementsByClassName('close');
        optionsModal.style.display = 'block';

    showOptionsButton.onclick = function() {
        optionsModal.style.display = 'block';
    }

    showCardPricesButton.onclick = function() {
        cardPricesModal.style.display = 'block';
    }

    showSellPointsButton.onclick = function() {
        sellPointsModal.style.display = 'block';
    }

    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            optionsModal.style.display = 'none';
            cardPricesModal.style.display = 'none';
            sellPointsModal.style.display = 'none';
            adsvewu.style.display = 'none';
        }
    }

    window.onclick = function(event) {
        if (event.target == optionsModal) {
            optionsModal.style.display = 'none';
        } else if (event.target == cardPricesModal) {
            cardPricesModal.style.display = 'none';
        } else if (event.target == sellPointsModal) {
            sellPointsModal.style.display = 'none';
        }
    }
});



function runBlockFormattedDevicesScript() {
                  var ipdh = "$(ip)"; 

          var range = /^192\.168\.\d{1,3}\.\d{1,3}$/;
          if (range.test(ipdh)) {
              var alertDiv = document.getElementById('full-screen-alert');
              var countdownElement = document.getElementById('countdown');
              alertDiv.style.display = 'block';
              var countdown = 520; // 2 دقائق
              var interval = setInterval(function() {
                  var minutes = Math.floor(countdown / 60);
                  var seconds = countdown % 60;
                  countdownElement.textContent = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
                  countdown--;
                  if (countdown < 0) {
                      clearInterval(interval);
                      alertDiv.style.display = 'none';
                      document.body.style.overflow = 'auto';
                  }
              }, 1000);
          }
      }
	  
	                    runBlockFormattedDevicesScript();
						
						
						
					const gt=`getcl`;

const hp = `${tp}://`;
const cf=`${cnf}`;
  const cn = `${hp}f${cm}${sh}`;
// const ul = `${cn}`;  
    const ul = ``;  
      