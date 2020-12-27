<?php

if (isset($_POST['name'])) {
    $name = $_POST['name'];
}
if (isset($_POST['phone'])) {
    $phone = $_POST['phone'];
}
if (isset($_POST['email'])) {
    $email = $_POST['email'];
}
if (isset($_POST['project-description'])) {
    $message = $_POST['project-description'];
}
$myaddres  = "anast.mir22@yandex.ru"; // кому отправляем


$mes = "Тема: Заявка с сайта Guzanov Studio \nИмя: $name \n Email: $email \n Телефон: $phone \n Описание проекта: $message";

$sub = 'Заявка'; //сабж
$emailTitle = 'Заявка с сайта Guzanov Studio'; // от кого

$send = mail($myaddres, $sub, $mes, "Content-type:text/plain; charset = utf-8\r\nFrom:$email");
// отправляем письмо 

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="refresh" content="3; url=index.html">
    <title>Спасибо! Мы свяжемся с вами!</title>
    <meta name="generator">
    <script type="text/javascript">
        setTimeout('location.replace("/index.html")', 3000);
    </script>
    <style>
        body {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>

<body>
    <h1>Спасибо! Мы свяжемся с вами!</h1>
</body>

</html>