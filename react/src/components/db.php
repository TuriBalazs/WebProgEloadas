<?php
$host = "localhost";
$db   = "webprog";
$user = "webprog";
$pass = "GJ8n08_xnnbsi";
try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=UTF8",$user,$pass,
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
} catch (PDOException $e) {
    die("Database connection failed");
}
