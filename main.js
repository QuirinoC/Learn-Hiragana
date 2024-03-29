/*

  Juan Carlos Quirino Carrasco
  Learn Hiragana & Katakana

*/
function nonRepeatingRandom() {

}
function listInList(first,full) {
  //This function test if any element of first is in full
  //This flag is if something of first is inside of full
  inFlag = false;
  for (i = 0; i < first.length; i++) {
    if (full.indexOf(first[i]) != -1) {
      inFlag = true;
    }
  
  }
  return inFlag;
}
function removeListInList(first,full) {
  for (i = 0; i < first.length; i++) {
    //This line gets the index of the element to remove
    indx = full.indexOf(first[i]);
    //This removes the element from the list
    full.splice(indx,1);
  }
  //this is a new list and needs to be implemented as 
  //oldie = removeListInList(first,oldie);
  return full;
}
function updateOptions (workingCharacters,numberOfOptions) {
  //This function takes 5 random characters from the workingCharacters the user chosed
  var newList = [];
  var indexList = [];
  var characterList = [];
  if (workingCharacters.length >= 5) {
    while (newList.length != 5 && workingCharacters.length != 0) {
      //Takes 5 random numbers in the range of the number of workingCharacters
      randomNumber = Math.floor(Math.random() * workingCharacters.length);
      if (newList.indexOf(randomNumber) == -1) {
        newList.push(randomNumber);
      }
    } 
  } 
  else {
    numberOfOptions = workingCharacters.length;
    while (newList.length != workingCharacters.length && workingCharacters.length != 0) {
      //Takes 5 random numbers in the range of the number of workingCharacters
      randomNumber = Math.floor(Math.random() * workingCharacters.length);
      if (newList.indexOf(randomNumber) == -1) {
        newList.push(randomNumber);
      }
    } 
  }
  
  for (i = 0; i < newList.length; i++) {
    characterList.push(workingCharacters[newList[i]]);
  }
  //console.log(characterList);
  for (i = 0; i < 5; i++) {
    currentButton = ("#option" + String(i));
      $(currentButton).hide();
  }
    for (i = 0; i < numberOfOptions; i++) {
      currentButton = ("#option" + String(i));
      $(currentButton)[0].innerHTML = characterList[i];
      $(currentButton).show();
    }
  var randomCharacterToShow = Math.floor(Math.random() * numberOfOptions);
  
  currentChar = characterList[randomCharacterToShow]; 
  $("#character").attr('src',currentAlphabet+"_chars/"+currentChar+".png");
  return currentChar;
}
function main() {
  //$("#current_char").hide();
  $("#chart").hide();
    var a = [
      "a","i","u","e","o"
    ];
    var ka = [
      "ka","ki","ku","ke","ko"
    ];
    var sa = [
      "sa","shi","su","se","so"
    ];
    var ta = [
      "ta","chi","tsu","te","to"
    ];
    var na = [
      "na","ni","nu","ne","no"
    ];
    var ha = [
      "ha","hi","fu","he","ho"
    ];
    var ma = [
      "ma","mi","mu","me","mo"
    ];
    var ya = [
      "ya","yu","yo"
    ];
    var ra = [
      "ra","ri","ru","re","ro"
    ];
    var wa = [
      "wa","wo"
    ];
    var n = [
      "n"
    ];
  var selectedButtons = 0;
  var characters = [];
  currentAlphabet = "hiragana";
  //currentChar = "a";
  
  $("#current_char").hide();
  $("#buttons").hide();
  
  /*
  $("#noSelection").hide();
  */
  //This is called whenever a button with the chars subclass is clicked
  $(".chars").click(function (){
    
    //The eval works for having the variable name instead of a string, eval(a) == contnents in a not
    //a itself
    charsToAdd = eval(this.innerHTML);
    //Uses listInList to test wheter it will add the elements to the characters list or it will remove them

    if (!listInList(charsToAdd,characters)) {
      //Adds directly the elements
      characters = characters.concat(charsToAdd);
      //Changes the visuals of the button to graphicaly exlpain you are using it
      $(this).css('background','black');
      $(this).css('color','white');
      selectedButtons += 1;
    } 
    else {
      //Removes the characters that are already there
      characters = removeListInList(charsToAdd,characters);
      //Changes the visuals of the button to graphicaly exlpain you are using it
      $(this).css('background','white');
      $(this).css('color','black');
      selectedButtons -= 1;
    }
    currentChar = updateOptions(characters,nOptions);

    if (selectedButtons == 0) {
      $("#current_char").slideToggle('slow');
      $("#buttons").slideToggle('slow');
      $("#noSelection").slideToggle('slow');
    }
    else {
      if (! $("#current_char").is(":visible")) {
        $("#current_char").slideToggle('slow');
      $("#buttons").slideToggle('slow');
      $("#noSelection").slideToggle('slow');
      }

    }
  });
  $("#switchAlphabet").click(function(){
    if (currentAlphabet == "hiragana") {
      currentAlphabet = "katakana"
    }
    else {
      currentAlphabet = "hiragana";
 
    }
    if (currentAlphabet == "hiragana") {
       this.innerHTML = "Switch to katakana";

       $(this).css('background','black');
       $(this).css('color','white');
       
    }
    if (currentAlphabet == "katakana") {
       this.innerHTML = "Switch to hiragana";
  

       $(this).css('background','white');
       $(this).css('color','black');
    }
    
    if ($("#toggleChart")[0].innerHTML == "Practice hiragana") {
      $("#toggleChart")[0].innerHTML = "Practice " + currentAlphabet;
    }
    if ($("#toggleChart")[0].innerHTML == "Practice katakana") {
      $("#toggleChart")[0].innerHTML = "Practice " + currentAlphabet;
    }
    if ($("#toggleChart")[0].innerHTML == "Study hiragana chart") {
      $("#toggleChart")[0].innerHTML = "Study " + currentAlphabet + " chart";
    }
   if ($("#toggleChart")[0].innerHTML == "Study katakana chart") {
      $("#toggleChart")[0].innerHTML = "Study " + currentAlphabet + " chart";
    }

   

    $("#chartIMG").attr('src',currentAlphabet + "_chars/" + currentAlphabet + ".jpg");

    currentChar = updateOptions(characters,nOptions);
  });
  
  $("#toggleChart").click(function () {
    $("#chart").slideToggle('slow');
    $("#practice").slideToggle('slow');
    if (this.innerHTML == "Study "+ currentAlphabet +" chart") {
      this.innerHTML = "Practice "+ currentAlphabet;
    } else {
      this.innerHTML = "Study "+ currentAlphabet +" chart"
    }
  });
  
    nOptions = 5;

    $(".opt").click(function (){
      $("#character")[0]
      if (currentChar == this.innerHTML) {
        $("#body_").attr('bgcolor',"lightblue");
        /*
        indexToRemove = characters.indexOf(this.innerHTML);
        characters = characters.splice(indexToRemove,1);
        */
    } else {
      $("#body_").attr('bgcolor',"red");
    }
      currentChar = updateOptions(characters,nOptions);
    }); 
    
  
  }
$(document).ready(function (){
  main();
});