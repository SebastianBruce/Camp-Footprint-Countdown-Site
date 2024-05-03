// Set the date we're counting down to
var countDownDate = new Date("June 10, 2024").getTime();
var countDownDate2 = new Date("August 12, 2024").getTime();

function countdown1() {
    // Initialize variables to hold the previous values
    var prevDays1 = -1,
    prevDays2 = -1,
    prevDays3 = -1,
    prevHours1 = -1,
    prevHours2 = -1,
    prevMinutes1 = -1,
    prevMinutes2 = -1,
    prevSeconds1 = -1,
    prevSeconds2 = -1;

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Convert days to a string with 3 digits if necessary
        var daysStr = days.toString().padStart(3, '0');

        // Animate days if they have changed
        var days1 = parseInt(daysStr.charAt(0));
        var days2 = parseInt(daysStr.charAt(1));
        var days3 = parseInt(daysStr.charAt(2));
    
        if (days1 !== prevDays1) {
            animateFigure($('.days-1'), days1);
            prevDays1 = days1;
        }
        if (days2 !== prevDays2) {
            animateFigure($('.days-2'), days2);
            prevDays2 = days2;
        }
        if (days3 !== prevDays3) {
            animateFigure($('.days-3'), days3);
            prevDays3 = days3;
        }

        // Animate hours if they have changed
        var hours1 = Math.floor(hours / 10);
        var hours2 = hours % 10;
        if (hours1 !== prevHours1) {
            animateFigure($('.hours-1'), hours1);
            prevHours1 = hours1;
        }
        if (hours2 !== prevHours2) {
            animateFigure($('.hours-2'), hours2);
            prevHours2 = hours2;
        }

        // Animate minutes if they have changed
        var minutes1 = Math.floor(minutes / 10);
        var minutes2 = minutes % 10;
        if (minutes1 !== prevMinutes1) {
            animateFigure($('.min-1'), minutes1);
            prevMinutes1 = minutes1;
        }
        if (minutes2 !== prevMinutes2) {
            animateFigure($('.min-2'), minutes2);
            prevMinutes2 = minutes2;
        }

        // Animate seconds if they have changed
        var seconds1 = Math.floor(seconds / 10);
        var seconds2 = seconds % 10;
        if (seconds1 !== prevSeconds1) {
            animateFigure($('.sec-1'), seconds1);
            prevSeconds1 = seconds1;
        }
        if (seconds2 !== prevSeconds2) {
            animateFigure($('.sec-2'), seconds2);
            prevSeconds2 = seconds2;
        }
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
    }, 1000);
}

function countdown2() {
    // Initialize variables to hold the previous values
    var prevDays1 = -1,
    prevDays2 = -1,
    prevDays3 = -1,
    prevHours1 = -1,
    prevHours2 = -1,
    prevMinutes1 = -1,
    prevMinutes2 = -1,
    prevSeconds1 = -1,
    prevSeconds2 = -1;

    // Update the count down every 1 second
    var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = countDownDate2 - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // Convert days to a string with 3 digits if necessary
        var daysStr = days.toString().padStart(3, '0');
    
        // Animate days if they have changed
        var days1 = parseInt(daysStr.charAt(0));
        var days2 = parseInt(daysStr.charAt(1));
        var days3 = parseInt(daysStr.charAt(2));
    
        if (days1 !== prevDays1) {
            animateFigure($('.2days-1'), days1);
            prevDays1 = days1;
        }
        if (days2 !== prevDays2) {
            animateFigure($('.2days-2'), days2);
            prevDays2 = days2;
        }
        if (days3 !== prevDays3) {
            animateFigure($('.2days-3'), days3);
            prevDays3 = days3;
        }
    
        // Animate hours if they have changed
        var hours1 = Math.floor(hours / 10);
        var hours2 = hours % 10;
        if (hours1 !== prevHours1) {
            animateFigure($('.2hours-1'), hours1);
            prevHours1 = hours1;
        }
        if (hours2 !== prevHours2) {
            animateFigure($('.2hours-2'), hours2);
            prevHours2 = hours2;
        }
    
        // Animate minutes if they have changed
        var minutes1 = Math.floor(minutes / 10);
        var minutes2 = minutes % 10;
        if (minutes1 !== prevMinutes1) {
            animateFigure($('.2min-1'), minutes1);
            prevMinutes1 = minutes1;
        }
        if (minutes2 !== prevMinutes2) {
            animateFigure($('.2min-2'), minutes2);
            prevMinutes2 = minutes2;
        }
    
        // Animate seconds if they have changed
        var seconds1 = Math.floor(seconds / 10);
        var seconds2 = seconds % 10;
        if (seconds1 !== prevSeconds1) {
            animateFigure($('.2sec-1'), seconds1);
            prevSeconds1 = seconds1;
        }
        if (seconds2 !== prevSeconds2) {
            animateFigure($('.2sec-2'), seconds2);
            prevSeconds2 = seconds2;
        }
        
        // If the count down is over, write some text 
        if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

function animateFigure($el, value) {
    var $top = $el.find('.top'),
        $bottom = $el.find('.bottom'),
        $back_top = $el.find('.top-back'),
        $back_bottom = $el.find('.bottom-back');

    // Before we begin, change the back value
    $back_top.find('span').html(value);
    $back_bottom.find('span').html(value);

    // Then animate
    TweenMax.to($top, 0.8, {
        rotationX: '-180deg',
        transformPerspective: 300,
        ease: Quart.easeOut,
        onComplete: function() {
            $top.html(value);
            $bottom.html(value);
            TweenMax.set($top, { rotationX: 0 });
        }
    });

    TweenMax.to($back_top, 0.8, {
        rotationX: 0,
        transformPerspective: 300,
        ease: Quart.easeOut,
        clearProps: 'all'
    });
}

countdown1();
countdown2();