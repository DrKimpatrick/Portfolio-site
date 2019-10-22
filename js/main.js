// MENU

$('#close_menu').on('click', function(){
    $('#close_menu').toggleClass('close__menu__right');
    $('#close_menu').toggleClass('color');
    $('#close_menu i').toggleClass('close__menu__rotate');
    $('#close_menu i').toggleClass('close__menu__color');

    $('#Menu').toggleClass('Menu_remove');
    $('#header__content').toggleClass('header__content__full');
    $('#content').toggleClass('header__content__full');

    $('#logo').toggleClass('opacity');
    $('#nav').toggleClass('opacity');
    $('#social').toggleClass('opacity');
    
});


// MOB MENU


$('#btn_nav').on('click', function(){
    $('#mob_nav').toggleClass('mob_nav_open');
    $('body').toggleClass('overflow_hidden');
    $('.btn_nav span').toggleClass('btn_opacity');
    $(this).toggleClass('btnNavActive');
});

$('#mob_nav .nav a').on('click', function(){
    $('.btn_nav').toggleClass('btnNavActive');
    $('#mob_nav').toggleClass('mob_nav_open');
    $('body').toggleClass('overflow_hidden');
});


// SCROLL TO LINK

$(document).ready(function(){
    $('a[href*="#"]').on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
    return false;
    });
});


// ANIMATION SKILLS

$(document).ready(function(){

    var show = true;
    $(window).on("scroll", function(){

        if(!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $("#about__content").offset().top;

        console.log(w_top + " " + e_top);

        if(w_top >= e_top){

            $(".skillbar").each(function(){
                $(this).find(".skill-bar").animate({
                  width: $(this).attr("data-percent")
                },2000)
            });

            // skills numbers

            var time = 2;
            $('#mySkills').each(function(){
                $('label').each(function(){
                    var
                    i = 1,
                    num = $(this).data('num'),
                    step = 1000 * time / num,
                    that = $(this),
                    int = setInterval(function(){
                        if(i <= num){
                            that.html(i);
                        }
                        else{
                            clearInterval(int);
                        }
                        i++;
                    },step);
                });
            });

            show = false;
        }
    });

});

//Happy Clients


$(document).ready(function(){

    var show = true;
    $(window).on("scroll", function(){

        if(!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $(".services__content .about__title h3").offset().top;

        console.log(w_top + " " + e_top);

        if(w_top >= e_top){

            var time = 2;
            $('#counter').each(function(){
                $('h4').each(function(){
                    var
                    i = 1,
                    num = $(this).data('num'),
                    step = 1000 * time / num,
                    that = $(this),
                    int = setInterval(function(){
                        if(i <= num){
                            that.html(i);
                        }
                        else{
                            clearInterval(int);
                        }
                        i++;
                    },step);
                });
            });

            show = false;
        }
    });

});


// Filter Works


$(document).ready(function(){
    $(".btn_work").on("click", function(){
        var value = $(this).attr("data-filter");
        if(value == "all"){
            $(".filter").show("1000");
        }
        else{
            $(".filter").not("."+value).hide("1000");
            $(".filter").filter("."+value).show("1000");
        } 
    });
    // Add active class
    $("ul .btn_work").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});

// GALLERY POPUP
$(".works__inner").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled: true
    }
});
// GALLERY POPUP END







// FeedBack


$(document).ready(function(){
    $("#owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
    });
});


// SCROLL TOP BUTTON
$(document).ready(function(){
    $(window).on("scroll", function(){

        var w_top = $(window).scrollTop();
        var e_top = $("#about__content").offset().top;
        console.log(w_top + " " + e_top);
        if(w_top >= e_top){
            $(".scrollTop").css("opacity", "1");
        }
        if(w_top <= e_top){
            $(".scrollTop").css("opacity", "0");
        }
    });
});
// SCROLL TOP BUTTON END

// AJAX FORM
$(document).ready(function() {

    $("#btn_submit").on("click", function(){
        var Email = $("#email").val().trim();
        var Name = $("#name").val().trim();
        var text_comment = $("#text_comment").val().trim();
        
        if(Name == ""){
            $("#winError").css("display", "inline-block");
            $("#winError").text("Enter your name");
            $("#name").focus();
            return false;
        }else if(Email == ""){
            $("#winError").css("display", "inline-block");
            $("#winError").text("Enter your email");
            $("#email").focus();
            return false;
        }else if(text_comment == ""){
            $("#winError").css("display", "inline-block");
            $("#winError").text("Enter your message");
            $("#text_comment").focus();
            return false;
        }

        $("#winError").css("display", "none");
        $("#winError").text("");
    });

	//E-mail Ajax Send
	$("form").submit(function() { //Change
        var th = $(this);
		$.ajax({
			type: "POST",
			url: "sendMail.php", //Change
            data: th.serialize(),
            beforeSend: function(){
                $("#btn_submit").prop("disabled", true);
            },
            success: function(){
                $("#btn_submit").prop("disabled", false);
            }
		}).done(function() {
			$("#MessageSent").fadeIn(500);
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
// AJAX FORM END

//MessageSent
$("#SentClose").on("click", function(){
    $("#MessageSent").fadeOut(500);
});
//MessageSent END