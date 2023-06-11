let currentIndex = 0;
// $()
let selectedIndex = 2;
let maxIndex = 3;
let profileWidth = 110;
$(document).ready(function() {
    console.log("ready!");
    $('.profile').on('click', function() {
        // $(this).toggleClass("moveRight");
        // moveProfile();

    })


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
                            width: defaultHeight * selectedMultiplier,
                            height: defaultWidth * selectedMultiplier,
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
        let shouldDelete = true;

        $('.profile a img').animate({
            width: defaultWidth,
            height: defaultHeight,
        }, 500, "swing",
        function() {

            if (triggerAnimate){
                triggerAnimate = false;
                $('.profile').animate({
                    right: "+=" + profileWidth + "px",
                }, 500, "swing",
                function() {
                    // console.log($(this).index());
                    $(this).css("right", starterRight);
                    
                    if ($(this).index() === (selectedIndex + 1)){

                        $(this).children("a").children("img").animate({
                            width: defaultWidth * selectedMultiplier,
                            height: defaultHeight * selectedMultiplier,
                        }, 500, "swing",
                        function() {
                            disableClick = false;
                            console.log(disableClick);
                            // triggerAnimate = true;
                        });
                    }
    
                    if ($(this).index() === 0 && shouldDelete) {
                        shouldDelete = false;
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
        // setInterval();
        // currentIndex--;
        decrementIndex();
        console.log("Animate Right");
        $('.profile').animate({
            // opacity: ,
            right: "+=" + 110,
            // order: index + 1,
            // left: "+=200",
            // transform: 'translate(100% , 0) skew(20 deg)',
        }, 0);
        $('.profile').css("right", "-=110");
        for (let index = 0; index <= maxIndex; index++) {
            // addStart($('.profile[data-id="' + index + '"]').clone());
            // $("profile-select").prepend("AAA");
            if ((currentIndex - index) == 0) {
                console.log(index);
                // addStart($('.profile[data-id="' + index + '"]').clone());
                // removeElement($('.profile[data-id="' + index + '"]'));

            }
            $('.profile[data-id="' + index + '"]').animate({
                    // opacity: ,
                    right: "-=" + 110,
                    // order: index + 1,
                    // left: "+=200",
                    // transform: 'translate(100% , 0) skew(20 deg)',
                }, 500,
                function() {
                    // console.log((currentIndex + selectedIndex) % (maxIndex + 1));
                    if ((currentIndex - index) == 0) {
                        // addStart($('.profile[data-id="' + index + '"]').clone());
                        removeElement($(this));
                    }
                    // const sleep = ms => new Promise(r => setTimeout(r, 500));
                    // $(this).remove();
                    // removeElement($(this));
                    // Animation complete.
                    // console.log("Animate done");
                    // console.log(($('.profile[data-id="' + index + '"]').width() + 10));

                });
        }
    }

    async function removeElement($jqueryObject) {
        await sleep(1000);
        $jqueryObject.remove();
    }

    function addStart($profile) {
        $profile.css("right", 50);
        $(".profile-select").prepend($profile);
        console.log($profile);
        // $(".profile-select").prepend("<p>asd</p>");
        // $(".profile-select").append($profile);
        // $(".profile-select").append($profile);
    }

    function addEnd($profile) {
        $profile.css("right", (profileWidth * maxIndex) - 50);
        $(".profile-select").append($profile);
        console.log($profile);
        // $(".profile-select").prepend("<p>asd</p>");
        // $(".profile-select").append($profile);
        // $(".profile-select").append($profile);
    }

    function moveProfileLeft() {
        // setInterval();
        // currentIndex++;
        incrementIndex();

        console.log("Animate Left");
        // $('.profile').animate({
        //     // opacity: 0.95,
        //     // right: "+=200",
        //     right: "+=" + $('.profile[data-id="' + index + '"]').width(),

        //     // transform: 'translate(100% , 0) skew(20 deg)',
        // }, 500, function() {
        //     // Animation complete.
        //     console.log("Animate done");
        // });

        for (let index = 0; index <= maxIndex; index++) {
            $('.profile[data-id="' + index + '"]').animate({
                    // opacity: ,
                    right: "+=" + 110,
                    // right: "+=" + ($('.profile[data-id="' + index + '"]').width() + 10),
                    // order: index + 1,
                    // left: "+=200",
                    // transform: 'translate(100% , 0) skew(20 deg)',
                }, 500,
                function() {
                    // Animation complete.
                    // console.log(($('.profile[data-id="' + index + '"]').width() + 10));
                });
        }
    }

    function adjustProfile() {

    }
});