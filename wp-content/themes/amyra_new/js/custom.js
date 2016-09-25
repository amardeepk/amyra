// JavaScript Document
$(document).ready(function() {
'use strict';
/*
	$(".various").fancybox({ 
		width	: 800,
		height	: 'auto',
		maxHeight: 400,
		fitToView	: false,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
*/

$(".various").fancybox();
	setTimeout(function(){
		var heightv	=	$('.page-template-campaign-template-php .grid').height();		
		$('.campaign').css('height', heightv+'px');
	}, 600);


	setTimeout(function(){
		$('a').each(function(){
			if($(this).attr('href') === '#'){
				$(this).attr('href', 'javascript:void(0)');
			}
		});
	});
	
	
	$('#submitButton').click(function(){
		
		var searchwidth	=	$('.search-field').width();
		
		$('.search-field').css({
				display: 'inline-block',				
				width: '150',
		});
		setTimeout(function(){
			$('#submitButton').attr('type', 'submit');				
		},100);
	});
	
	
	$('.vision').click(function(){
		$('html, body').animate({
			scrollTop: $('#vision').offset().top-20
		},1000);
	});
	
	$('.ethics').click(function(){
		$('html, body').animate({
			scrollTop: $('#ethics').offset().top-20
		},1000);
	});
	
	/*
	 * Change-Location 
	 */
	 
	 $('#location_id').change(function(){	
		 
		$('#locationid').val($(this).val());		 
		
		if($(this).val() !== ''){
			$('.book_an_app').attr('type', 'submit');
		}else{
			$('.book_an_app').attr('type', 'button');
		}
		$.post($('#locationFrm').attr('action'), $('#locationFrm').serialize(), function(data){
			$('.leftdata').html(data);
		});		
	 });
	 
	 /*
	  * End
	  */
	  
	  
	/*
	 * Doc-Find-Location 
	 */	
	  
	 $('.docfind').change(function(){			
		$('.appoinment').show();
		$('#docloader').show();	
		setTimeout(function(){
			$.post($('#docFindFrm').attr('action'), $('#docFindFrm').serialize(), function(data){
				$('#docloader').hide();
				$('.doclisthere').html(data);
			});		
		}, 800);
		
		/*SECOND*/		
		var attrtitle	=	$(this).attr('name');		
		if(attrtitle === 'doclocation_id'){
			var locationid	=	'doclocation_id='+$(this).val();			
			$.post('http://ec2-54-169-54-155.ap-southeast-1.compute.amazonaws.com/get-specialization/', locationid, function(data2){
				$('#specialization_id').html(data2);
			});	
		}	
	 });
	 
	 
	 /*
	  * End
	  */
	  
	  
	  /*
	   * MUST-SELECT
	   */
		$('.book_an_app').click(function(){
			var locationid = $('#location_id').val();			
			if(locationid == ''){				
				$('#locationMSG').css('display','block');
				setTimeout(function(){
					$('#locationMSG').css('display','none');
				}, 5000);
				return;
			}
		});
	   /*
	    * End
	    */
	  
	  /*
	   * VALIDATION
	   */
	   
	   $.validator.addMethod('captcha',
			function(value) {
				$result = ( parseInt($('#num1').val()) + parseInt($('#num2').val()) == parseInt($('#captcha').val()) ) ;
				$('#spambot').fadeOut('fast');
				return $result;
				//alert("Result is " + $result );
			},
			'Incorrect value, please try again.'
		);
	   
		$('#findCloveFrm').validate({// initialize the plugin                
                rules: {
                    fullname: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    phone_number: {
                        required: true,
                        number: true,
                        minlength:10,
						maxlength:10,
                    },                    
                    appointment_date: {
                        required: true
                    },                                        
                    appointment_time: {
                        required: true
                    },       
                    captcha: {
						required: true,
						captcha: true
					}                                 
                },
                messages:{
					fullname:'Please enter your full name',
					email:'Please enter a valid email address',
					phone_number:'Please enter a valid phone number',
					appointment_date:'Please enter an appointment date',
					appointment_time:'Please enter an appointment time',
					chkCaptcha: {
						required: "* Required"
					}
				},				
                /*errorPlacement: function() {
                    return false;
                },*/
                submitHandler: function(form) { // for demo            
                    $('.loader').show();                    
                    $('.loader').html('Loading.....');                    
                    $.post($('#findCloveFrm').attr('action'), $('#findCloveFrm').serialize(), function() {                                                    
							$('#findCloveResponse').fadeIn(500);
							$('.loader').fadeOut(500);
                            $('#findCloveResponse').html('<div id=app_submit>Your appointment request has been sent successfully. We will get back to you soon. Thanks.</div>');
                            setTimeout(function() {                                
                                $('#findCloveFrm').each(function() {
                                    this.reset();
                                });
                                $('#findCloveResponse').fadeOut(500);                                
                            }, 5000);
                        
                    });
                    return false; // for demo
                }
            });
            
            /*
             * END
             */


	$('.find-a-clinic').click(function(e){		
		$('html, body').animate({
			scrollTop: $('.appoinment').offset().top-20
		},1000);
		e.stopPropagation();
	});

// sticky header js start//
/*
	var navcontent = $('.header-bottom').offset().top;
		$(window).scroll(function(){
		var scrolling = $(window).scrollTop();
		if(scrolling >= navcontent){
		$('.header-bottom').addClass('fix');
		}
		if(scrolling < navcontent){
		$('.header-bottom').removeClass('fix');
		}
	});*/

// sticky header js end//

// accordion management start //

$('#accordion .accordion-toggle').click(function(){
		
		$(".accordion-content:visible").slideUp(400, function(){
			$(this).prev().removeClass('active')
		});
      //Expand or collapse this panel
      $(this).addClass('active').next('.accordion-content:hidden').slideDown();

      //Hide the other panels
      

    });
	
// accordion management end //

	//main slider
	if($('.bxslider').size() > 0){
	$('.bxslider').bxSlider({
	  auto: true,
	  autoControls: false,
	  pager:false,
	  controls: true,
	  speed:2000,
	  pause:6000,
	});
	}
	
//news slider
	$('.newsslider').bxSlider({
	  auto: true,
	  pager:false,
	  mode:'vertical',
	  controls: false,
	  adaptiveHeight: true,
	  
	});


//search box 


//Click event to scroll to top
$('.backtotop_link a').click(function(){
	$('html, body').animate({scrollTop : 0},800);
	return false;
});


//mobile menu sunil
$('.menu_handler').click(function(){
		$('.mainmenu').slideToggle();
	});

$('body').on('click','nav.mainmenu li span', function(){
			$("nav.mainmenu li ul").slideUp();
			$("nav.mainmenu li span").removeClass("open");
			$(this).addClass("open").parent().find("ul:hidden").slideDown();
		});
		
mobileNav();
mmenu();


//mobile menu sunil end
 $(window).resize(function(){
	mobileNav();
	mmenu();
})


//Mobile navigation 
var width;
var height;
function mobileNav(){
	width = $(window).width();
	height = $(window).height();
	if(width <= 1023){
		$('.top_menu_ul').prependTo('.mainmenu');	
	}
	else{
		$('.top_menu_ul').appendTo('.top_menu');	
		$('.mainmenu').attr('style', '');	
		
	}
}


function mmenu(){		
width = $(window).width();
if(width < 1023){
	$("nav.mainmenu li ul").each(function(){
		$(this).parent().find(".plus").slice(0).remove();
		$(this).parent().prepend("<span class='plus'></span>");
	});
	}
}
//resize


//for home map
var homemap_default = $(".appoinmentpad").innerHeight();
$("#map_wrapper").css('height', homemap_default +'px');

 $(".selectbox").on('change', function(){
	setTimeout(function(){
		//var homemap = $(".appoinmentpad").innerHeight();	
		var homemap = $('.container2').innerHeight();
		if(homemap < homemap_default){
			$("#map_wrapper").css('height', _default+'px');
		}else{
			$("#map_wrapper").css('height', homemap +'px');
		}
		
	},600);
 });

});


/*
 * ONLY-NUMBER
 */
 function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
/*
 * End-Here
 */





$('#contactFrm').validate({// initialize the plugin                
	rules: {
		fullname: {
			required: true
		},
		email: {
			required: true,
			email: true
		},
		phone_number: {
			required: true,
			number: true,
			minlength:10,
			maxlength:10,
		},                    
		subject: {
			required: true
		},                                        
		message: {
			required: true
		},                           
	},
	messages:{
		fullname:'Please enter your full name',
		email:'Please enter a valid email address',
		phone_number:'Please enter a valid phone number',
		appointment_date:'Please enter an appointment date',
		appointment_time:'Please enter an appointment time',		
	},				
	/*errorPlacement: function() {
		return false;
	},*/
	submitHandler: function(form) { // for demo            
		$('.contactLoader').show();                    
		$('.contactLoader').html('Loading.....');                    
		$.post($('#contactFrm').attr('action'), $('#contactFrm').serialize(), function() {                                                    
				$('#contactResponse').fadeIn(500);
				$('.contactLoader').fadeOut(500);
				$('#contactResponse').html('<div id=app_submit>Your request has been sent successfully. We will get back to you soon. Thanks.</div>');
				setTimeout(function() {                                
					$('#contactFrm').each(function() {
						this.reset();
					});
					$('#contactResponse').fadeOut(500);                                
				}, 5000);
			
		});
		return false; // for demo
	}
});            
/*
* END
*/
