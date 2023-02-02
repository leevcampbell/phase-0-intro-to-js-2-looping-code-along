const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
    let thankYouMessages = [];
    
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  debugger
  return thankYouMessages;
};
function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}