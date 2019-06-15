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

// カーソルカスタマイズ
$(document).ready(function() {

    var
    cursor = $(".custom_cursor"),
    follower = $(".follower"),
    cWidth = 8, //カーソルの大きさ
    fWidth = 40, //フォロワーの大きさ
    delay = 10, //数字を大きくするとフォロワーがより遅れて来る
    mouseX = 0, //マウスのX座標
    mouseY = 0, //マウスのY座標
    posX = 0, //フォロワーのX座標
    posY = 0; //フォロワーのX座標
    
    //カーソルの遅延アニメーション
    //ほんの少ーーーしだけ遅延させる 0.001秒
    TweenMax.to({}, .001, {
      repeat: -1,
      onRepeat: function() {
        posX += (mouseX - posX) / delay;
        posY += (mouseY - posY) / delay;
        
        TweenMax.set(follower, {
            css: {    
              left: posX - (fWidth / 2),
              top: posY - (fWidth / 2)
            }
        });
        
        TweenMax.set(cursor, {
            css: {    
              left: mouseX - (cWidth / 2),
              top: mouseY - (cWidth / 2)
            }
        });
      }
    });
    
    //マウス座標を取得
    $(document).on("mousemove", function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });
    
    $("a").on({
      "mouseenter": function() {
        cursor.addClass("is-active");
        follower.addClass("is-active");
      },
      "mouseleave": function() {
        cursor.removeClass("is-active");
        follower.removeClass("is-active");
      }
    });
});