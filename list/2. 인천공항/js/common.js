
// 각 section height 뷰포트 높이로 맞추기	
$(document).ready(	function() {
    var viewPortHeight;
    var sec = document.getElementsByTagName("section");
   

    window.addEventListener('resize', redraw);
    redraw();

    function redraw () {
        viewPortHeight = window.innerHeight;
        
        for(var i = 0; i < sec.length; i++ ) {
            sec[i].style.height = viewPortHeight + "px";
        }
    }


    //스크롤 할 때마다 한 섹션씩 넘어가게
    var header = document.querySelector('header');
    var html = document.querySelector('html');
    console.log(2* viewPortHeight)

    window.addEventListener('wheel', findScrollDirection);
    function findScrollDirection (event) {
        var delta;
        if (event.wheelDelta){
            delta = event.wheelDelta;
        } else {
            delta = -1 *event.deltaY
        }
        if (delta < 0 && 0 <= html.scrollTop < viewPortHeight) {
            console.log('down');
            console.log(viewPortHeight);
            window.scroll({
                top:viewPortHeight,
                left:0,
                behavior: 'smooth'
            }) 
            header.className = "down";

        } else if (delta > 0 && html.scrollTop === viewPortHeight ) {
            console.log('up');
            window.scroll({
                top:0,
                left:0,
                behavior: 'smooth'
            })
            header.className = "";
        }
        if (delta < 0 && html.scrollTop === viewPortHeight) {
            window.scroll({
                top:2 *viewPortHeight,
                left:0,
                behavior: 'smooth'
            })                          
            console.log("나 지금 viewporthiehgt에 있어")
        } else if (delta > 0 && html.scrollTop === (2 *viewPortHeight)) {
            window.scroll({
                top:viewPortHeight,
                behavior : 'smooth'
            })
            // header.className = "";
        }

        if (delta < 0 && html.scrollTop === (2 *viewPortHeight)) {
            window.scroll({
                top:3* viewPortHeight,
                behavior: 'smooth'
            })
        } else if (delta > 0 && html.scrollTop === (3 *viewPortHeight) ) {
            window.scroll({
                top:2* viewPortHeight,
                behavior: 'smooth'
            }) 
            console.log('지금 내 위치는  3 *viewPortHeight 이야 올라가야돼')
        } 
        if (delta < 0 && html.scrollTop === (3 *viewPortHeight)) {
            window.scroll({
                top:4* viewPortHeight,
                behavior: 'smooth'
            })
        } else if (delta > 0 && (3 *viewPortHeight) <= html.scrollTop ) {
            window.scroll({
                top:3* viewPortHeight,
                left:0,
                behavior: 'smooth'
            }) 
            console.log('지금 내 위치는  4 *viewPortHeight 이야 올라가야돼')
        } 
    }

  

})



