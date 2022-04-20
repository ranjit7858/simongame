// looking for what is getting selected
$(document).on('keypress',function(){
  let val = Play();
  console.log(val); 
  if(val === -1)
  {
    $(document).on("keypress",function(){
      Play();
    })
  }
});
function Play(){

  let level = 1;
  // console.log(level);
  for(level; level<= 10 ; level++){
    console.log(level); 
    $("#level-title2").text("Level "+level);
    let success = gameon(level);
    console.log(success === true);
    // if(level === 9)
    // success = false ;
    if(success === true){
    // console.log(level); 
      continue;
    }
    else
    {
    $("#level-title2").text("Game Over Press Any Key To Restart");
    return -1;
    }
  }
  return 1; 
}

function gameon(level){
  let game = gameLogic(level);// what choices had the gamelogic have made 
  // console.log(game); 
  let success = true;
  let player = {};
  for(let i = 0; i<game.length; i++)
  {
    console.log("helo");
    player[i] = players();
  }
  for(let i = 0; i< game.length; i++){
    if(player[i] != game[i])
    {
      success = false;
    }
  }
  return success;
  // record all random clicks in the array and match the sequence of it to that of the player

}
function gameLogic(level){
  let val = {"1": "green",
    "2": "red",
    "3": "yellow",
    "4": "blue"
}
  let lvl = level ; 
  let game = [];
  let i = 0;
  while(lvl--){
  let selection = Math.floor(Math.random() * 4) + 1;
  game[i] = val[selection];
  i++; 
  clicked(val[selection]);
  
  sounds(val[selection]);
  }
  // here comes the logic for the game which will ensure what buttons to choose 
  return game; 
}
function players(){
  let key ; 
  $(".btn").on("click",function(){
    key = this.id;
    console.log(key);
    clicked(key);
  })
  return key;
}

function clicked(key){
  $("."+key).addClass("pressed");
  setTimeout(function(){
  $("."+key).removeClass("pressed")
  },500);
  // key.classList.add("pressed");
  // setTimeout(function(){
  // key.classList.remove("pressed");
  // },400);
}
function sounds(key){
  switch(key){
    case "blue":
      var audio = new Audio('sounds/blue.mp3');
      audio.play();
      break;
    case "green":
      var audio = new Audio('sounds/green.mp3');
      audio.play();
      break;
    case "red":
      var audio = new Audio('sounds/red.mp3');
      audio.play();
      break;
    case "yellow":
      var audio = new Audio('sounds/yellow.mp3');
      audio.play();
      break;
    default: console.log('');
  }
}
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();