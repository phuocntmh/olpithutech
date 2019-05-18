var frm = $('#register-form');
frm.submit(function (e) {
    var recaptcha = $("#g-recaptcha-response").val();
    if (recaptcha === "") {
        e.preventDefault();
        alert("Vui lòng kiểm tra biểu mẫu. Error: Please check the Recaptcha.");
    }
    $.ajax({
        type: 'GET',
        beforeSend: function(){
            $("input").prop('disabled', true);
            $("#submit-form").attr("disabled", true);
        },
        url: 'https://script.google.com/macros/s/AKfycbxBwosreW7JvP2F0kMnIpmSgNT4Pp7yPZdzBqg1cH-P6vpG3gI/exec',
        data: frm.serialize(),
        success: function (data) {
            $('#SuccessModal').modal('show');
        },
        error: function (data) {
            $('#FailModal').modal('show');
        },
        complete: function(){
            $("input").prop('disabled', false);
            $("#submit-form").attr("disabled", false);
            $('#register-form')[0].reset();
        }
    });
});
