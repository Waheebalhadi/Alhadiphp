<?php
header("Content-Type: application/json");

// إعداد الاتصال بقاعدة البيانات
$host = "localhost"; 
$user = "root"; 
$pass = ""; 
$dbname = "majd"; 

$conn = new mysqli($host, $user, $pass, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die(json_encode(["error" => "فشل الاتصال بقاعدة البيانات: " . $conn->connect_error]));
}

$conn->set_charset("utf8");


$network_id = 1;

// استعلام لاسترجاع بيانات الملف الشخصي للمستخدم بناءً على network_id
$sql = "SELECT price, time, transfer, validity FROM profile WHERE network_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $network_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $profiles = [];
    while ($row = $result->fetch_assoc()) {
        $profiles[] = $row;
    }
    echo json_encode($profiles, JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(["error" => "لم يتم العثور على بيانات"]);
}

// إغلاق الاتصال
$stmt->close();
$conn->close();
?>
