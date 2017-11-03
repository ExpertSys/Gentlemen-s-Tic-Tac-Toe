  map = [[" "," "," "],
         [" "," "," "],
         [" "," "," "]];

  var winCombinations = [],
  isXTurn = true;

  taketurn = function(x,y){
     document.getElementById("" + x + y)
    .innerHTML = isXTurn
    ? "<p class = 'x placedx' id = ''>&times;</p>"
    : "<p class = 'o placedo' id = ''>&#79;</p>";
    map[x][y] = isXTurn ? "x" : "o";
    isXTurn = !isXTurn;
    checkWin();
};

  mkP = function (x,y){
    return {x:x,y:y}
  };

  winCombinations=[
    // Horizontal
    [mkP(0,0),mkP(1,0),mkP(2,0)],
    [mkP(0,1),mkP(1,1),mkP(2,1)],
    [mkP(0,2),mkP(1,2),mkP(2,2)],
    // Vertical
    [mkP(0,0),mkP(0,1),mkP(0,2)],
    [mkP(1,0),mkP(1,1),mkP(1,2)],
    [mkP(2,0),mkP(2,1),mkP(2,2)],
    // Diagonal
    [mkP(0,0),mkP(1,1),mkP(2,2)],
    [mkP(2,0),mkP(1,1),mkP(0,2)]
  ];

checkWin = function(){
  for(current in winCombinations){
    var c = winCombinations[current]
    if(map[c[0].x][c[0].y] == "x" && map[c[1].x][c[1].y] == "x" && map[c[2].x][c[2].y] == "x"){
      alert("X wins!");
      var place = document.getElementsByClassName("placedx");

      for (i =0; i < place.length; i++){
        place[i].style.webkitAnimationName = "bg";
        setTimeout(function ()
        {
          place[i].style.webkitAnimationName = "bg";
        }, 0);
    }
  }
    if(map[c[0].x][c[0].y] == "o" && map[c[1].x][c[1].y] == "o" && map[c[2].x][c[2].y] == "o"){
      alert("O wins!");
      var place = document.getElementsByClassName("placedo");

      for (i =0; i < place.length; i++){
        place[i].style.webkitAnimationName = "bg";
        setTimeout(function ()
        {
          place[i].style.webkitAnimationName = "bg";
        }, 0);
    }
    }
  }
}
