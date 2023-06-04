let currentIndex = 0;
// $()
let selectedIndex = 2;
let maxIndex = 3;
let profileWidth = 110;
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

    function moveProfileRight() {
        decrementIndex();
        console.log("Animate Right");

        $('.profile').animate({
                right: "-=" + 110,
            }, 1000, "swing",
            function() {
                console.log($(this).index());
                $(this).css("right", 160);


                if ($(this).index() === maxIndex + 3) {
                    removeElement($(this));
                }

                if ($(this).index() === maxIndex) {
                    addStart($(this));
                }


            });
    }

    async function removeElement($jqueryObject) {
        // await sleep(1000);
        $jqueryObject.remove();
    }

    function addStart($profile) {
        $newProfile = $profile.clone();
        $newProfile.css("right", 160);
        $(".profile-select").prepend($newProfile);
    }

    function addEnd($profile) {
        $newProfile = $profile.clone();
        $newProfile.css("right", 50);
        $(".profile-select").append($newProfile);
    }

    function moveProfileLeft() {
        // setInterval();
        // currentIndex++;
        incrementIndex();

        let deleted = true;

        console.log("Animate Left");
        $('.profile').animate({
                right: "+=" + 110,
            }, 1000, "swing",
            function() {
                $('.profile').css("right", 160);

                console.log(currentIndex);
                // console.log($(this).index() === 3);

                if ($(this).index() === 0 && deleted) {
                    deleted = false;
                    removeElement($(this));
                }

                if ($(this).index() === 1) {
                    addEnd($(this));
                }


            });
    }

    function adjustProfile() {

    }
});