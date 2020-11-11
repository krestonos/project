<?php

require_once 'database.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

validateUser();

function validateUser()
{
    $user = $_SERVER['PHP_AUTH_USER'] ?? null;
    $password = $_SERVER['PHP_AUTH_PW'] ?? null;

    if (empty($user) || empty($password)) {
        errorResponse();
    }

    $pdo = getPdo();
    $query = $pdo->prepare('SELECT * FROM user WHERE username = :username and password = :password LIMIT 1');
    $query->execute([':username' => $user, ':password' => md5($password)]);
    if (empty($query->fetchAll())) {
        errorResponse();
    }
}

function errorResponse()
{
    header('WWW-Authenticate: Basic realm="My Website"');
    header('HTTP/1.0 401 Unauthorized');
    echo "You need to enter a valid username and password.";
    exit;
}