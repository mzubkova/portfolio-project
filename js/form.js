$(document).ready(function () {
  $("form").submit(function () {
    event.preventDefault();
    if (validateForm()) {
      return false;
    }
    var form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "sendform.php",
      data: form_data,
      success: function () {
        $(".popup").addClass("active");
      },
    });
  });
});

$(".close, .btn-modal").click(function () {
  $(".popup").removeClass("active");
  $("form").trigger("reset");
});
