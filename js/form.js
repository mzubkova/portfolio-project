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

$(".close").click(function () {
  $(".popup").removeClass("active");
});
