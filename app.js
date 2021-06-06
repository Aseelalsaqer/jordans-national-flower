var FirstName = "My"
var LastName = "  Favourit Flower"
var FavFlower = "  is Black Iirs"
var X = FirstName + LastName + FavFlower
console.log(X)

function welcoming() {
    alert('Contact us for more information')

    var FavouritFlower = prompt("What is your favourit flower?")

    if (FavouritFlower == 'Black Iris') {
        document.write('<div>' + 'You are in the right place' + "</div>")
    }
}
var flowernumber = prompt("Guess How many kinds of flowers is in the world?")

while (flowernumber != 30000) {
    flowernumber = prompt("Guess How many kinds of flowers is in the world")
}

function printimg() {

    var flowerrating = prompt("On a scale of 10 , how mush do you like Flowers?")
    for (var i = 0; i < flowerrating; i++) {
        document.write("<img src='rose.jpg' alt='black rose' width='200' height='200'>")
    }
}
welcoming();

printimg();
