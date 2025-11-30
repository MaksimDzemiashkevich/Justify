<?php
session_start();

if (!isset($_SESSION['user'])) {
    header("Location: /HTML/enter.html");
    exit;
}
?>