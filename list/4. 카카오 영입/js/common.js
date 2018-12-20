window.onload = function() {
    contentRandomImgWork();
    headerWork();
    footerWork();
    
    function contentRandomImgWork() {
        //새로 고침시 인사이드 카카오 내 img 랜덤 변경. (alt 및 bg color도 같이) 
        var listContent = document.querySelector('.list_content');
        var targetA = listContent.querySelector('.link_col.num1');
        var targetImg = targetA.querySelector('img');

        var imageList = ['img_relax', 'img_club', 'img_refresh', 'img_kickboard'];
        var randomNum = Math.floor(Math.random() * imageList.length);
        var pairAlt;
        var pairBgColor;

        switch (randomNum){
            case 0 :
                pairAlt = '안마의자와 수면실';
                pairBgColor = '#e2d3fd';
                break;
            case 1 :
                pairAlt = '동호회 활동비 지원';
                pairBgColor ='#b9e3f1';
                break;
            case 2:
                pairAlt = '안식휴가';
                pairBgColor = '#c2dcfc';
                break;
            case 3:
                pairAlt = '킥보드';
                pairBgColor = '#ffbdbd';
                break;
        }

        targetImg.setAttribute('src', 'images/' + imageList[randomNum] + '.gif');
        targetImg.setAttribute('alt', pairAlt);
        setTimeout(function(){targetA.style.backgroundColor = pairBgColor;}, 150);      
    }
    
    function headerWork() {
        var html = document.querySelector('html');
        var header = document.querySelector('#header');
        var gnbLis = header.querySelectorAll('#header .list_gnb > li');

        //스크롤 시 헤더 클래스 white 추가
        document.addEventListener('scroll', scrollWork) ;

        function scrollWork() {
            var now = html.scrollTop;            
            if (now > 0) {
                header.classList.add('white');
            } else  {
                header.classList.remove('white');
            }
        }
        //마우스오버, 마우스 아웃 이벤트로 헤더 서브 메뉴 있으면 보여주기
        header.addEventListener('mouseover', overWork);
        header.addEventListener('mouseout', outWork);

        var openedMenu;
        
        //마우스 오버 시 white 클래스 추가 및 하위 ul 존재 시 보여주기
        function overWork(e) {
            header.classList.add('white');
            if(e.target.tagName !== 'A') {return}
            var subMenu = e.target.parentElement.querySelector('.list_sub_gnb');
            if(subMenu === undefined || subMenu === null){return}
            else{
                subMenu.style.display = 'block';
                setTimeout(function(){subMenu.style.height = '60px';}, 20);
                //display:block과 height 값 적용 시점이 거의 같아 아직 display:none 상태로 인식하여 애니메이션 안됨. 
                //셋타임아웃으로 display:block이 적용된 후 시행되도록 시간차룰 준다.
            }
            openedMenu = subMenu;
        }
        //마우스 아웃 시 white 클래스 삭제
        function outWork(e) {
            if(openedMenu === undefined) {
                header.classList.remove('white'); 
                return;
            }
            if (!checkInIt(openedMenu, e.relatedTarget)) {
                header.classList.remove('white');
                openedMenu.style.display = 'none';
                openedMenu.style.height = '0';
            }

            //마우스가 열린 메뉴 안에 있는지 확인한다.
            function checkInIt(targetSub, endPoint) {
                while(targetSub.nodeName !== "HTML") {
                    if(targetSub === endPoint) {return true;}
                    if(endPoint === null){return;}
                    endPoint = endPoint.parentNode;
                }
                return false;
            }
        }
    }

    function footerWork() {
        //관련사이트, 언어 선택 영역의 각 a 버튼 클릭 시 하위 ul 리스트에 opened 클래스 추가하여 토글
        var footer = document.querySelector('#footer');
        var btnToggles = footer.querySelectorAll('.btn_toggle');
        var openedMenu;

        for(i=0; i < btnToggles.length; i++) {
            btnToggles[i].addEventListener('click', toggleWork);
        }

        function toggleWork(e) {
            e.preventDefault();
            if(e.target.tagName === 'A'){
                var toggleTarget = e.target.parentNode.querySelector('.list_link');
            } else if(e.target.tagName === 'SPAN') { 
                var toggleTarget = e.target.parentNode.parentNode.querySelector('.list_link');
            } 

            //다른 ul 열릴 시, 기존 열린 ul(openedMenu)은 닫기              
            if(openedMenu && openedMenu !== toggleTarget) {
                openedMenu.classList.remove('opened');
            }
            if(toggleTarget.classList.contains('opened')){
                toggleTarget.classList.remove('opened');
            } else {                    
                toggleTarget.classList.add('opened');
                openedMenu = toggleTarget;
            }
        }
    }
}