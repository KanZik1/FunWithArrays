//ARRAY METHOD ONE

// Her bruger vi pop metoden. Den fjerner det sidste element i ens array og returnere det. 
const colors = ['pink', 'blue', 'yellow', 'black']; //Så i dette tilfælde er det 'black' den fjerner.

console.log(colors.pop()); //Og så returnere den det.

console.log(colors); //Nu vil black være returneret og kan derfor ikke ses i arrayen. 


// //ARRAY METHOD TWO

//Her bruger vi push metoden. Det tifølføjer det element som er skrevet i () til slut i arrayen, og returnere det den nye længde af arrayen.
const colors2 = ['pink', 'blue', 'yellow'];

const count = colors2.push('black'); //Her  pusher vi black til at blive lagt bagerst i arrayen..

console.log(colors2);

colors2.push('purple', 'green', 'red'); //Her pusher vi 3 farver, så vil resultatet være "'pink', 'blue', 'yellow' 'black' 'purple', 'green', 'red'"

console.log(colors2);

//ARRAY METHOD THREE

//Her bruger vi shift metoden. Der fjerner vi det første element i arrayen og returnere det.
const colors3 = ['pink', 'blue', 'yellow', 'black'];

const firstElement = colors3.shift(); //Her laver vi variablen "firstElement" så vi kan logge den. Og så bruger vi shift på arrayen.  

console.log(colors3); //Her logger vi vores array og der skulle vi gerne have 'pink' fjernet.

console.log(firstElement); //Her logger vi vores variable "firsElement", og den skulle gerne vise "pink".

//ARRAY METHOD FOUR

//Her bruger vi unshift metoden. Der indsætter vi de defineret elementer 'purple' og 'green' i starten af arrayen.
const colors4 = ['pink', 'blue', 'yellow', 'black']; //Vores array

console.log(colors4); //Logger vores array

console.log(colors4.unshift('purple', 'green')); //Her unshifter vi og definere de elementer som skal komme i starten af vores array.

console.log(colors4); //Her  logger vi vores array igen, hvorefter vores tilføjede elementer gerne skulle være.

//ARRAY METHOD FIVE 

//Her bruger vi metoden slice. Den fjerner det tal i arrayen som er i feltet. 
const colors5 = ['pink', 'blue', 'yellow', 'black'];  //Vores array

console.log(colors5.slice(2)); //Her slicer vi "2" så den fjerne de 2 første elementer i arrayen. 

console.log(colors5.slice(0, 3)); //Her slicer det uden for 0 - 3 så 'pink', 'blue', 'yellow' forbliver og black forsvinder.

//ARRAY METHOD SIX

//Her bruger vi metoden forEach. Som ligger lidt i navnet det er for hver element i vores array.
const colors6 = ['pink', 'blue', 'yellow', 'black']; //Vores array.

colors6.forEach((element) => console.log(element)); //Her bruger vi forEach til at logge hver element i vores array.



