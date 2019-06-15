// ページ内リンクのスムーススクロール
$(document).ready(function() {
    
    // [#]リンクをクリックした
    $('a[href^="#"]').click(function(){

        // animate 実行
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        $("html, body").animate(
            {scrollTop: target.offset().top}, speed, "swing");
        return false;
    });
});
