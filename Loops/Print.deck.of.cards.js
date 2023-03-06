let input = [
    '2',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let signOfCard = gets();

if(signOfCard === 'J')
{
    signOfCard = 11;
}
else if(signOfCard === 'Q')
{
    signOfCard = 12;
}
else if(signOfCard === 'K')
{
    signOfCard = 13;
}
else if(signOfCard === 'A')
{
    signOfCard = 14;
}

    if(signOfCard <= 10 && signOfCard >= 2) {
    for(let i = 2; i <= signOfCard; i++) {
        print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
        }
    }
    
    else if(signOfCard >= 2 && signOfCard <= 11) {
        for(let i = 2; i <= 10; i++) {
            print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
        }

        print(`J of spades, J of clubs, J of hearts, J of diamonds`);
    }

    else if(signOfCard >= 2 && signOfCard <= 12) {
        for(let i = 2; i <= 10; i++) {
            print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
        }
        print(`J of spades, J of clubs, J of hearts, J of diamonds`);
        print(`Q of spades, Q of clubs, Q of hearts, Q of diamonds`);
    }
    else if(signOfCard >= 2 && signOfCard <= 13) {
        for(let i = 2; i <= 10; i++) {
            print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
        }

        print(`J of spades, J of clubs, J of hearts, J of diamonds`);
        print(`Q of spades, Q of clubs, Q of hearts, Q of diamonds`);
        print(`K of spades, K of clubs, K of hearts, K of diamonds`);
    }
    else if(signOfCard >= 2 && signOfCard <= 14) {
        for(let i = 2; i <= 10; i++) {
            print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
        }

        print(`J of spades, J of clubs, J of hearts, J of diamonds`);
        print(`Q of spades, Q of clubs, Q of hearts, Q of diamonds`);
        print(`K of spades, K of clubs, K of hearts, K of diamonds`);
        print(`A of spades, A of clubs, A of hearts, A of diamonds`);
    }