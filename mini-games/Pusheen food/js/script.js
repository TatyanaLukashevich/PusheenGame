$(function() {

    game.settings(3000, 60);
    game.start();

    var i = 2;
    secondsGame = setInterval(function () {
        $('#seconds').text(i);

        if (i==1) {
            clearInterval(secondsGame);
        }

        i--;
    }, 1000);

    $('.picture').click(function() {
        if(!game.checkClicked()) {
            var audio_good = new Audio('sound/good.mp3');
            var isContain = false;
            var $this = $(this);

            $this.css({"opacity": "1"});
            clickedCat = $this.attr("alt");

            for (var img = 0; img < user_food[clickedCat].length; img++) {
                if (user_food[clickedCat][img] == food[numberImg]) {
                    isContain = true;
                }
            }
            if (isContain) {
                counter = $('#counter');
                score = +counter.text() + 15;
                counter.text(score);
                audio_good.play();
                return true;
            }
            else {
                game.lostLife();
                return false;
            }

            clickedCat = undefined;
        }
    });

});

game = {
    settings: function (_timeOut, _timeOutStep) {
        timeOut = _timeOut || 3000;
        timeOutStep = _timeOutStep || 30;

        //may be better
        food = [];
        food[0] = 'images/food/burger2.png';
        food[1] = "images/food/meat.png";
        food[2] = "images/food/pizza.png";
        food[3] = "images/food/cake.png";
        food[4] = "images/food/pizza2.png";
        food[5] = "images/food/chicken-meat.png";

        user_food = {
            "meatCat": [food[1], food[5]],
            "burgerCat": [food[0]],
            "pizzaCat": [food[2], food[4]],
            "cakeCat": [food[3]]
        };

        score = 0;
        countLife = $('.health div > img').length;
        show = false;
    },

    start: function (timer) {
        time = timer || timeOut;
        speed = setTimeout(game.randomFood, time);
    },

    stop: function () {
        clearTimeout(speed);
    },

    randomFood: function () {
        if (countLife > 0) {
            game.start(timeOut);
            numberImg = random(0, 6);
            $('#image-food').html('<img src="' + food[numberImg] + ' ">').find("img").stop().fadeIn(200);
            if (score < 300) {
                timeOut -= timeOutStep;
            }

            if (show && !game.checkClicked()) {
                game.lostLife();
            }
            $('.picture').css({"opacity":"0.8"});
            show = true;
        }
    },

    checkClicked: function() {
        var clicked = false;
        $('.picture').each(function(){
            if ($(this).css('opacity') == 1) {
                clicked =  true;
            }
        });
        return clicked;
    },

    lostLife: function () {
        var sad_melody = new Audio('sound/kitten-meow.mp3');
        var crash_life = new Audio('sound/crash-health.mp3');

        $('.health img:last').remove();
        countLife--;

        if (countLife == 0) {
            game.stop();
            $('#image-food').html('<h1>Game over</h1><br><img src="images/imgs/deadcat.png" style="display: initial; margin-top: -35%; width: 140px;">');
            sad_melody.play();
        }
        else {
            crash_life.play();
        }
    }
};


function random(min, max) {
    return Math.floor((Math.random() * max) + min);
}
