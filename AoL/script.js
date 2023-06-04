let currentIndex = 0;
// $()
let maxIndex = 3;
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

    function moveProfileRight() {
        // setInterval();
        console.log("Animate");
        for (let index = 0; index <= maxIndex; index++) {
            $('.profile[data-id="' + index + '"]').animate({
                    // opacity: ,
                    right: "-=" + 110,
                    // order: index + 1,
                    // left: "+=200",
                    // transform: 'translate(100% , 0) skew(20 deg)',
                }, 500,
                function() {
                    // Animation complete.
                    // console.log("Animate done");
                    // console.log(($('.profile[data-id="' + index + '"]').width() + 10));

                });
        }
    }

    function moveProfileLeft() {
        // setInterval();
        console.log("Animate");
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
});