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
    event.preventDefault();
    var form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "sendform.php",
      data: form_data,
      success: function () {
        $(".popup").addClass("active");
      },
    });
  }
  });

$(".close").click(function () {
  $(".popup").removeClass("active");
  $("form").trigger("reset");
});
