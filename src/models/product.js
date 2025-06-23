export default class ProductModel {
    id;
    title;
    description;
    brand;
    type;
    category;
    gender;
    state;
    price;
    discount;
    sizes;
    colors;
    rating;
    reviews;
    image;

    constructor({
        id, 
        title, 
        description, 
        brand, 
        type, 
        category, 
        gender, 
        state, 
        price, 
        discount, 
        sizes, 
        colors,
        rating,
        reviews,
        image
    }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.brand = brand;
        this.type = type;
        this.category = category;
        this.gender = gender;
        this.state = state;
        this.price = price;
        this.discount = discount;
        this.sizes = sizes;
        this.colors = colors;
        this.rating = rating;
        this.reviews = reviews;
        this.image = image;
    }
}

export const productEmpty = new ProductModel({
    id: "",
    title: "", 
    description: "", 
    brand: "", 
    type: "", 
    category: "", 
    gender: "", 
    state: "", 
    price: 0, 
    discount: 0, 
    sizes: [0, 0, 0], 
    colors: [
        {
            name: "",
            code: ""
        }
    ],
    rating: 0,
    reviews: 0,
    image: ""
})