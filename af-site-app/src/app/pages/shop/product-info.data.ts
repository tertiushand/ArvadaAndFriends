import { Product, Base, ForwardInfo } from './product-info.type';

export class ProductInfo {
    public products: Array<Product> = [
        {
            name: "Arvada & Friends: PoGo",
            description: "Classic Pokemon Go logo design for the Arvada & Friends community!",
            category: "tshirt",
            img: "af-pogo",
            bases: ["STD"],
            base: "STD",
            color: "yellow",
            colors: ["yellow", "red", "white", "black"],
            forward: "miguel"
        }
    ];

    public bases = {
        STD: {
            name: "Standard T-Shirt",
            price: 17.50,
            sizes: ["S","M","L","XL", ["XXL", 20.00], ["XXXL", 20.00]],
            colors: ["yellow", "red", "blue", "white", "black"],
            img: "test-shirt"
        }
    };

    public sizes = {
        S: "Small",
        M: "Medium",
        L: "Large",
        XL: "X-Large",
        XXL: "XX-Large",
        XXXL: "XXX-Large"
    };

    public forward = {
        miguel: {
            name: "Miguel",
            email: "info@standardlaugh.com",
            phone: "303-555-5555"
        }
    };
}
