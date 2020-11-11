<?php
require_once 'auth.php';
?>

<form action="timeFormHandler.php" method="post">
    <div>
        <label for="timer-date">Дата окончания таймера</label>
        <input type="datetime-local" name="timer-date">
    </div>

    <div>
        <label for="items-count">Количество товаров</label>
        <input type="number" name="items-count" >
    </div>

    <input type="submit">
</form>