export const fetchCards = async () => {
    try {
        var cards = [];
        const response = await fetch('https://api.trello.com/1/boards/lps48Nau/cards?key=d0443a775a55449e7bd587b641633b17&token=d4e246f1179b1c630d28fd3cb404111ca66d02529311efb0d92d13a9428fa880');
        const json = await response.json();
        json.forEach(function (e) {
                cards = [...cards, {"name": e.name, "desc": e.desc}];
        })
        return cards;
    } catch (err) {
        console.log(err);
    }
}