<?php
$name = trim($_POST['name']);
$phone = trim($_POST['tel']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);
$fromMail = '_mainaccount@kvkstudio.com.ua'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'Поступила заявка с сайта'; //Заголовок письма
$emailTo = 'violamars777@gmail.com'; //Ваша почта kvk.creative.studio@gmail.com
$subject = 'Форма обратной связи kvkstudio.com.ua';
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

// Содержимое письма
$body = "Получено письмо с сайта kvkstudio.com.ua \nИмя: $name\nТелефон: $phone\nПочта: $email \nСообщение: $message";

// сообщение будет отправлено в случае, если поле с номером телефона не пустое
if (strlen($phone) > 0) {
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );
return;
}
?>