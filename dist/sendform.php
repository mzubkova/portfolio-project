<?php
$name = trim($_POST['name']);
$phone = trim($_POST['tel']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);
$price = trim($_POST['price']);
$fromMail = '_mainaccount@kvkstudio.com.ua';
$fromName = 'Поступила заявка с сайта';
$emailTo = 'kvk.creative.studio@gmail.com';
$subject = 'Форма обратной связи kvkstudio.com.ua';
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

$body = "Получено письмо с сайта kvkstudio.com.ua \nИмя: $name\nТелефон: $phone\nПочта: $email \nСообщение: $message \nПакет: $price";

if (strlen($phone) > 0) {
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );
return;
}
?>