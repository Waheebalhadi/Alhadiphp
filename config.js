fetch("http://localhost/w/api.php?network_id=1&read_pass=A9BD80A995034Z")
    .then(response => response.json())
    .then(data => {
        console.log("استجابة API:", data);
        if (data.success) {
            document.getElementById("textContent").innerText = data.text_content || "لا يوجد نص متاح";

            const cardsTable = document.getElementById("cards");
            cardsTable.innerHTML = "";
            data.cards.forEach(card => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${card.price}</td><td>${card.time}</td><td>${card.transfer}</td><td>${card.validity}</td>`;
                cardsTable.appendChild(row);
            });

            const pointsList = document.getElementById("points");
            pointsList.innerHTML = "";
            data.points.forEach(point => {
                const li = document.createElement("li");
                li.innerText = `${point.name} - ${point.location}`;
                pointsList.appendChild(li);
            });
        } else {
            console.error("خطأ في البيانات:", data.message);
        }
    })
    .catch(error => console.error("خطأ في الاتصال:", error));
