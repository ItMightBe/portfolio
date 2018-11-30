
$(document).ready(function() {

    viewportWork();
    onePageScroll();

    var viewportHeight = window.innerHeight;;

    function viewportWork() {
        //각 section height 뷰포트 높이로 맞추기
        var sec = document.getElementsByTagName("section");
    
        window.addEventListener('resize', redraw);
        redraw();

        function redraw() {
            for(var i = 0; i < sec.length; i++ ) {
                sec[i].style.height = viewportHeight + "px";
            }
        }
    }


    function onePageScroll() {
        //스크롤 한번에 한 섹션씩 넘어가게
        var header = document.querySelector('header');
        var html = document.querySelector('html');
        console.log(2* viewportHeight);

        window.addEventListener('wheel', findScrollDirection);
        function findScrollDirection (event) {
            var delta;
            if (event.wheelDelta){
                delta = event.wheelDelta;
            } else {
                delta = -1 *event.deltaY
            }
            if (delta < 0 && 0 <= html.scrollTop < viewportHeight) {
                console.log('down');
                console.log(viewportHeight);
                window.scroll({
                    top:viewportHeight,
                    left:0,
                    behavior: 'smooth'
                }) 
                header.className = "down";

            } else if (delta > 0 && html.scrollTop === viewportHeight ) {
                console.log('up');
                window.scroll({
                    top:0,
                    left:0,
                    behavior: 'smooth'
                })
                header.className = "";
            }
            if (delta < 0 && html.scrollTop === viewportHeight) {
                window.scroll({
                    top:2 *viewportHeight,
                    left:0,
                    behavior: 'smooth'
                })                          
                console.log("나 지금 viewporthiehgt에 있어")
            } else if (delta > 0 && html.scrollTop === (2 *viewportHeight)) {
                window.scroll({
                    top:viewportHeight,
                    behavior : 'smooth'
                })
                // header.className = "";
            }

            if (delta < 0 && html.scrollTop === (2 *viewportHeight)) {
                window.scroll({
                    top:3* viewportHeight,
                    behavior: 'smooth'
                })
            } else if (delta > 0 && html.scrollTop === (3 *viewportHeight) ) {
                window.scroll({
                    top:2* viewportHeight,
                    behavior: 'smooth'
                }) 
                console.log('지금 내 위치는  3 *viewportHeight 이야 올라가야돼')
            } 
            if (delta < 0 && html.scrollTop === (3 *viewportHeight)) {
                window.scroll({
                    top:4* viewportHeight,
                    behavior: 'smooth'
                })
            } else if (delta > 0 && (3 *viewportHeight) <= html.scrollTop ) {
                window.scroll({
                    top:3* viewportHeight,
                    left:0,
                    behavior: 'smooth'
                }) 
                console.log('지금 내 위치는  4 *viewportHeight 이야 올라가야돼')
            } 
        }
    }


  

})



