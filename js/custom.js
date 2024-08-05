// script.js

$(document).ready(function() {
    $('#submit').click(function() {
        var formData = $('#contactForm').serialize();

        $.ajax({
            type: 'POST',
            url: 'send.php',
            data: formData,
            dataType: 'json',
            beforeSend: function() {
                $('#submit').html('<i class="fas fa-spinner fa-spin"></i> Einen Augenblick, bitte.');
                $('#submit').prop('disabled', true);
            },
            success: function(response) {
                if (response.success) {
                    $('#submit').html('<i class="fas fa-check"></i> Gesendet');
                    $('#submit').removeClass('btn-primary').addClass('btn-success');
                    $('#statusMsg').html('<div class="alert alert-success">Message has been sent</div>');
                } else {
                    $('#submit').html('Absenden');
                    $('#submit').prop('disabled', false);
                    $('#statusMsg').html('<div class="alert alert-danger">' + response.message + '</div>');
                }
            },
            error: function(xhr, status, error) {
                $('#submit').html('Absenden');
                $('#submit').prop('disabled', false);
                $('#statusMsg').html('<div class="alert alert-danger">Error: ' + xhr.responseText + '</div>');
            }
        });
    });
});

