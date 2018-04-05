console.log('post toolkit loaded');

var res = window.location.href.split("post/");
var jsonName = res[1] + '.json';

$.getJSON("/api/posts/" + jsonName, function(data) {
    $(".main").prepend("<div class=\"content-sections\">\n" +
            "            <h2>"+ data.title + "</h1>\n" +
            "                <p>"+data.body+"</p>\n" +
            "        </div>");
});
