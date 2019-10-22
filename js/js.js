
var aboutScroll = $("#abt").offset().top;
$(window).scroll(function(){
    
var wScrol = $(window).scrollTop();

    if(wScrol > aboutScroll)
        {
    $(".navbar").css("backgroundColor","white")  
            $(".navbar-brand").css("color","rgb(240, 95, 64)")
            $("#btnUp").css("display","block")
        }
    else
        {
    $(".navbar").css("backgroundColor","transparent")        
   $(".navbar-brand").css("color","white")
     $("#btnUp").css("display","none")
        }
})


function up()
{   
    $("html,body").animate({scrollTop:'0'},700);
}


$(".nav-link").click(function()
                    {
    let navLink = $(this).attr("href");
    let navLinkLength = $(navLink).offset().top
$("html,body").animate({scrollTop:navLinkLength},500)
})

