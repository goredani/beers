// console.log(beers);

// console.log(beers.cards);

// console.log(beers.logo);

// console.log(beers.cards[5]);


window.addEventListener('load', loadEvent);

function loadEvent() {
    const rootElement = document.getElementById('root');

    // const beerCard = beers.cards[0];
    const beerCards = beers.cards;

    // // const beerName = beer.title;
    // // const beerCompany = beer.sub;
    // // const beerType = beer.text;

    // const beerName1 = beerCards[1].title;
    // const beerCompany1 = beerCards[1].sub;
    // const beerType1 = beerCards[1].text;

    // // rootElement.insertAdjacentHTML('beforeend', beerCardComponent(beerName, beerCompany, beerType));
    // rootElement.insertAdjacentHTML('beforeend', beerCardComponent(beerName1, beerCompany1, beerType1));
    // rootElement.insertAdjacentHTML('beforeend', beerCardComponent(beerCards[2].title, beerCards[2].sub, beerCards[2].text));

    for (beer of beerCards) {
        //console.log(beer);
        rootElement.insertAdjacentHTML('beforeend', beerCardComponent(beer.title, beer.sub, beer.text));
    }
}

const beerCardComponent = function (beerName, beerCompany, beerType) {
    return `
        <div class='card' onclick="onClick(this)">
            <div class='beer-name'>${beerName}</div>
            <div class='beer-company' onclick="console.log(this); event.stopPropagation();">${beerCompany}</div>
            <div class='beer-type'>${beerType}</div>
        </div>
    `
}

const onClick = div => {
    console.log(div);
    if (div.classList.contains('green')) {
        div.classList.remove('green');
    } else {
        div.classList.add('green');
    }
}