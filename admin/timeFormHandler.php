<?php
require_once 'auth.php';

$date = $_POST['timer-date'] ?? null;
$count = $_POST['items-count'] ?? null;

if (empty($date) || empty($count)) {
    die('Заполнены не все данные формы');
}

$dateTime = new DateTime($date);
$pdo = getPdo();

$query = $pdo->prepare('INSERT INTO timer (end_date, items_count) VALUES (:endDate, :itemsCount)');
$query->execute([':endDate' => $dateTime->format('Y-m-d H:i:s'), ':itemsCount' => (int) $count]);

echo 'Таймер успешно установлен на ' . $dateTime->format('Y-m-d H:i:s');
