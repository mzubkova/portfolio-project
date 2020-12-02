$(document).ready(function () {
  $("form").submit(function () {
    var form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "sendform.php",
      data: form_data,
      success: function () {
        $(".popup").addClass("active");
      },
    });
    event.preventDefault();
  });
});

$(".close, .btn-modal").click(function () {
  $(".popup").removeClass("active");
});

$(
  'form input[type="text"], form input[type="tel"], form input[type="email"], form textarea'
).val("");
