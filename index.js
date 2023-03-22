const hacker1 = 'John';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Paul';
console.log(`The navegator's name is ${hacker2}`);

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}  characters.`);
} else if ( hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

console.log(hacker1.toUpperCase().split(''));
console.log(hacker2.split('').reverse().join(''));

let firstName = [];
firstName.push(hacker2);
firstName.push(hacker1);

firstName.sort();
console.log(firstName);
if (firstName[0] == 'John' && firstName[0] !== firstName[1] ){
    console.log("The driver's name goes first.")
} else if (firstName[0]== 'Paul' && firstName[0] !== firstName[1] ){
    console.log("Yo, the navigator goes first, definitely.")
} else if (firstName[0] == firstName[1]){
    console.log("What?! You both have the same name?")
};


let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus, odio sed molestie pulvinar, dolor magna aliquet libero, eu bibendum enim purus at nisl. Ut purus nisl, pretium vel tortor at, facilisis accumsan lorem. In a tristique tortor. Vestibulum semper dolor eget eleifend mattis. Vestibulum placerat molestie odio, eu tempor sem ornare sit amet. Sed molestie, neque a dapibus condimentum, dui massa hendrerit sem, sit amet porttitor neque tortor quis nisl. Praesent eu leo nec mi tristique convallis id sit amet augue. Mauris eget justo rhoncus, feugiat lacus et, suscipit odio. Quisque nisi erat, molestie in efficitur non, sollicitudin vitae sapien. In porttitor augue libero, nec interdum urna lobortis mattis. Mauris in felis vel ante dignissim ornare. Nullam pretium nulla quis mi pulvinar, sed luctus erat lobortis. In aliquam orci nisl, ac pharetra quam porttitor accumsan. Donec mollis, lacus eu eleifend commodo, ante dolor condimentum massa, ac feugiat turpis ligula at dolor. Proin quis nisi eu nisl condimentum egestas. Nulla rhoncus, nisl et congue volutpat, neque diam facilisis felis, ut cursus est sem in orci. Proin accumsan nisi sit amet neque rhoncus, id elementum justo luctus. Vestibulum mauris risus, luctus ut ornare eu, venenatis id magna. Vivamus ac felis gravida, vulputate ligula id, ultricies diam. Proin in maximus nibh. Nulla commodo nunc non augue ultricies, at pulvinar augue imperdiet. Nam consectetur sollicitudin lectus, ut sollicitudin ipsum scelerisque nec.Nulla vel urna hendrerit, convallis lorem nec, convallis sapien. Suspendisse vehicula metus eget ligula malesuada viverra. Nulla id commodo quam, ac scelerisque nulla. Praesent congue facilisis dolor, eget lobortis sem consectetur sit amet. Praesent non orci scelerisque, tempus est in, finibus est. Quisque at nibh et dui auctor elementum eget ut sapien. Nam eget sagittis nulla. Nunc ut nulla fringilla dui convallis maximus id at elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam imperdiet condimentum ex, facilisis dictum erat. Nulla ornare dui id dolor viverra venenatis. Curabitur in lacus imperdiet, suscipit erat ut, porttitor mi. Sed et dictum diam. Nam a dolor quis quam ultrices bibendum nec sed nisi."

let wordCount = 0;
let textArray = longText.split(' ');
console.log(textArray)

for(let i =0; i<textArray.length;i++){
    wordCount++;
}
console.log(wordCount)




let etCount = 0;
for (let i = 0; i < longText.length; i++) {
    const twoChars = longText[i] + longText[i + 1];
   
    if (twoChars === "et") {
      etCount++;
    } 
  }
  console.log(etCount);


 const phrasestoCheck = 'ana';
 const reversedPhrase = phrasestoCheck.split('').reverse().join('');

 if (reversedPhrase === phrasestoCheck){
    console.log('It is a paliondrome')
 } else {
    console.log('it isnt')
 }

