'use strict';

let pigLatin = function(english){
  let word=english;
  let vowel="aeiou";
  let firstword=english[0];
  if(vowel.includes(firstword)){
    console.log(english+"ay");
  } else{
  for( let i=0;i<english.length ; i++){
    if(vowel.includes(word[i])){
      console.log(english.slice(i,english.length)+english.slice(0,i)+"ay");
    }
  }
  }
};

module.exports=pigLatin;