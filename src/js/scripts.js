(function ($) {
    $(window).load(function () {
        $(".scroll-container").mCustomScrollbar({
            theme: "dark-thick",
            setHeight: "100%"
        });
    });
})(jQuery);

$(document).ready(function () {
    $("#fold-filter").click(function () {
        $(".wrapper-left").toggleClass("filter-hide open")
    });
    $("#fold-list").click(function () {
        $(".wrapper-left").toggleClass("establishments-hide open")
    });
    $(".user-menu .sub-menu").click(function () {
        $(".user-menu .sub-menu").toggleClass("open")
    });

    /*
    $("select").selectize({create: !0, sortField: "text"}),
        $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });*/

    var e = $(".wrapper"), t = 1, i = $(".wrapper-left");
    i.css("width", 50 / t + "%");
    var n;
    i.resizable({
        handles: "e", start: function (e, t) {
            n = t.originalSize.width + t.originalElement.next().outerWidth()
        }, stop: function (t, i) {
            var n = 100 * i.originalElement.outerWidth() / e.innerWidth();
            i.originalElement.css("width", n + "%");
            var l = i.originalElement.next(), o = 100 * l.outerWidth() / e.innerWidth();
            l.css("width", o + "%")
        }, resize: function (e, t) {
            t.originalElement.next().width(n - t.size.width)
        }
    })
});
