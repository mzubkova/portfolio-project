<!doctype html>
<html>

<head>
    <meta charset="utf-8" />
    <title> Создание формы обратной связи </title>
    <meta name="description" content="Создание формы обратной связи" />
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap&subset=cyrillic" rel="stylesheet">

</head>

<body>
    <div class="form-wrapper">

        <form class="contact-form" id="contact-form_1" method="POST">
              <p class="contacts-section__contact-form-text--second contacts-section__contact-form-text">Оставьте заявку и я свяжусь с вами, чтобы уточнить детали фотосессии</p>
              <p class="contact-form__description"></p>
                <div class="contact-form__input-wrapper">
                  <input name="name" type="name" class="contact-form__input contact-form__input-name" id="inputName" aria-describedby="nameHelp" placeholder="имя">
                  <div class="contact-form__error contact-form__error-name"></div>
                </div>
                <div class="contact-form__input-wrapper">
                  <input name="tel" type="tel" class="contact-form__input contact-form__input-tel" id="inputTel" placeholder="телефон">
                  <div class="contact-form__error contact-form__error-tel"></div>
                </div>
                <div class="contact-form__input-wrapper">
                  <input name="email" type="email" class="contact-form__input contact-form__input-email" id="inputEmail" placeholder="E-mail">
                  <div class="contact-form__error contact-form__error-email"></div>
                </div>
                <div class="contact-form__input-wrapper">
                  <textarea name="message" id="textarea" cols="30" rows="7" placeholder="Сообщение"></textarea>
                </div>
                <button type="submit" class="contact-form__button btn">Отправить</button>
              </form> -->
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="/mail/js/mail.js"></script>
</body>

</html>