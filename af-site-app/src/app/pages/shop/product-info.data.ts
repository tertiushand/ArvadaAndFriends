export class ProductInfo {
    products: [
        {
            name: "Arvada & Friends: PoGo",
            description: "Classic Pokemon Go logo design for the Arvada & Friends community!",
            category: "tshirt",
            img: "af-pogo",
            bases: ["STD"],
            base: "STD",
            color: "yellow",
            colors: ["yellow", "red", "white"],
            forward: "miguel"
        }
    ]

    bases: {
        STD: {
            name: "Standard T-Shirt",
            price: 16.50,
            sizes: ["S","M","L","XL", ["XXL", 18.00],["XXXL", 18.00]],
            colors: ["yellow", "red", "blue", "white", "black"],
            img: "test-shirt"
        }
    }

    sizes: {
        S: "Small",
        M: "Medium",
        L: "Large",
        XL: "X-Large",
        XXL: "XX-Large",
        XXXL: "XXX-Large"
    }

    forward: {
        miguel: {
            name: "Miguel",
            email: "info@standardlaugh.com",
            phone: "303-555-5555"
        }
    }
}
