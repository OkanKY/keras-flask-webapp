$(document).ready(function () {
    // Init
    $('.image-section-Xception').hide();
    $('.loaderXception').hide();
    $('#resultXception').hide();

    // Upload Preview
    function readURLXception(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreviewXception').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreviewXception').hide();
                $('#imagePreviewXception').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUploadXception").change(function () {
        $('.image-section-Xception').show();
        $('#btn-predict-Xception').show();
        $('#resultXception').text('');
        $('#resultXception').hide();
        readURLXception(this);
    });

    // Predict
    $('#btn-predict-Xception').click(function () {
        var form_data = new FormData($('#upload-file-Xception')[0]);

        // Show loading animation
        $(this).hide();
        $('.loaderXception').show();

        // Make prediction by calling api /predictXception
        $.ajax({
            type: 'POST',
            url: '/predictXception',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loaderXception').hide();
                $('#resultXception').fadeIn(600);
                $('#resultXception').text(' Result:  ' + data);
                console.log('Xception Success!');
            },
        });
    });

});
