export function outfits() {
    fetch('./outfits.json'
        , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    .then(function (response) {
        console.log(response)
        let keys = Object.keys(response);
        let random = response[keys[keys.length * Math.random() << 0]];

        return random.json();
    })
    .then(function (myJson) {
        console.log(myJson);
    });
}