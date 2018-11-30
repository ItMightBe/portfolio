window.onload = function() {
    headerWork();
    footerWork();
    
    function headerWork() {
        var html = document.querySelector('html');
        var header = document.querySelector('#header');
        var gnbLis = header.querySelectorAll('#header .list_gnb > li');

        //1. 스크롤 시 클래스 white 추가
        document.addEventListener('scroll', scrollWork) ;
        
        function scrollWork() {
            var now = html.scrollTop;            
            if (now > 0) {
                header.classList.add('white');
            } else  {
                header.classList.remove('white');
            }
        }
        //2. 서브 메뉴 있으면 보여주기
        header.addEventListener('mouseover', overWork);
        header.addEventListener('mouseout', outWork);

        var openedMenu;

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
        //1. footer_content a('.btn_toggle') 클릭 시 하위 ul 리스트에 opened 클래스 추가하여 토글
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