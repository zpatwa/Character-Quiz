//Images for the result div
var images = ["https://static.scientificamerican.com/sciam/cache/file/05B142DC-250B-435C-9BB6EBCB28D74A10_source.jpg","https://upload.wikimedia.org/wikipedia/commons/e/e0/Artist%E2%80%99s_conception_of_a_brown_dwarf_like_2MASSJ22282889-431026.jpg","https://wallpaperboat.com/wp-content/uploads/2020/07/13/50067/sun-16.jpg","https://i.pinimg.com/originals/ea/cb/9d/eacb9d775a0f0d577aa7d7d7c2564323.jpg"];


$('.Q2').hide();
$('.result').hide();
$('.retake').hide();
var answer;

//Question 1 functions
$('button').click(function(){
    $('.Q1').hide();
    $('.Q2').show();
    answer = $('.input1').val();
    $('.input1').empty();
    });

//Question 2 functions
var answer2;
$('.b2').click(function(){
 answer2 = $('.input2').val();
    var yes = "Yes";
    var no = "No";
    var big = "Big";
    var small = "Small";
    $('.Q2').hide();
  $('.retake').show();
    $('.result2').show();
    
    //Proxima Centauri
    if(answer === yes && answer2 === small){
        $('.result').show();
        $('.result2').append("You are: Proxima Centauri!");
    $('.result').append("<img src=" + images[0] + ">");
    }
    
    //Brown Dwarf
    else if(answer === no && answer2 === small){
        $('.result').show();
        $('.result2').append("You are: Brown Dwarf!");
$('.result').append("<img src=" + images[1] + ">");
    }
    
    //Sun
    else if(answer === yes && answer2 === big){
        $('.result').show();
        $('.result2').append("You are: The Sun!");
    $('.result').append("<img src=" + images[2] + ">");
    } 
    
    //Arcturus
    else if(answer === no && answer2 === big){
        $('.result').show();
        $('.result2').append("You are: Arcturus!");
    $('.result').append("<img src=" + images[3] + ">");
    } 
    //If a proper answer isn't given
    else{
        $('.result').show();
        $('.result2').css("color", "red");
    $('.result2').append("Oops! Please enter the information correctly!");
        
        $('.input2').empty();
        
    }
    
});
//Retake Quiz
$('.b3').click(function(){
    //Clear Input Fields
    $('.input1').val("");
    $('.input2').val("");
    //Clear result H2 tag
    $('.result2').empty();
    //Hide the divs
$('.Q2').hide();
    $('.result').hide();
    $('.retake').hide();
    $('.result2').hide();
    //Reset image
    $('.result').empty();
    //Show the first question
    $('.Q1').show();
});
    

//counter
    var counter = 0;
    $('.b2').click(function(){
        counter = counter + 1;
    $('p').text("The quiz was taken " + counter + " times");
    });