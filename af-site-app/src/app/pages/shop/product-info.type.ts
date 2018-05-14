export class Product {
    name: string;
    description: string;
    category: string;
    img: string;
    bases: Array<string>;
    base: string;
    color: string;
    colors: Array<string>;
    forward: string;
}

export class Base {
    name: string;
    price: number;
    sizes: Array<any>;
    colors: Array<string>;
    img: string;
    overlay?: string;
}

export class ForwardInfo {
    name: string;
    email: string;
    phone?: string;
}