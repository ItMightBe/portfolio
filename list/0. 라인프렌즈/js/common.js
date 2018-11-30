


window.onload =function(){
    var html = document.querySelector('html');
    var header = document.querySelector('.header');

    headerFix();
    langToggle();

    //header 스크롤 fix 
    function headerFix() {
        document.addEventListener("scroll", scrollWork) ;
        function scrollWork () {
            var now = html.scrollTop;            
            if (now > 0) {
                header.classList.add('fix');
            } else  {
                header.classList.remove('fix');
            }
        }
    }

    //header lang 토글
    function langToggle() {
        var langBtn = header.querySelector('.lang_select');
        var targetUl = header.querySelector('.lang_list');

        langBtn.addEventListener('click', function(e){
            e.preventDefault();
            if(langBtn.classList.contains('open')){
                langBtn.classList.remove('open');
                targetUl.style.display = 'none';
            } else {
                langBtn.classList.add('open')
                targetUl.style.display = 'block';
            }           
        })
    }
    //gallery arrow 버튼 페이지 넘김
    var gallery = html.querySelector('#gallery');
    var gal_bg = gallery.querySelector('.gal_bg');
    var bg_li = gal_bg.getElementsByTagName('li');

    //썸네일 페이지 롤링
    var content = gallery.querySelector('.content');
    var page_rolling = gallery.querySelector('.page_rolling');
    var rolling_li = page_rolling.querySelectorAll('li');

    //--페이지 롤링 클릭하면 a에 active 클래스 추가
    page_rolling.addEventListener('click', function(e){
        e.preventDefault();
        console.log(e.target);
        var activePic = page_rolling.querySelector('.pic.active');
        removeActive();
        function removeActive () {
            //active 클래스 삭제
            if(activePic === null) {return}
            activePic.classList.remove('active');
        }
        //active 클래스 추가
        var currentPic = e.target.parentNode;//내가 클릭한 a
        currentPic.classList.add('active');
        var currentLiName = currentPic.parentNode.className;
        var currentLi = gal_bg.getElementsByClassName(currentLiName)[0] ;

        //롤링 썸네일에 맞는 li(bg) display none
        for(i = 0; i < bg_li.length; i++) {
            bg_li[i].style.display = 'none';
            bg_li[i].style.opacity = '0';
        }
        //현재 나와야하는 li display block
        currentLi.style.display = 'block';
        currentLi.style.opacity = '1';
        
    })
    //페이지롤링 a태그 모아놓은 배열
    var pics =  [];
    rolling_li.forEach(function(a){
        pics.push(a.firstElementChild);
    })
    console.log(pics);

    //큰 화살표 버튼 누르고 다음 화면 넘어가게하기.
    var btn_prev_bg = gallery.querySelector('.bg_btn_arrow .prev');
    var btn_next_bg = gallery.querySelector('.bg_btn_arrow .next');
    console.log(btn_next_bg);

    // next 버튼 누를 때
    btn_next_bg.addEventListener('click', function next(e){
        e.preventDefault();
        
        var activePic = page_rolling.querySelector('.pic.active');
        var active_index = pics.indexOf(activePic);

        activePic.classList.remove('active');
        var nextPic = pics[active_index + 1];
        var firstPic = pics[0];

        if(active_index < 4) {
            nextPic.classList.add('active');
        } else if (active_index === 4) {
            firstPic.classList.add('active')
        }
        //현재 활성화 된 pic과 bg_li 연동
        var current = page_rolling.querySelector('.pic.active');
        var current_name = current.parentElement.className;

        for(i=0; i < bg_li.length; i++) {
            if (bg_li[i].className === current_name) {
                bg_li[i].style.display = 'block';
            } else {
                bg_li[i].style.display = 'none';
            }
        }
    
    });

    // prev 버튼 누를 때
    btn_prev_bg.addEventListener('click', function prev(e){
        e.preventDefault();
        
        var activePic = page_rolling.querySelector('.pic.active');
        var active_index = pics.indexOf(activePic);

        activePic.classList.remove('active');
        var prevPic = pics[active_index - 1];
        var lastPic = pics[4];

        if(active_index > 0 ) {
            prevPic.classList.add('active');
        } else if (active_index === 0) {
            lastPic.classList.add('active')
        }
        //현재 활성화 된 pic과 bg_li 연동
        var current = page_rolling.querySelector('.pic.active');
        var current_name = current.parentElement.className;

        for(i=0; i < bg_li.length; i++) {
            if (bg_li[i].className === current_name) {
                bg_li[i].style.display = 'block';
            } else {
                bg_li[i].style.display = 'none';
            }
        }
    
    });

}

