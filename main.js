// function getUser(userId) {
//     fetch(`http://localhost/w/getUser.php?user_id=${userId}`)
//         .then(response => response.json())
//         .then(data => {
//             // التحقق من الاستجابة
//             console.log("استجابة الـ API:", data);  // لمعرفة ما إذا كانت البيانات تحتوي على القيم المتوقعة
            
//             if (data.success) {
//                 console.log("بيانات المستخدم:", data.user);
//                 document.getElementById("user-info").innerHTML = `
//                     <p><strong>الاسم:</strong> ${data.user.name}</p>
//                     <p><strong>البريد الإلكتروني:</strong> ${data.user.email}</p>
//                     <p><strong>رقم الهاتف:</strong> ${data.user.phone}</p>
//                     <p><strong>العمر:</strong> ${data.user.age}</p>
//                 `;
//             } else {
//                 console.log("خطأ:", data.message);
//                 document.getElementById("user-info").innerHTML = `<p style="color:red;">${data.message}</p>`;
//             }
//         })
//         .catch(error => console.error("خطأ في جلب البيانات:", error));
// }

// // استدعاء API عند الضغط على زر معين
// document.getElementById("fetchUserBtn").addEventListener("click", function () {
//     let userId = document.getElementById("userIdInput").value;
//     getUser(userId);
// });
