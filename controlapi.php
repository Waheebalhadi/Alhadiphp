<?php
header('Content-Type: application/json');

// اتصال بقاعدة البيانات
$host = 'localhost';
$user = 'root';  // اسم المستخدم
$password = '';  // كلمة المرور
$dbname = 'majd';  // اسم قاعدة البيانات

$conn = new mysqli($host, $user, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die(json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]));
}

// استلام البيانات عبر GET
// $network_id = isset($_GET['network_id']) ? $_GET['network_id'] : '';
$network_id =1;
// التحقق من وجود network_id
if (empty($network_id)) {
    echo json_encode(['error' => 'Network ID is required']);
    exit;
}

// استعلام للحصول على الإعدادات
$query = "SELECT * FROM control WHERE network_id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param('s', $network_id);
$stmt->execute();
$result = $stmt->get_result();

// التحقق إذا كانت البيانات موجودة
if ($result->num_rows > 0) {
    $settings = $result->fetch_assoc();
    echo json_encode($settings);
} else {
    echo json_encode(['error' => 'No settings found for this network ID']);
}

// إغلاق الاتصال
$stmt->close();
$conn->close();
?>
