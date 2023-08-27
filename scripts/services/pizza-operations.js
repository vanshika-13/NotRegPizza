import makeNetCall from "./APIClient.js";
import Pizza from "../models/pizza-model.js";
import { URL } from "../utils/config.js";
export async function getPizza() {
    //api clients (object (pizza))
    const data = await makeNetCall(URL);
    //data map to model (conversion)
    const pizzaJSON = data['Vegetarian'];
    const pizzas = pizzaJSON.map(singlePizza => {
        const pizzaObject = new Pizza(singlePizza.id,
            singlePizza.name,
            singlePizza.price,
            singlePizza.assets.product_details_page[0].url,
            singlePizza.menu_description);
        return pizzaObject;
    });
    //return model
    return pizzas;
}
