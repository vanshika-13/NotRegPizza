import { getPizza } from "../services/pizza-operations.js";
async function printPizzas() {
    const allPizzas = await getPizza();
    const div = document.getElementById('pizza-output');
    console.log("All Pizzas", allPizzas);
    for (var pizza of allPizzas) {
        const card = createCard(pizza);
        div.appendChild(card);
    }
}
printPizzas();

function createCard(pizza) {
    const cardDiv = document.createElement("div");//gives object
    cardDiv.className='card';
    cardDiv.style = {width: '18rem'};
    const img = document.createElement('img');
    img.src = pizza.url;
    img.className = 'card-img-top';
    cardDiv.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = pizza.name;
    cardBody.appendChild(h5);
    cardDiv.appendChild(cardBody);
    const pTag = document.createElement('p');
    pTag.className = 'card-text';
    pTag.innerText = pizza.desc;
    cardBody.appendChild(pTag);
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerText='Add to Cart';
    cardBody.appendChild(button);
    return cardDiv;
    /*
    <div class="card" style="width: 18rem;">
   <img class="card-img-top" src="..." alt="Card image cap">
   <div class="card-body">
     <h5 class="card-title">Card title</h5>
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>
 */
}