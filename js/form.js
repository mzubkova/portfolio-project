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
      $('form')[0].reset();
    });
    event.preventDefault();
  });
});

$(".close, .btn-modal").click(function () {
  $(".popup").removeClass("active").trigger("reset");
});
