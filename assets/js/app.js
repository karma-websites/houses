$(function() {

    /* Button absolute */
    let btn = $("#buttonAbsolute");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
         return false;
    });

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(e) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 900);
    });

})
