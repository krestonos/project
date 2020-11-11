<?php
/**
 * @return PDO
 */
function getPdo()
{
    static $pdo = null;
    if (null == $pdo) {
        $pdo = new PDO("sqlite:" . __DIR__ . "/db/database.sql");
    }

    return $pdo;
}

function getLastTimer() {
    $pdo = getPdo();
    $result = $pdo->query('SELECT end_date, items_count FROM timer ORDER BY ID DESC LIMIT 1')->fetch();
    return $result;
}