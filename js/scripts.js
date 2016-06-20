(function () {
    $(window).load(function () {
        $(".scroll-container").mCustomScrollbar({
            theme: "dark-thick",
            setHeight: "100%"
        });
    });
})(jQuery);

$('#fold-filter').click(function () {
    $('.wrapper-left').toggleClass('filter-hide open');
});

$('#fold-list').click(function () {
    $('.wrapper-left').toggleClass('establishments-hide open');
});

$('.user-menu .sub-menu').click(function () {
    $('.user-menu .sub-menu').toggleClass('open');
});


$(document).ready(function () {

    $('select').selectize({
        create: true,
        sortField: 'text'
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    var container = $(".wrapper");
    var numberOfCol = 1;
    var wrapperLeft = $(".wrapper-left");
    wrapperLeft.css('width', 50 / numberOfCol + '%');

    var sibTotalWidth;
    wrapperLeft.resizable({
        handles: 'e',
        start: function (event, ui) {
            sibTotalWidth = ui.originalSize.width + ui.originalElement.next().outerWidth();
        },
        stop: function (event, ui) {
            var cellPercentWidth = 100 * ui.originalElement.outerWidth() / container.innerWidth();
            ui.originalElement.css('width', cellPercentWidth + '%');
            var nextCell = ui.originalElement.next();
            var nextPercentWidth = 100 * nextCell.outerWidth() / container.innerWidth();
            nextCell.css('width', nextPercentWidth + '%');
        },
        resize: function (event, ui) {
            ui.originalElement.next().width(sibTotalWidth - ui.size.width);
        }
    });
});
