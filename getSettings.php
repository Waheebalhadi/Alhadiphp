<?php
// إعداد الاتصال بقاعدة البيانات
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'majd'; // استبدلها باسم قاعدة البيانات الخاصة بك

$conn = new mysqli($host, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$network_id = 1; // الحصول على network_id من طلب GET

$sql = "SELECT * FROM settingsoption WHERE network_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $network_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $settings = $result->fetch_assoc();
    echo json_encode($settings); // إرجاع الإعدادات كـ JSON
} else {
    echo json_encode(['error' => 'Settings not found']);
}

$conn->close();
?>
