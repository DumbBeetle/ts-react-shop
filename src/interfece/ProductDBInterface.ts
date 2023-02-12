export interface ProductDbData {
    status: string;
    data: Data;
}

export interface Data {
    product: Product;
}

export interface Product {
    rating: Rating;
    _id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    __v: number;
}

export interface Rating {
    rate: number;
    count: number;
}