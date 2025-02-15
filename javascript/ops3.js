
window.addEventListener('load', function() {

const nd = 1; // يمكن تغييره حسب الحاجة

fetch(`http://localhost/w/controlapi.php?network_id=${nd}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
             //   console.error(data.error);
                return; 
            }


            if (data['ramadan-style'] === 'on') {
                document.body.classList.add('ramadan-style');
                ramadan();



                
            }

            if (data['option-display'] === 'on') {
                optiondisplay();
            }

            if (data['ads'] === 'on') {
              //  runAdsScript();
            }

            applyAdditionalOptions(data);
        })
      //  .catch(error => console.error('Error fetching settings:', error));

    function applyAdditionalOptions(data) {
     
        if (data['extra-option-1'] === 'on') {
            runExtraOption1Script();
        }

        
        if (data['extra-option-2'] === 'on') {
            runExtraOption2Script();
        }

    
        if (data['extra-option-3'] === 'on') {
            runExtraOption3Script();
        }

   
        if (data['extra-option-4'] === 'on') {
            runExtraOption4Script();
        }

       
        if (data['extra-option-5'] === 'on') {
        adsvewut();
        }
        if (data['adsvewutop'] === 'on') {
            adsvewutop();
            }   
			
			if (data['adsvewudown'] === 'on') {
            adsvewudown();
            }



            if (data['512K'] === 'on') {
                peed512K();
                }

                if (data['1M'] === 'on') {
                    peed1M();
                    }
    
                    if (data['2M'] === 'on') {
                        peed2M();
                        }
                        if (data['4M'] === 'on') {
                            peed4M();
                            }
                            if (data['8M'] === 'on') {
                                peed8M();
                                }
                                if (data['16M'] === 'on') {
                                    peed16M();
                                    }
                                                        

    }

    function ramadan() {

        document.getElementById('imges22').classList.remove('hidden');
        document.getElementById('imges44').classList.remove('hidden');
        document.getElementById('imges2').src = `${sp}img/ramadan18.png`;
        document.getElementById('imges4').src = `${sp}img/ramadan1.png`;
        document.getElementById('imges33').classList.remove('hidden');

        let imges5 =   document.getElementById('imges5');
        imges5.classList.add('imges55') ;
        imges5.src = `${sp}img/14.png`;
    }

   
        
    function runExtraOption1Script() {
    }

    function runExtraOption2Script() {

        var imges6 = document.getElementById('imges6');

        imges6.style.display = 'block';

        document.getElementById('imges22').classList.remove('hidden');
        document.getElementById('imges33').classList.remove('hidden');
        document.getElementById('imges44').classList.remove('hidden');
        document.getElementById('imges2').src = `${sp}img/18.png`;
        document.getElementById('imges4').src = `${sp}img/ram1.png`;
       document.getElementById('imges5').src = `${sp}img/21.png`;
        document.getElementById('imges6').src = `${sp}img/21.png`;
       document.body.classList.add('mawled');

        document.body.style.background = "#1c6715 url(`${sp}img/background.jpg') fixed  center";

         document.body.style.backgroundSize = "cover";

         var imges2 = document.getElementById("imges2"); // استبدل "myElement" بمعرف العنصر الخاص بك
         imges2.style.filter = "brightness(151)";
        
  

    

  
  
     
    }

    function runExtraOption3Script() {
        console.log("quran");
        document.getElementById('quran').classList.add('hidden');

    }

    function runExtraOption4Script() {



        document.getElementById('imges22').classList.remove('hidden');
        document.getElementById('imges44').classList.remove('hidden');
        document.getElementById('imges2').src = `${sp}img/ead18.png`;
        document.getElementById('imges4').src = `${sp}img/ead1.png`;
        document.getElementById('imges33').classList.remove('hidden');

        let imges5 =document.getElementById('imges5');
        imges5.classList.add('imges55') ;
        imges5.src = `${sp}img/14.png`;
        

    }
function adsvewut() {
var adsvewu = document.getElementById('adsvewu');
    adsvewu.style.display = 'block';

    const countdownElement = document.createElement('div');
    countdownElement.id = 'countdown';
    countdownElement.style.position = 'absolute';
    countdownElement.style.top = '39px';
    countdownElement.style.left = '50%';
    countdownElement.style.transform = 'translateX(-50%)';
    countdownElement.style.fontSize = '30px';
    countdownElement.style.color = 'white';
    countdownElement.style.fontWeight = 'bold';
    adsvewu.appendChild(countdownElement);

    let count = 10;
    countdownElement.innerText = count;

    let timer = setInterval(() => {
        count--;
        countdownElement.innerText = count;

        if (count === 0) {
            clearInterval(timer);
            adsvewu.style.display = 'none';
        }
    }, 1500);



}


function adsvewutop() {


    
 var containertop = document.getElementById('slider-container-top');

      containertop.style.display = 'block';
  

  
}


function adsvewudown() {

      var imageslider = document.getElementById('image-slider');

      imageslider.style.display = 'block';
  

  
}







    function optiondisplay() {
      var optionsModal = document.getElementById('optionsModal');

      optionsModal.style.display = 'none';
     
   
    }










    function peed512K() {
        var peed512K = document.getElementById('peed512K');
  
        peed512K.style.display = 'none';
       
     
      }
    

      function peed1M() {
     
      }
    


      function peed2M() {
        var peed2M = document.getElementById('peed2M');
  
        peed2M.style.display = 'none';
       
     
      }
    


      function peed4M() {
        var peed4M = document.getElementById('peed4M');
  
        peed4M.style.display = 'none';
       
     
      }
    


      function peed8M() {
        var peed8M = document.getElementById('peed8M');
  
        peed8M.style.display = 'none';
       
     
      }
    


      function peed16M() {
  
        document.getElementById('peed16M').classList.remove('hidden');
       
     
      }
    





});
