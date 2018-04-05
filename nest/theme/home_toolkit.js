$(document).ready(function() {

    console.log('home toolkit loaded');

    $.getJSON("api/posts.json", function(data) {
        $.each(data.posts, function(key, item) {
            $(".main").prepend("<div class=\"content-sections\">\n" +
                "            <h2>"+ item.title + "</h1>\n" +
                "                <p>"+item.body+"</p>\n" +
                "        </div>");
        });
    });

});

window.onload = function(e){
    console.log("window.onload");
}
/*var list_new = "<li>ABC</li>";
$('#post-list').empty().append(list_new);*/

