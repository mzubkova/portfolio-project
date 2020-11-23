<?
	const NAMEISREQUIRED = true;
	const MSGSNAMEERROR = "⚠ Это поле необходимо заполнить";

	const TELISREQUIRED = false;
	const MSGSTELERROR = "⚠ Некорректно введен номер телефона";

	const EMAILISREQUIRED = false;
	const MSGSEMAILERROR = "⚠ Это поле необходимо заполнить";
	const MSGSEMAILINCORRECT = "⚠ Некорректно введен e-mail";

	const TEXTISREQUIRED = false;
	const MSGSTEXTERROR = "⚠ Это поле необходимо заполнить";

	const MSGSSUCCESS = "Ваша заявка отправлена, в ближайшее время с Вами свяжется наш менеджер для уточнения деталей.";

	// *** SMTP *** //

		require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/phpmailer/smtp.php');
		const HOST = 'smtp.gmail.com';
		const LOGIN = 'violamars777@gmail.com';
		const PASS = 'JTf53aP__37hwb';
		const PORT = '465';

	// *** /SMTP *** //

	const SENDER = 'violamars777@gmail.com';
	const CATCHER = 'violamars777@gmail.com';
	const SUBJECT = 'Заявка с сайта';
  const CHARSET = 'UTF-8';
