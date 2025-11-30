<?php
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        die("Неверный метод отправки");
    }

    $email = $_POST['email'] ?? '';
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    $password_confirm = $_POST['password_confirm'] ?? '';

    if ($password !== $password_confirm) {
        die("Пароли не совпадают!");
    }

    /*далее подключение базы данных, если пользователь новый, регистрируем, если есть, предупреждаем что такой регистрирован
    и не создаём нового
    
    Если регистрация успешная, переходим на страницу
    header("Location: /HTML/enter.html");
    exit;
    */
?>