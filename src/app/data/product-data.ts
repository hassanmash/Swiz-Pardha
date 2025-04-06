import { Product } from "../models/product";

export const PRODUCTS: Product[] = [
    {
        id: 'P12345',
        name: 'Elegant Lamp',
        imageUrl: 'assets/images/p1.png',
        price: 99.99,
        designName: 'Vintage Glow',
        description: 'A beautiful vintage-style lamp.',
        material: 'Brass',
        dimensions: '12in x 8in x 8in',
        weight: '1.5kg',
        availability: 'In Stock',
        category: 'Home Decor'
    },
    {
        id: 'P67890',
        name: 'Modern Chair',
        imageUrl: 'assets/images/p2.png',
        price: 149.99,
        designName: 'Urban Sit',
        description: 'Comfortable and stylish chair.',
        material: 'Wood and Fabric',
        dimensions: '30in x 20in x 20in',
        weight: '7kg',
        availability: 'Out of Stock',
        category: 'Furniture'
    },
    {
        id: 'P11223',
        name: 'Designer Clock',
        imageUrl: 'assets/images/p3.png',
        price: 79.99,
        designName: 'TimeArt',
        description: 'Wall-mounted designer clock.',
        material: 'Stainless Steel',
        dimensions: '14in diameter',
        weight: '2kg',
        availability: 'In Stock',
        category: 'Wall Decor'
    }
];
