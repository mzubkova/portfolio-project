// $(document).ready(function () {
//   $("form").submit(function () {
//     var form_data = $(this).serialize();
//     $.ajax({
//       type: "POST",
//       url: "sendform.php",
//       data: form_data,
//       success: function () {
//         $(".popup").addClass("active");
//       },
//     });
//     event.preventDefault();
//   });
// });

// $(".close, .popup__button").click(function () {
//   $(".popup").removeClass("active");
//   $("form").trigger("reset");
// });

$(document).ready(function () {
  $("#ModalLabel").validate({
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
        url: "sendform.php",
        data: $(form).serialize(),
        success: function () {
          $(".close, .popup__button").click(function () {
            $(".popup").removeClass("active");
            $("form").trigger("reset");
          });
        },
      });
      return false;
    },
  });
});
