$(document).on("click", '[data-trigger="goto-top"]', function() {
    $("html, body").animate({ scrollTop: $("body").offset().top }, 800);
});

feedUrl = "../owen/feed.json";
$.getJSON(feedUrl, function(result) {
    const posts = result["payload"]["references"]["Post"];
    const user = result["payload"]["user"]["username"];

    output = "";
    $.each(posts, function(i, field) {
        title = field["title"];
        content = field["content"]["subtitle"];
        slug = field["uniqueSlug"];
        output += '<div class="blogitem">';
        output += "<span></span>";
        output += "<h4>" + title + "</h4>";
        output += "<p>" + content + "</p>";
        output +=
            '<a href="https://medium.com/@OwenMc/' +
            slug +
            '" target="_blank">Read more</a>';
        output += "</div>";
        console.log(i + " ");
        console.log(field);
    });

    $(".bloglist")
        .empty()
        .append(output);
});