$(document).ready(function () {
    // Init
    $('.image-section-VGG16').hide();
    $('.loaderVGG16').hide();
    $('#resultVGG16').hide();

    // Upload Preview
    function readURLVGG16(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreviewVGG16').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreviewVGG16').hide();
                $('#imagePreviewVGG16').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUploadVGG16").change(function () {
        $('.image-section-VGG16').show();
        $('#btn-predict-VGG16').show();
        $('#resultVGG16').text('');
        $('#resultVGG16').hide();
        readURLVGG16(this);
    });

    // Predict
    $('#btn-predict-VGG16').click(function () {
        var form_data = new FormData($('#upload-file-VGG16')[0]);

        // Show loading animation
        $(this).hide();
        $('.loaderVGG16').show();

        // Make prediction by calling api /predictVGG16
        $.ajax({
            type: 'POST',
            url: '/predictVGG16',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loaderVGG16').hide();
                $('#resultVGG16').fadeIn(600);
                $('#resultVGG16').text(' Result:  ' + data);
                console.log('VGG16 Success!');
            },
        });
    });

});
