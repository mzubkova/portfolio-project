$("#ModalLabel").validate({
  errorElement: "div",
  errorClass: "contact-form__error-name",
  rules: {
    name: {
      required: true,
      minlength: 5,
    },
    tel: {
      required: true,
      minlength: 11,
    },
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    name: {
      required: "Это поле необходимо заполнить!",
      minlength: jQuery.validator.format(
        "Длина имени должна быть больше 5-ти символов"
      ),
    },
    tel: {
      required: "Некорректно введен номер телефона!",
    },
    email: {
      required: "Некорректно введен e-mail!",
    },
  },
  errorPlacement: function (error, element) {
    $(element).parent().next("div").html(error);
  },
});
