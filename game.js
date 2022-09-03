var userClickedPattern= [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level  =0;
$("h2").toggle()
var i =0;
$(document).keydown (nextSequence);


function nextSequence(){
    $("h2").hide();

    $("h1").text($("h1").text().replace("Press A Key to Start", level));
    $("h1").text($("h1").text().replace(level, level+1));
    level++;

    var randomNumber = Math.floor(Math.random()*4);
    // משתנה שבעצם מכיל שם של צבע רנדומלי
    var randomChosenColour = buttonColours[randomNumber];
    // הוספה למערך של הצבע הרנדומלי הזה
    gamePattern.push(randomChosenColour);
    // משתנה שמכיל את הכפתור בעל הצבע האקראי שנבחר
    var button1 = $("#" + randomChosenColour);
    //אנימציה לכפתור שנבחר
    $(button1).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
    playSound(randomChosenColour);
    // $(button1).click();
    animatePress(randomChosenColour);
    setTimeout(() => {$("h2").show()}, 400);
    userClickedPattern= [];
    i =0;
}

$(".btn").click (function (event){
console.log(level);
  var userChosenColour =   event.currentTarget.id;
  userClickedPattern.push(userChosenColour);
  if (checkAnswer(level,i)){
    i++;
  }
  else{
    alert("you have failed");
    document. location. reload();

  }


});

function checkAnswer(currentLevel,i){
  if(userClickedPattern [i] == gamePattern[i] && i < gamePattern.length){
    return true;
  }
  else {
    return false;
  }

}










// חלק של אנימציות של הכפתורים ואודיו

function animatePress(currentColour){
  var button_to_add_color = $("#" + currentColour);
  button_to_add_color.addClass("pressed");
  setTimeout(() => {remove_shadow(button_to_add_color)}, 400);
}

function remove_shadow(button_to_add_color){
  button_to_add_color.removeClass("pressed");
}



  $(".btn").on("click", function (event) {
    var userChosenColour =   event.currentTarget.id;
    animatePress(userChosenColour);
    // console.log(userChosenColour);
    playSound(userChosenColour);
    // userClickedPattern.push(userChosenColour);
    });


    function playSound(name){
      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play()
      // $(".btn").on("click", function(){audio.play()});
    }
