let currentIndex = 2;
const selectedIndex = 2;
const maxIndex = 5;
const profileWidth = 110;
const starterRight = 160;
const defaultWidth = 100;
const defaultHeight = 200;
const selectedMultiplier = 1.5;
const BG_IMAGES = ['img/bg/jumping-jacks.jpg', 'img/bg/morning-walk.jpg', 'img/bg/planks.jpg', 'img/bg/pushUp.png', 'img/bg/yoga.jpg', 'img/bg/squat.jpg']



let disableClick = false;

function getContent(index) {
    console.log(index);
    let mainElement = document.getElementsByTagName("body")[0];
    mainElement.style = `background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BG_IMAGES[index]}); background-size: cover`;

    var contents = document.getElementsByClassName("content");
    for (let i = 0; i <= maxIndex; ++i) {
        contents[i].style = "display: none";
    }

    contents[index].style = "display: flex; color: white; padding: 2em; text-align: justify";
}

// window.onload = getContent;

$(document).ready(function() {
    console.log("ready!");

    // Not Work
    // getContent(selectedIndex);


    // $('.profile').on('click', function() {
    //     // $(this).toggleClass("moveRight");
    //     // moveProfile();

    // })

    callbackProfile();

    function callbackProfile() {
        $('.profile').unbind('click').bind('click', function() {
            // $(this).toggleClass("moveRight");
            // moveProfile();
            // console.log('index is ' + $(this).parent().parent().parent().parent().index());
            // console.log('index is ' + $(this).parent().parent().parent().parent().text());
            console.log("Before");
            console.log("Clicked: " +
                $(this).data("id"));
            // console.log("Selected: " +
            //     selectedIndex)
            // console.log("Current: " + currentIndex)
            // console.log("Total: " + (currentIndex - $(this).data("id")))
            // console.log("Max: " +
            //     maxIndex)
            // console.log("Total: " + ((selectedIndex + currentIndex) % (maxIndex)))
            // console.log((($(this).data("id")) !== ((selectedIndex + currentIndex) % (maxIndex))));

            let id = $(this).data("id");
            let current = ((selectedIndex + currentIndex) % (maxIndex + 1));
            console.log(id + " vs " + current)
            if ((id + 0) !== (current + 0)) {

                if ((id > current && id < current + (maxIndex / 2)) ||
                    (id >= (current + 1) % (maxIndex + 1) && id < ((current + 1) % (maxIndex + 1)) + (maxIndex / 2))) {
                    moveProfileLeft();
                } else {
                    moveProfileRight();
                }
            } else {
                console.log("..")
            }

            // console.log($(this).data("id"));
        })
    }

    // $('#toggleMove').on('click', function() {
    //     // $('.profile').toggleClass("moveRight");
    //     moveProfileRight();
    // })

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
        console.log(currentIndex)
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

    function animateRight() {
        let triggerAnimate = true;
        $('.profile a img').animate({
                width: defaultWidth,
                height: defaultHeight,
            }, 500, "swing",
            function() {
                if (triggerAnimate) {
                    triggerAnimate = false;
                    $('.profile').animate({
                            right: "-=" + profileWidth,
                        }, 500, "swing",
                        function() {
                            // console.log($(this).index());
                            $(this).css("right", starterRight);

                            if ($(this).index() === (selectedIndex)) {

                                $(this).children("a").children("img").animate({
                                        width: defaultWidth * selectedMultiplier,
                                        height: defaultHeight * selectedMultiplier,
                                    }, 500, "swing",
                                    function() {
                                        disableClick = false;
                                        // let workoutSelect = document.getElementsByClassName("workout-select");
                                        let mainElement = document.getElementById("main");
                                        let content = document.getElementsByClassName("content");

                                        // console.log(disableClick);
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

    function animateLeft() {
        let triggerAnimate = true;
        let shouldDelete = true;

        $('.profile a img').animate({
                width: defaultWidth,
                height: defaultHeight,
            }, 500, "swing",
            function() {

                if (triggerAnimate) {
                    triggerAnimate = false;
                    $('.profile').animate({
                            right: "+=" + profileWidth,
                        }, 500, "swing",
                        function() {
                            // console.log($(this).index());
                            $(this).css("right", starterRight);

                            if ($(this).index() === (selectedIndex + 1)) {

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
        if (!disableClick) {
            disableClick = true;
            decrementIndex();
            console.log("Animate Right");
            animateRight();
            getContent(currentIndex);
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
        callbackProfile();
    }

    function addEnd($profile) {
        $newProfile = $profile.clone();
        $newProfile.css("right", starterRight);
        $(".profile-select").append($newProfile);
        callbackProfile();
    }

    // function selectedProfile($profile){
    //     if ($(this).index() === selectedIndex){

    //     }
    // }

    function moveProfileLeft() {
        // setInterval();
        // currentIndex++;
        if (!disableClick) {
            disableClick = true;
            incrementIndex();


            console.log("Animate Left");
            animateLeft();
            getContent(currentIndex);
            // $(".contents")./ content[currentIndex];
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