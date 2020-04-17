const quotes = [
  {name: 'Bertrand Russel', quote: 'Wenn alle Experten sich einig sind, ist Vorsicht geboten'},
    {name: 'Sokrates', quote: 'Ich weiß, dass ich nichts weiß.'},
    {name: 'Ludwig XIV', quote: 'Der Staat bin ich.'},
    {name: 'Albert Einstein', quote: 'Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt.'},
  ];
const quoteBtn = document.querySelector('#quoteBtn');



quoteBtn.addEventListener('click',displayQuote);

function displayQuote(){
  let number = Math.floor(Math.random() * quotes.length);
  console.log(number);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}