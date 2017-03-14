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
  if (workingCharacters == 0) {
    return
  }
  console.log("did you called me baby?");
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
    while (newList.length != characters.length && workingCharacters.length != 0) {
      //Takes 5 random numbers in the range of the number of workingCharacters
      randomNumber = Math.floor(Math.random() * workingCharacters.length);
      if (newList.indexOf(randomNumber) == -1) {
        newList.push(randomNumber);
      }
    } 
  }
  console.log(characters.length);
  
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
  $("#character").attr('src',"hiragana_chars/"+currentChar+".png");
  return currentChar;
}
function main() {
  //$("#current_char").hide();
  $("#chart").hide();
  $("#noSelection").hide();
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

  characters = [];
  currentChar = "a";
  lastCharacter = -1;
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
      $(this)[0]['on'] = true;
      console.log (
        $(this)[0]['on']
      );
    } 
    else {
      //Removes the characters that are already there
      characters = removeListInList(charsToAdd,characters);
      //Changes the visuals of the button to graphicaly exlpain you are using it
      $(this).css('background','white');
      $(this).css('color','black');
      $(this)[0]['on'] = false;
      console.log (
        $(this)[0]['on']
      );
    }
    currentChar = updateOptions(characters,nOptions);
  });
  
  $(".practiceToggle").click(function () {
    $("#chart").slideToggle('slow');
    $("#practice").slideToggle('slow');
    if (this.innerHTML == "Study hiragana chart") {
      this.innerHTML = "Practice hiragana"
    } else {
      this.innerHTML = "Study hiragana chart"
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