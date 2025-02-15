//window.addEventListener('load', function() {
//  document.addEventListener('DOMContentLoaded', function() {

         fetch(`${sp}client/gettxt${pp}?network_id=${nd}&type=text&read_pass=${rs}`)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                    //   console.error(data.error);
                        return; 
						
                    }
                    const scrollText = document.getElementById('scroll-text-content');
                    scrollText.innerText = data.text;
                });





         //   });

   