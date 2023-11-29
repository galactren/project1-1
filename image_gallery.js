$(document).ready(function () {
    $("#image_list a").click(function (e) {
        e.preventDefault();
        var imgUrl = $(this).attr("href");
        var title_desc = $(this).attr("title");
        $('#caption').html(title_desc);
        $("#image").attr("src", imgUrl);
    });
});
