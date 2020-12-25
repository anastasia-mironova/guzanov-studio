if (!empty($_POST['name'])) {
print("Имя: " . $_POST['name']);
print("<br>Email: " . $_POST['email']);
}

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$project_description = $_POST['project-description'];
$file = $_POST['file'];


$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$project_description = htmlspecialchars($project_description);
$file = htmlspecialchars($file);

$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);
$project_description = urldecode($project_description);
$file = urldecode($file);

$name = trim($name);
$phone = trim($phone);
$email = trim($email);
$project_description = trim($project_description);

echo $name
echo <br>
echo $phone
echo <br>
echo $email
echo <br>
echo $project_description
echo <br>

if(mail("anast.mir22@yandex.ru", "Заявка с сайта GUZANOV STUDIO", "Имя:".$name. "\r\n Телефон".$phone.". E-mail: ".$email "".$project_description. "Файл".$file.,"From: example2@mail.ru \r\n"))
{
echo "сообщение успешно отправлено";
} else {
echo "при отправке сообщения возникли ошибки";
}