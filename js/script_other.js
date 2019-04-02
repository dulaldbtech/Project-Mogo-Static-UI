// JavaScript Document

// code for accordian


$("#btn1").click(function(){
			
		var x1 = document.getElementById("btn1").innerHTML;
		
        if(x1=="-"){
			document.getElementById("btn1").innerHTML = "+";
			
			}
			
		else{
			document.getElementById("btn1").innerHTML = "-";
			}
		
			$("#content1").slideToggle(function(){});
			$("#content2").slideUp();
			$("#content3").slideUp();
			document.getElementById("btn2").innerHTML = "+";
			document.getElementById("btn3").innerHTML = "+";
		});


 $("#btn2").click(function(){
			
		var x2 = document.getElementById("btn2").innerHTML;
		
        if(x2=="-"){
				document.getElementById("btn2").innerHTML = "+";
				
			}
			
		else{document.getElementById("btn2").innerHTML = "-";}
		
			$("#content2").slideToggle(function(){});
			$("#content1").slideUp();
			$("#content3").slideUp();
			document.getElementById("btn1").innerHTML = "+";
			document.getElementById("btn3").innerHTML = "+";
		
		});
		
		
$("#btn3").click(function(){
			
		var x3 = document.getElementById("btn3").innerHTML;
		
        if(x3=="-"){
			document.getElementById("btn3").innerHTML = "+";
			
			}
			
		else{document.getElementById("btn3").innerHTML = "-";}
		
			$("#content3").slideToggle(function(){});
			$("#content1").slideUp();
			$("#content2").slideUp();
			document.getElementById("btn1").innerHTML = "+";
			document.getElementById("btn2").innerHTML = "+";
		
		});


// code for ease scroll

$(document).ready(function(){
	$('a[href^="#scroll_down"] , a[href="#intro"] ,  a[href="#work"] ,  a[href="#about"] ,  a[href="#contacts"]' ).on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1600,  function () {
	        window.location.hash = target;
	    });
	});
	
});


// code for slider




jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    



// animate numbers 


$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
        $(this).text(Math.ceil(now));
        }
    });
});



// change images automatically 


//var myImage = document.getElementsByClassName("auto_change");
 
var imageArray = ["images/3.png","images/2.png","images/1.png"];
var imageIndex = 0;

function changeImage() {

	//document.getElementsByClassName("auto_change").attr("id","as");
	$('.auto_change').attr('src', imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
	imageIndex = 0;
	}

}

setInterval(changeImage,1500);



// pre loader

jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery("#status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery("#preloader").delay(1000).fadeOut("slow");
})
	

// scroll upside


$('.scrollup').hide();
 $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    }); 

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
	

// disable right click


/*$(document).on("contextmenu",function(e){
		return false;
    });*/
	

// disable keyboard buttons

/*$(document).keydown(function(e){
    e.preventDefault();
  });*/