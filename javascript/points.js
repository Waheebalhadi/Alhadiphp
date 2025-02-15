//window.addEventListener('load', function() {
    //   fetch(`${sp}client/getpoints${pp}?network_id=${nd}&type=sell_points&read_pass=${rs}`)
    //       .then(response => response.json())
    //       .then(data => {
    //           const pointsDiv = document.getElementById('sell-points');
    //          pointsDiv.innerHTML = ""; // تفريغ المحتوى السابق
    //           if (!data.error) {
    //               data.forEach(point => {
    //                   const row = document.createElement('tr');
    //                   row.innerHTML = `<td>${point.name}</td>`;
    //                   pointsDiv.appendChild(row);
    //               });
    //           } else {
    //              // console.error(data.error);
    //           }
    //       })
    //       .catch(error => {
    //           console.error('Error fetching sell points:', error);
    //       });
  //});
window.addEventListener('load', function() {

    const nd = 1; // يمكن تغييره حسب الحاجة
    fetch(`http://localhost/w/points.php?network_id=${nd}`)
          .then(response => response.json())
          .then(data => {
              const pointsDiv = document.getElementById('sell-points');
             pointsDiv.innerHTML = ""; // تفريغ المحتوى السابق
              if (!data.error) {
                  data.forEach(points_of_sale => {
                      const row = document.createElement('tr');
                      row.innerHTML = `<td>${points_of_sale.point_name}</td>`;
                      pointsDiv.appendChild(row);
                  });
              } else {
                 // console.error(data.error);
              }
          })
          .catch(error => {
              console.error('Error fetching sell points:', error);
          });
  });








