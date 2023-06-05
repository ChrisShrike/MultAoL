let currentIndex = 0;
// $()
let selectedIndex = 2;
let maxIndex = 3;
let profileWidth = 110;
let starterRight = 160;
let defaultWidth = 100;
let defaultHeight = 200;
let selectedMultiplier = 1.5;

let disableClick = 0;
$(document).ready(function() {
    console.log("ready!");
    // $('.profile').on('click', function() {
    //     // $(this).toggleClass("moveRight");
    //     // moveProfile();

    // })


    $('#toggleMove').on('click', function() {
        // $('.profile').toggleClass("moveRight");
        moveProfileRight();
    })

    $('#incrementButton').on('click', function() {
        // $('.profile').toggleClass("moveRight");
        moveProfileRight();
    })

    $('#decrementButton').on('click', function() {
        // $('.profile').toggleClass("moveRight");
        moveProfileLeft();
    })

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function decrementIndex() {
        if (currentIndex <= 0) {
            currentIndex = maxIndex;
        } else {
            currentIndex--;
        }
    }

    function incrementIndex() {
        if (currentIndex >= maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
    }

    function createStartAndEndProfile() {
        $(".profile-select").append($('.profile[data-id="' + 0 + '"]').clone());
        $(".profile-select").prepend($('.profile[data-id="' + maxIndex + '"]').clone());
        // jQuery.data($('.profile'), "blah", "hello");
        // $('.profile').data('position', 'Something');
    }

    createStartAndEndProfile();

    function animateRight(){
        let triggerAnimate = true;
        $('.profile a img').animate({
            width: defaultWidth,
            height: defaultHeight,
        }, 500, "swing",
        function() {

            if (triggerAnimate){
                triggerAnimate = false;
                $('.profile').animate({
                    right: "-=" + profileWidth,
                }, 500, "swing",
                function() {
                    // console.log($(this).index());
                    $(this).css("right", starterRight);
                    
                    if ($(this).index() === (selectedIndex)){

                        $(this).children("a").children("img").animate({
                            width: defaultHeight*selectedMultiplier,
                            height: defaultWidth*selectedMultiplier,
                        }, 500, "swing",
                        function() {
                            disableClick = false;
                            console.log(disableClick);
                            // triggerAnimate = true;
                        });
                    }
    
                    if ($(this).index() === maxIndex + 3) {
                        removeElement($(this));
                    }
    
                    if ($(this).index() === maxIndex) {
                        addStart($(this));
                    }
                    
    
                });
            }
        });
    }

    function animateLeft(){
        let triggerAnimate = true;
        let deleted = true;

        $('.profile a img').animate({
            width: defaultWidth,
            height: defaultHeight,
        }, 500, "swing",
        function() {

            if (triggerAnimate){
                triggerAnimate = false;
                $('.profile').animate({
                    right: "+=" + profileWidth,
                }, 500, "swing",
                function() {
                    // console.log($(this).index());
                    $(this).css("right", starterRight);
                    
                    if ($(this).index() === (selectedIndex + 1)){

                        $(this).children("a").children("img").animate({
                            width: defaultWidth*selectedMultiplier,
                            height: defaultHeight*selectedMultiplier,
                        }, 500, "swing",
                        function() {
                            disableClick = false;
                            console.log(disableClick);
                            // triggerAnimate = true;
                        });
                    }
    
                    if ($(this).index() === 0 && deleted) {
                        deleted = false;
                        removeElement($(this));
                    }
    
                    if ($(this).index() === 1) {
                        addEnd($(this));
                    }
                    
    
                });
            }
        });
    }

    function moveProfileRight() {
        if (!disableClick){
            disableClick = true;
            decrementIndex();
            console.log("Animate Right");
            animateRight();



        }
    }

    async function removeElement($jqueryObject) {
        // await sleep(500);
        $jqueryObject.remove();
    }

    function addStart($profile) {
        $newProfile = $profile.clone();
        $newProfile.css("right", starterRight);
        $(".profile-select").prepend($newProfile);
    }

    function addEnd($profile) {
        $newProfile = $profile.clone();
        $newProfile.css("right", starterRight);
        $(".profile-select").append($newProfile);
    }

    // function selectedProfile($profile){
    //     if ($(this).index() === selectedIndex){

    //     }
    // }

    function moveProfileLeft() {
        // setInterval();
        // currentIndex++;
        if (!disableClick){
            disableClick = true;
            incrementIndex();
    
    
            console.log("Animate Left");
            animateLeft();
            // $('.profile').animate({
            //         right: "+=" + profileWidth,
            //     }, 500, "swing",
            //     function() {
            //         $('.profile').css("right", starterRight);
    
            //         // console.log(currentIndex);
            //         // console.log($(this).index() === 3);
    
            //         if ($(this).index() === 0 && deleted) {
            //             deleted = false;
            //             removeElement($(this));
            //         }
    
            //         if ($(this).index() === 1) {
            //             addEnd($(this));
            //         }
                    
            //         disableClick = false;
    
            //     });
        }

    }

    function adjustProfile() {

    }
});