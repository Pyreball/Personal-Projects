export const fetchCards = async () => {
    try {
        var cards = [];
        const response = await fetch('https://api.trello.com/1/boards/lps48Nau/cards?key=d0443a775a55449e7bd587b641633b17&token=d4e246f1179b1c630d28fd3cb404111ca66d02529311efb0d92d13a9428fa880');
        const json = await response.json();
        json.forEach(function (e) {
            cards = [...cards, {"name": e.name, "desc": e.desc, "id": e.id}];
        })
        return cards;
    } catch (err) {
        console.log(err);
    }
}

// { "points": "4", "description": "Test Description" }
export const saveCard = async (id, name, points, description, refreshCards) => {
    try {
        const formattedDesc = encodeURIComponent('{ "points": "' + points + '", "description": "' + description + '" }');
        fetch('https://api.trello.com/1/cards/' + id + '?name=' + name + '&desc=' + formattedDesc + '&key=d0443a775a55449e7bd587b641633b17&token=d4e246f1179b1c630d28fd3cb404111ca66d02529311efb0d92d13a9428fa880', {
            method: 'PUT'
        })
            .then(function (response) {
                return response.text();
            })
            .then(function (text) {
                console.log(text);
                refreshCards();
            })
            .catch(function (error) {
                console.log(error);
            })

    } catch (err) {
        console.log(err);
    }
}