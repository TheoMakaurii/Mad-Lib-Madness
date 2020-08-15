

var userInputs =
{
    w1: "",
    w2: "",
    w3: "",
    w4: "",
    w5: "",
    w6: "",
    w7: "",
    w8: ""
};

var adjectiveArray = [
    "big",
    "bad",
    "sad",
    "happy",
    "lumpy",
    "bumpy",
    "frumpy",
    "small",
    "tall",
    "muscular",
    "smart",
    "fluffy",
    "soft",
    "bold",
    "moldy",
    "dark",
    "stark",
    "crazy",
    "lazy",
    "weary",
    "dreary",
    "leary"
]

var randomAdjectiveA = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
var randomAdjectiveB = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
var randomAdjectiveC = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];

var sportArray = [
    "fencing",
    "football",
    "basketball",
    "soccer",
    "crew",
    "wrestling",
    "curling",
    "water polo",
    "swim",
    "billiards",
    "bumper pool",
    "chess",
    "boxing",
    "quidditch",
    "speed skating"
]

var randomSport = sportArray[Math.floor(Math.random() * sportArray.length)];

var pluralNounArray = [
    "cats",
    "cars",
    "plants",
    "mice",
    "trees",
    "dogs",
    "hogs",
    "ants",
    "spiders",
    "flies",
    "butterflies",
    "kangaroos",
    "bunnies",
    "rabbits",
    "hamsters",
    "gerbils",
    "parrots",
    "blue jays"
]

var randomPluralA = pluralNounArray[Math.floor(Math.random() * pluralNounArray.length)];
var randomPluralB = pluralNounArray[Math.floor(Math.random() * pluralNounArray.length)];

function submitInputs() {
    userInputs.w1 = document.getElementById('input1').value;
    userInputs.w2 = document.getElementById('input2').value;
    userInputs.w3 = document.getElementById('input3').value;
    userInputs.w4 = document.getElementById('input4').value;
    userInputs.w5 = document.getElementById('input5').value;
    userInputs.w6 = document.getElementById('input6').value;
    userInputs.w7 = document.getElementById('input7').value;
    userInputs.w8 = document.getElementById('input8').value;



}

var story = `<h2>The Story of Mister <span id=\"output1\"></span> </h2><p>This is the story of Mister <span id= \"repeat1\"></span>. He is <span id= \"output2\"></span> and <span id= \"output3\"></span> but not at all <span id=\"output4\"></span>. Mister <span id=\"repeat2\"></span> isn't afraid of <span id=\"output5\"></span> but he is afraid of <span id=\"output6\"></span>. He doesn't know where fear comes from, but he knows enough to respect it. In high school Mister <span id= \"repeat3\"></span> was the captain of his <span id=\"output7\"></span> team and in college he failed all of his classes. A lot of times, despite our best efforts we seem to fail at everything we try, but other times we succeed without even trying. 'Life is <span id = \"output8\"> </span> that way', says Mister <span id=\"repeat4\"> </span>. I hope you enjoyed the story of Mister <span id= \"repeat5\"></span> and I hope you come back again soon!</p>`;


function createStory() {

    submitInputs();




    document.getElementById('starter').innerHTML = story;



    document.getElementById('output1').innerHTML = userInputs.w1;
    document.getElementById('output2').innerHTML = userInputs.w2;
    document.getElementById('output3').innerHTML = userInputs.w3;
    document.getElementById('output4').innerHTML = userInputs.w4;
    document.getElementById('output5').innerHTML = userInputs.w5;
    document.getElementById('output6').innerHTML = userInputs.w6;
    document.getElementById('output7').innerHTML = userInputs.w7;
    document.getElementById('output8').innerHTML = userInputs.w8;
    document.getElementById('repeat1').innerHTML = document.getElementById('output1').innerHTML;
    document.getElementById('repeat2').innerHTML = document.getElementById('output1').innerHTML;
    document.getElementById('repeat3').innerHTML = document.getElementById('output1').innerHTML;
    document.getElementById('repeat4').innerHTML = document.getElementById('output1').innerHTML;
    document.getElementById('repeat5').innerHTML = document.getElementById('output1').innerHTML;


    if (userInputs.w1 == "") {

        document.getElementById('output1').innerHTML = "Jenkins";
        document.getElementById('repeat1').innerHTML = document.getElementById('output1').innerHTML;
        document.getElementById('repeat2').innerHTML = document.getElementById('output1').innerHTML;
        document.getElementById('repeat3').innerHTML = document.getElementById('output1').innerHTML;
        document.getElementById('repeat4').innerHTML = document.getElementById('output1').innerHTML;
        document.getElementById('repeat5').innerHTML = document.getElementById('output1').innerHTML;
    }

    if (userInputs.w2 == "") {

        document.getElementById('output2').innerHTML = randomAdjectiveA;

    }


    if (userInputs.w3 == "") {

        document.getElementById('output3').innerHTML = randomAdjectiveB;
    }

    if (userInputs.w4 == "") {
        document.getElementById('output4').innerHTML = randomAdjectiveC;

    }

    if (userInputs.w5 == "") {

        document.getElementById('output5').innerHTML = randomPluralA;
    }

    if (userInputs.w6 == "") {

        document.getElementById('output6').innerHTML = randomPluralB;
    }

    if (userInputs.w7 == "") {

        document.getElementById('output7').innerHTML = randomSport;
    }

    if (userInputs.w8 == "") {

        document.getElementById('output8').innerHTML = "purple";
    }


}

var create = document.getElementById("create");
create.addEventListener("click", createStory);



function resetStory() {

    document.getElementById('starter').innerHTML = "HAVE FUN!"
    document.getElementById('input1').value = ""
    document.getElementById('input2').value = ""
    document.getElementById('input3').value = ""
    document.getElementById('input4').value = ""
    document.getElementById('input5').value = ""
    document.getElementById('input6').value = ""
    document.getElementById('input7').value = ""
    document.getElementById('input8').value = ""


    randomAdjectiveA = ""
    randomAdjectiveB = ""
    randomAdjectiveC = ""
    randomPluralA = ""
    randomPluralB = ""
    randomSport = ""

    randomAdjectiveA = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
    randomAdjectiveB = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
    randomAdjectiveC = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
    randomPluralA = pluralNounArray[Math.floor(Math.random() * pluralNounArray.length)];
    randomPluralB = pluralNounArray[Math.floor(Math.random() * pluralNounArray.length)];
    randomSport = sportArray[Math.floor(Math.random() * sportArray.length)];
}

var reset = document.getElementById('reset');
reset.addEventListener("click", resetStory);



var autoFill = document.getElementById('autoFill');
autoFill.addEventListener("click", createStory);
