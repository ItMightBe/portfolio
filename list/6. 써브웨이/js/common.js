window.onload = function() {
    headerWork();
    

    function headerWork() {
        
        //gnb 하위메뉴 클래스 open으로 토글 및 헤더 토글로 높이값 조절 
        var header = document.querySelector('#header');
        var gnb = header.querySelector('#gnb');
        var gnbSubMenu = gnb.querySelectorAll('.list_gnb_2dp');

        gnb.addEventListener('mouseenter', enterWork);
        gnb.addEventListener('mouseleave', outWork);
    
        function enterWork(e) {
            gnbSubMenu.forEach(function(i) {i.classList.add('open');})
            header.classList.add('open');
        }
        function outWork(e) {
            header.classList.remove('open');
            gnbSubMenu.forEach(function(i) {i.classList.remove('open')})
        }
    }

}
