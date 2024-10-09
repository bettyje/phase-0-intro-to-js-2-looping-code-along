const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++){
        console.log(`wrapped ${gifts[i]} and added a bow!`)
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);

function writeCards(names, eventName) {
    const messages = [];

    for (let i = 0; i < names.length; i++) {

        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        
        messages.push(message);
    }

    return messages;
}

const names = ["Guadalupe", "Ollie", "Aki"];
const event = "birthday";
const thankYouCards = writeCards(names, event);
console.log(thankYouCards);

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

countDown(10);

