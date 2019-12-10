const vowel =["a","e","i","o","u"]
function countvowels(text){
    let counter=0;
    for(let letter of text.to_lowercase()){
        if(vowels.includes(letter)){
            counter++;
        }
    }
    console.log("The text contains{counter}vowels")
    return counter;
}
countvowelsIterative('I am using a loop');