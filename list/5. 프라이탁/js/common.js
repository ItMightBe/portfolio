window.onload = function() {
    // imgScrollWork();

    function imgScrollWork() {
        var targetImg = document.querySelector('.item_birth img');
        console.log(targetImg);

        window.addEventListener('scroll', scrollWork);
        function scrollWork(){
            var target = document.querySelector('html');
            var targetLocation = target.scrollTop;
            console.log(targetLocation);

            if(targetLocation < 1300){
                targetImg.style.right = "-1000px"
            }else if (targetLocation >= 1300) {
                targetImg.style.right = "0px"
            }
        }
    }
}