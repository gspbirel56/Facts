var sportsFacts = ["Phil Kessel is a back to back Stanley Cup champion",
"Jim harbaugh has never won a big ten confernce championship",
"Traditional Soccer balls have 32 panels",
"The NBA didn't add the 3-point line until 1979 where it was callef a \"three-point field goa\"",
"Roger Bannister was the first man to run a mile in less than 4 minutes, but he only held the record for 46 days",
"The longest cricket match took place in 1939 between England and South Africa. After 14 days it ended with a tie",
"It would take 370 parking spaces to cover an ordinary soccer field.",
"The only 2 sports to be played on the moon are Javelin and Golf.",
"Jaromir Jagr is the oldest player in the NHL at 45 years old"];

var techFacts = ["In 1986, Apple launched a clothing line",
"The first cell phone weighed nearly 2 pounds (800 g) and sold for $3,995",
"Google's name came from the mathmetical term Googol, which represents a 1 followed by 100 zeros 💻",
"In the 90s, BackRub was one of the working names for what ultimately became known as Google",
"Steve Jobs came up with many innovation ideas while on acid",
"Doug Engelbart created the very first computer mouse from wood in 1964",
"The first alarm clock ever made could only ring at 4am",
"The .gif file format is supposd to be pronounced \"gif\"",
"In 2012, at least 17 newborn girls were named Siri"];

var animalFacts = ["Turtles can breathe out of their anus",
"Wildebeests take turns sleeping, with some members of the herd looking out for predators during the night",
"At almost 19 feet long, the king cobra is the longest venomous snake in the world 🐍",
"A mole can dig a surface level tunnel at a rate of 18 feet per hour",
"The manatee's closest living animal relative is the elephant",
"Hippos produce their own sunscreen. They secrete a sticky, reddish sweat that scatters light",
"Aardvarks are extremely good diggers thanks to strong arms and spoon-shaped claws",
"Some female species of Tarantulas can live for up to 30 years",
"The worlds largest Tarantula, the Goliath Bird-Eater, can grow up to a foot in diameter",
"Corgis were originally bred for short legs as herding dogs so they could nip at the heels of cattle and sleep",
"The ancient Greek word for butterfly is \"psyche\", which is also the word for \"soul\" 👻"];




var randomFacts = ["Turtles can breathe out of their anus."
,"A human's eyes never grow from the day they were born."
,"Hay gente en los arboles."
,"Me gusta la escuela de Penn State."
,"Penn State Behrend is the best campus in PA."
,"It's 2:03 am and Michigan still sucks"
,"Behrend bois best bois."
,"\"I\" comes before \"e\", except after \"c.\""
,"The best, the best, the best, the best..."
,"We're just two lost souls swimming in a fish bowl, year after year.  Running over the same old ground, how we found the same old fears, I wish you were here."
,"Pink Floyd best Floyd."
,"Turtles never outgrow their shell; rather, their shell outgrows them."
,"This is the best project submission for this challenge.  Hands down."
,"REEEEEEEEEEEEE!"
,"It is presently 1:34 am at the time of typing this sentence."
,"I don't know what I'm doing, but I'm living life."
,"Is this real life, or just fantasy?"
,"1 like = 1 prayer"
,"Help me, I've been forced to type this.  If you don't click f to pay respects, I may never return."
,"Behrend > Main Campus"
,"Programming is the most meaningful part of my life, I cannot wait to live a life of no sleep, only code, counting starting from 0 when grabbing things and having no life."];
/*
var vinElem = document.getElementById('vin');
gm.info.getVehicleConfiguration(function(data) {
  vinElem.innerHTML = gm.info.getVIN();
});
*/


var handler = {};

handler.onKeyClick = function(key)
{
  switch(key)
  {

    /*
    case 'BTN_BACK':
      //to do when button pressed
      var fact = document.getElementById('funfact');
      {
        fact.innerHTML = randomFacts[Math.floor(Math.random() * randomFacts.length)];
        gm.ui.showAlert({
          alertTitle: 'Hey!',
          alertDetail: 'Don/t text and drive!'
        })
      }
      break;
*/
    case 'BTN_PREV':
      //to do when button pressed
      var fact = document.getElementById('funfact');
      {
        fact.innerHTML = techFacts[Math.floor(Math.random() * techFacts.length)];
        gm.voice.startTTS(function(){}, fact.innerHTML);
      }
      break;

    case 'BTN_NEXT':
    //to do when button pressed
      var fact = document.getElementById('funfact');
      {
        fact.innerHTML = animalFacts[Math.floor(Math.random() * animalFacts.length)];
        gm.voice.startTTS(function(){}, fact.innerHTML);
      }
      break;
/*
    case 'BTN_PLAY':
    //to do when button pressed
      var fact = document.getElementById('funfact');
      {
        fact.innerHTML = sportsFacts[Math.floor(Math.random() * sportsFacts.length)];
        gm.voice.startTTS(function(){}, fact.innerHTML);
      }
      break;
*/
    case 'BTN_BACK':
      gm.voice.startTTS(function(){}, 'Shoutout to @GM for sponsoring HackPSU and letting us develop software for their vehicles!');
      break;
  }
}

var btnmanager = gmExt.newHardButtonManager(handler, ['BTN_BACK', 'BTN_PREV', 'BTN_NEXT', 'BTN_PLAY']);







//var id = gm.info.watchButtons(handleButton1, ['BTN_NEXT']);


/*
function handleButton1(btnList) {

  if (btnList.indexOf('BTN_NEXT') >= 0) {
    //button is pressed
    var fact = document.getElementById('funfact');
    {
      fact.innerHTML = facts[Math.floor(Math.random() * facts.length)];
    }
  }  
  else {
    //button is released
    var fact = document.getElementById('funfact');
    {
      fact.innerHTML = facts[Math.floor(Math.random() * facts.length)];
    }
  }  
}
gm.info.clearButtons(id);
*/

//
//
//end changes


/*
var fact = document.getElementById('funfact');
{
  fact.innerHTML = facts[Math.floor(Math.random() * facts.length)];
}
*/
