



// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyA13XUmfMBdQRESumXGirRcCtDLLiMmNuk",
//     authDomain: "hunter-project-ad36a.firebaseapp.com",
//     databaseURL: "https://hunter-project-ad36a.firebaseio.com",
//     projectId: "hunter-project-ad36a",
//     storageBucket: "hunter-project-ad36a.appspot.com",
//     messagingSenderId: "985231274110"
//   };
//   firebase.initializeApp(config);







//   $(document).ready(function(){

//     var chosenHero
//     var chosenEnemy
//     var charDisplay
//     // var battleArr = []
//     // Bools
//     var isHeroChosen
//     var isEnemyChose
//     var isEnemyAlive
//     var isHeroAlive
//     var battleDisplay

   


// function initGame () {
// isHeroChosen = false
// isEnemyChosen = false

// // Display  Characters
// for ( var i = 0 ; i < charArr.length ; i++) {
//     var num = Math.floor(12 / charArr.length)
//     var num = 12 / charArr.length
//     // This will give us 6 columns of 2 since we have 6 characters. 12 / 6 = 2.
//     var charDisplay = $("<div class='myChar col-md-"+num+"' value='"+i+"' data-image='"+charArr[i].image+"'><img src='"+charArr[i].image+"' style='width:150px;height:150px;'/></div>")
//     $("#characters").append(charDisplay)
    
// }
// }

// // substitute '.image' in charArr[i].image with other attributes to get data 
// // attr and data

// // PICKING CHARACTERS


// $(document).on("click", ".myChar", function() {
// console.log($(this))
// if (isHeroChosen === false){
// $(this).addClass("fader");

// var url = $(this).data("image")

// console.log(url)
// var img1 = $("<img style='width: 415px; height: 415px'>").attr("src", url)
// console.log(img1)
// $("#player-1").append(img1)


// // chosenHero = charArr[$(this).attr("value")]
// // [$(this).attr("data-image")] = $("<div id='gameplay'><img src='+charArr[i].image+'")
// // console.log(chosenHero)
// // $(this).addClass("gameplay")



//     isHeroChosen = true
// }
// // PICKING SECOND CHARACTER
// else if (isEnemyChosen === false && chosenHero != charArr[$(this).attr("value")]) {
//     console.log(chosenEnemy)
//     var url = $(this).data("image")
//     console.log(url)
//     var img2 = $("<img style='width: 415px; height: 415px'>").attr("src", url)
//     console.log(img1)
//     $("#player-2").append(img2)
//     $(this).addClass("fader");
//     isEnemyChosen = true
//     }

// })

// // Name , HP , Strength
//     var charArr = [
//     {
//         name : "Darth-Vader",
//         hp : 50,
//         strength : 85,
//         image : "http://www.iconninja.com/files/258/367/658/darth-vader-icon.png"
//     },
//     {
//         name : "Han-Solo",
//         hp : 50,
//         strength : 65,
//         image : "http://icons.veryicon.com/png/Movie%20%26%20TV/Star%20Wars%20Characters/Han%20Solo%2002.png"
//     },
//     {
//         name : "Darth-Maul",
//         hp : 50,
//         strength : 75,
//         image : "https://78.media.tumblr.com/avatar_11b7c897d944_128.pnj"
//     },
//     {
//         name : "Boba-Fett",
//         hp : 50,
//         strength : 50,
//         image : "https://www.purefandom.com/wp-content/uploads/2017/03/bobafett.jpg"
//     },
//     {
//         name : "Lea",
//         hp : 50,
//         strength : 50,
//         image : "http://pm1.narvii.com/6386/bbdcbcf3bebc0bdf584d1ec8ef808a52c325a29f_128.jpg"
//     },
//     {
//         name : "Luke",
//         hp : 50,
//         strength : 80,
//         image : "http://moziru.com/images/luke-skywalker-clipart-2.png"
//     },
// ]

// // Add random interval that prompts character to say they phrase


// initGame();
// })