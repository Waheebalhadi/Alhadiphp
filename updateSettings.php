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

$data = json_decode(file_get_contents("php://input"), true); // قراءة البيانات القادمة من الجافا سكربت

$network_id = $data['network_id'];
$show_vpn = $data['show_vpn'];
$show_upcl = $data['show_upcl'];
$show_face = $data['show_face'];
$show_bind = $data['show_bind'];
$show_user_count = $data['show_user_count'];
$show_block_formatted_devices = $data['show_block_formatted_devices'];
$show_block_card_guessing = $data['show_block_card_guessing'];

// تحديث الإعدادات في قاعدة البيانات
$sql = "UPDATE settingsoption SET
            show_vpn = ?, show_upcl = ?, show_face = ?, show_bind = ?,
            show_user_count = ?, show_block_formatted_devices = ?, show_block_card_guessing = ?
        WHERE network_id = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param('sssssssi', $show_vpn, $show_upcl, $show_face, $show_bind, $show_user_count, $show_block_formatted_devices, $show_block_card_guessing, $network_id);

if ($stmt->execute()) {
    echo json_encode(['message' => 'Settings updated successfully']);
} else {
    echo json_encode(['error' => 'Failed to update settings']);
}

$conn->close();
?>
