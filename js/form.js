$(document).ready(function () {
  $(".js-form-validate").each(function () {
    let form = $(this);
    form.validate({
      ignore: ":hidden",
      errorElement: "div",
      errorClass: "contact-form__error-name",
      rules: {
        name: {
          required: true,
          minlength: 5,
        },
        tel: {
          required: true,
          minlength: 10,
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
      submitHandler: function (form) {
        $.ajax({
          type: "POST",
          url: "/sendform.php",
          data: $(form).serialize(),
          success: function () {
            $(".popup").addClass("active");
          },
        });
        return false;
      },
    });
  });
});

$(".close, .popup__button").click(function () {
  $(".popup").removeClass("active");
  $("form").trigger("reset");
});
