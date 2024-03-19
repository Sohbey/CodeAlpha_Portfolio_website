$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });



// contact form here

const form = document.querySelector("form");

function sendEmail() {
  const fullName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const msg = document.getElementById("message").value;

  const bodyMsg = `Name: ${fullName} <br> Email: ${email} <br> Subject: ${subject} <br> Message: ${msg}`;

  Email.send({
    SecureToken: "2e21baa9-3fe2-42c3-b5f9-9e2889a3e334",    
    To: "sohbey55@gmail.com",
    From: "sohbey55@gmail.com",
    Subject: subject,
    Body: bodyMsg,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire("Message Sent Successfully!");
    } else {
      console.log(err);
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});

  