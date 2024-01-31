    $(document).ready(function() {
        var imageIndex = 0; 
        var imageCount = 7;

        function switchImage() {
            $('#scrollImage').css({
                'opacity': '0',
                'transform': 'translateX(-100%)'
            });
            setTimeout(function() {
                if (imageIndex === 0) {
                    $('#scrollImage').attr('src', 'Mom.jpg').css({
                        'opacity': '1',
                        'transform': 'translateX(0)'
                    });
                } else {
                    $('#scrollImage').attr('src', 'Hat' + imageIndex + '.jpg').css({
                        'opacity': '1',
                        'transform': 'translateX(0)'
                    });
                }
            }, 500);
        }

        $('#scrollImage').click(function() {
            window.location.href = 'Service.html';
        });

        $('#leftArrow').click(function() {
            imageIndex = (imageIndex - 1 + imageCount) % imageCount;
            switchImage();
        });

        $('#rightArrow').click(function() {
            imageIndex = (imageIndex + 1) % imageCount;
            switchImage();
        });

        $('#leftArrow').css('left', '25%');
        $('#rightArrow').css('right', '25%');
    });
