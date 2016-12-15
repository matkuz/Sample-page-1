//adding class after scroll
var scrollingStartDistance = $(".exploreWrapper").offset().top;
    $(document).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if(scrollTop > scrollingStartDistance){
            $("#headerTop").addClass("headerTopScroll");
        }else{
            $("#headerTop").removeClass("headerTopScroll");
        }
    });
//animation hamburger
    $("#hamburger").click(function(){
        $(this).toggleClass("is-active");
    });
//rwd navigation
    $(function() {
        $('#hamburger').sidr({
            name: 'sidr-nav',
            source: '#sidr-nav',
            side: 'left',
            renaming: 0,
            speed: 400,
        });
    });