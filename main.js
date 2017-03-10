/*

  Juan Carlos Quirino Carrasco
  Learn Hiragana & Katakana

*/
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
  //!!!Work on this
  while (newList.length != 5 && workingCharacters.length == 0) {
    console.log("i ran");
    randomNumber = Math.floor(Math.random() * workingCharacters.length);
    if (newList.indexOf(randomNumber) == -1) {
      newList.push(randomNumber);
    }
    console.log(workingCharacters,workingCharacters.length);
    
    
  }
  return newList
  /*
  console.log("did you called me?");
  for (i = 0; i < numberOfOptions; i++) {
    console.log(
      i
    );
    
    newList.push(workingCharacters[randomNumber]);
    console.log(newList);
    
  
  }
  */
  return newList;
}
function main() {
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
      "ta","chi","tsu","se","so"
    ];
    var na = [
      "na","ni","nu","ne","no"
    ];
    var ha = [
      "ha","hi","hu","he","ho"
    ];
    var ma = [
      "ma","mi","mu","me","mo"
    ];
    var ya = [
      "ya","yi","yu","ye","yo"
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
    } else {
      //Removes the characters that are already there
      characters = removeListInList(charsToAdd,characters);
      //Changes the visuals of the button to graphicaly exlpain you are using it
      $(this).css('background','white');
      $(this).css('color','black');
    }
     console.log(
      characters
    );
    
    
  });

  $(".option").click(function (){

    //!!!Work on this
    options = updateOptions(characters,5);
    console.log(options);
  }); var options = updateOptions(characters,5);

  
}
$(document).ready(function (){
  main();
});

  /*Old code - Do not de comment
  function getNewCharacter () {
    randomNumber = Math.floor(Math.random() * characters.length);

       $("#character").attr('src',characters[randomNumber].img);
    console.log(characters[randomNumber].name);
    
   } getNewCharacter();
  
  //The this when clicked, refers to the button clicked, so its contents can be accessed
  //without an if for each button
  $(".btn").click(function() {
    if (this.innerHTML == characters[randomNumber].name ) {
      $("body").attr('bgcolor','lightblue');
    } else {
      $("body").attr('bgcolor','red');
    }
    getNewCharacter();


  });
}
*/
