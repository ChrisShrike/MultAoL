let currentIndex = 0;
const selectedIndex = 2;
const maxIndex = 5;
const profileWidth = 110;
const starterRight = 160;
const defaultWidth = 100;
const defaultHeight = 200;
const selectedMultiplier = 1.5;
const contentaa = [
    `<div class="content jumping-jacks">
    <h1>Jumping Jacks</h1>
    <p> 
        <span class="tab"></span>
        Jumping jacks are a dynamic and effective exercise that engages multiple muscle groups and offers various health
        benefits. Other than a great cardio workout, jumping jacks utilizes the majority of the body which makes it a 
        great full body workout which means that it is a great way to burn calories. Muscles that are trained while 
        doing jumping jacks include the legs, core, shoulders,and arms. Finally, this workout offers a benefit that 
        not a lot of exercises provide which is improved bone density. Because of the jumping part of the exercise, 
        weight beared stress are applied to the bones which will strengthen them which in return could be beneficial
        for later on in life. A set of 10 jumping jacks are recommended for casual exercisers while more intense
        workouts calls for upto a set of 25.
    </p>
</div>`,
    `<div class="content">
    <h1>Morning Walk</h1>
    <p> 
        <span class="tab"></span> 
        A morning walk could act as a low-impact cardiovascular exercise that could both strenghten your heart and
        improve your blood flow. Additionally, adding a morning walk to your routine could reduce risks of unwanted
        conditions such as obesity or heart disease. This exercise also encourages beneficial hormones such as 
        endorphines to be released that could lead to mood boosts and reduced depression. Finally, doing a walk
        every morning also introduces natural light early on in your day that could adjust your internal clock which
        results in improved sleeping. To reap the benefits of morning walks, it is recommended to at the very least
        go on a 30 to 40 minute stroll everyday.
    </p>
</div>`,
    `<div class="content plank">
    <h1>Plank</h1>
    <p> 
        <span class="tab"></span>
        Planking is often times considered one of the most difficult and painful exercise to do. But all the effort
        done to plank is not for naught as planking is a great way to improve and train core muscles and body stability
        Other than looking good, having a strong core indirectly affects risks of injury as well as supporting the back
        and lower body part. Last but not least, doing planks also uses other muscles such as the shoulders and
        hamstring, making it a solid way to stretch those muscles. Planking is not an easy exercise to perform for 
        beginners which is why it is recommended for beginners to start of with 30 seconds of planking and gradually
        increasing to 1 whole minute or even longer. It is good to keep in mind to maintain perfect form for maximum
        results.
    </p>
</div>`,
    `<div class="content push-up">
    <h1>Push Up</h1>
    <p> 
        <span class="tab"></span>
        Push-ups are a versatile bodyweight exercise that primarily targets the muscles of the chest, shoulders, and
        triceps.Training the upper body by doing push ups trains a variety of muscles which includes the pectorial, 
        deltoid, tricep, and core muscles. Push ups also encourages healthy bones as the motion done in the exercise
        provides a mechanical load on the bones. This in return will improve bone density which could be beneficial 
        later on in life as it help reduce the possibility of osteoporosis. Beginners are encouraged to start of with
        2 to 3 sets of 8 push ups while to first practice form. As strength is being build and form being perfected, 
        it is recommended to gradually increase the amount of sets. If later on push ups feels easy, adding extra
        resistance such as weighted vest is suggested. 
    </p>
</div>`,
    `
        <div class="content squat">
                <h1>Squat</h1>
                <p> 
                    <span class="tab"></span>
                    Squats are a compound exercise that primarily targets the lower body muscles, including the quadriceps,
                    hamstrings, glutes, and calves. Training the lower body really helps in building stron legs, hips, and glutes.
                    Squats also help the body release beneficial hormones such as the testosterone which in return helps in muscle
                    growth, fat loss, and general physical well-being. Beginners are recommended to start with 2 to 3 sets of 10
                    to first train proper form. Then it is recommended to gradually increase the ammount of sets with additional
                    weights to improve results while simultaneously training the arm, this way not only will it train our legs but
                    also our arms.
                </p>
            </div>
    `,
    `<div class="content yoga">
    <h1>Yoga</h1>
    <p> 
        <span class="tab"></span>
        Yoga is a holistic practice that combines physical postures, breathing techniques, and meditation to promote
        overall health and well-being unlike your typical exercises. First, yoga promotes flexibility and strength as
        various yoga poses streches a variety of muscles and joints. As every part of the body is utilized, this could
        also lead to improved posture and body allignment. Certain poses even trains balance and stability as they
        require exercisers to stand with one leg or other similar actions of the sort. Finally, the breathing exercises
        that is done in paralel to the physical exercise could lead to better breathing and relaxation. Beginners are
        recommended to do 2 to 3 sessions of yoga sessions every week of 30 to 45 minute sessions. As the body get used
        to yoga, increasing sessions is advised. For more advanced practitioners, having daily yoga sessions is recommended.
    </p>
</div>`
]


let disableClick = false;

function getContent(index) {
    var contents = document.getElementsByClassName("contents");
    contents[0].innerHtml = contentaa[index];
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

                                        // animateContent(content, mainElement, (currentIndex), (currentIndex - 1), "left");

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