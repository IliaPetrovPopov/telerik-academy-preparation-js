let input = [
    '5.54',
    '10',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let priceOfProduct = Number(gets());
let paidByCustomer = Number(gets());

let change = Math.round((paidByCustomer - priceOfProduct) * 100);
if(change >= 100)
{
    print(`${Math.floor(change / 100)} x 1 lev`);
    change = ((change / 100) - Math.floor(change / 100));
    change = change.toFixed(2) * 100; 
}

if(change >= 50)
{
    print(`${Math.floor(change / 50)} x 50 stotinki`);
    change = change - (Math.floor(change / 50)) * 50;
}

if(change >= 20)
{
    print(`${Math.floor(change / 20)} x 20 stotinki`);
    change = change - (Math.floor(change / 20))* 20;
}

if(change >= 10)
{
    print(`${Math.floor(change / 10)} x 10 stotinki`);
    change = change - ((Math.floor(change / 10))* 10);
}   

if(change >= 5)
{
    print(`${Math.floor(change / 5)} x 5 stotinki`);
    change = change - ((Math.floor(change / 5))* 5);
}

if(change >= 2)
{
    print(`${Math.floor(change / 2)} x 2 stotinki`);
    change = change - (Math.floor(change / 2)) * 2;
}

if(change >= 1)
{
    print(`${Math.floor(change / 1)} x 1 stotinka`);
    change = change - (Math.floor(change / 1)) * 1;
}