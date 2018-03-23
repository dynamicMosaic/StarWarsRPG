var config = {
    apiKey: "AIzaSyA13XUmfMBdQRESumXGirRcCtDLLiMmNuk",
    authDomain: "hunter-project-ad36a.firebaseapp.com",
    databaseURL: "https://hunter-project-ad36a.firebaseio.com",
    projectId: "hunter-project-ad36a",
    storageBucket: "hunter-project-ad36a.appspot.com",
    messagingSenderId: "985231274110"
};


firebase.initializeApp(config);
var database = firebase.database()
var charsFolder = database.ref('/characters')
var gameplay = database.ref('/gameplay')
// Name , HP , Strength
var charArr = [
{
    name : "Darth-Vader",
    hp : 120,
    strength : 70,
    image : "http://www.iconninja.com/files/258/367/658/darth-vader-icon.png"
},
{
    name : "Han-Solo",
    hp : 80,
    strength : 50,
    image : "http://icons.veryicon.com/png/Movie%20%26%20TV/Star%20Wars%20Characters/Han%20Solo%2002.png"
},
{
    name : "Darth-Maul",
    hp : 100,
    strength : 60,
    image : "https://78.media.tumblr.com/avatar_11b7c897d944_128.pnj"
},
{
    name : "Boba-Fett",
    hp : 75,
    strength : 60,
    image : "https://www.purefandom.com/wp-content/uploads/2017/03/bobafett.jpg"
},
{
    name : "Lea",
    hp : 75,
    strength : 50,
    image : "http://pm1.narvii.com/6386/bbdcbcf3bebc0bdf584d1ec8ef808a52c325a29f_128.jpg"
},
{
    name : "Luke",
    hp : 50,
    strength : 80,
    image : "http://moziru.com/images/luke-skywalker-clipart-2.png"
},
]
// Pushes All Character Obj Array Data to Firebase
for(var i = 0; i < charArr.length; i++) {
      charsFolder.push(charArr[i])
  }
        var chosenHero
        var chosenEnemy
        var battleArr = []
        // Bools
        var isHeroChosen
        var isEnemyChose
        var isEnemyAlive
        var isHeroAlive
       
  
    


function initGame () {
    isHeroChosen = false
    isEnemyChosen = false

    // Display  Characters
    for ( var i = 0 ; i < charArr.length ; i++) {
        var num = Math.floor(12 / charArr.length)
        var num = 12 / charArr.length
        // This will give us 6 columns of 2 since we have 6 characters. 12 / 6 = 2.
        var charDisplay = $("<div class='myChar col-md-"+num+"' value='"+i+"' data-image='"+charArr[i].image+"'><img src='"+charArr[i].image+"' style='width:150px;height:150px;'/></div>")
        $("#characters").append(charDisplay)
        
    }
}


// PICKING CHARACTERS ------------------------------------------------------------

//   ~ Player 1 ~
$(document).on("click", ".myChar", function() {
console.log($(this))
if (isHeroChosen === false){
    $(this).addClass("fader");

//  Below is where I'm stuck!
// Push to firebase below doesn't have obj data, tried to grab obj by index in array but -1 returns for indexOf
    var p1index = charArr.indexOf($(this))
    console.log(p1index)
    gameplay.push(charArr[p1index])
    //image url address stored in variable
    var url = $(this).data("image")
    console.log(url)
    console.log($(this))

// Player 1 Gameplay Display
    var img1 = $("<img style='width: 415px; height: 415px'>").attr("src", url)
    console.log(img1)
    $("#player-1").append(img1)
        isHeroChosen = true
    }
//   ~ Player 2 ~
    else if (isEnemyChosen === false && chosenHero != charArr[$(this).attr("value")]) {
        $(this).addClass("fader");
//  Push to Firebase below but doesn't have obj data
        var p2index = charArr.indexOf($(this))
        console.log(p1index)
        gameplay.push(charArr[p2index])
        var url = $(this).data("image")
        console.log(url)
// Player 2 Gameplay Display
        var img2 = $("<img style='width: 415px; height: 415px'>").attr("src", url)
        $("#player-2").append(img2)
        isEnemyChosen = true
        }

})

initGame();