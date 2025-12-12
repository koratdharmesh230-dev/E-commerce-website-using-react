import db from "./models/index.js";

// Data to insert

const products = [
    {
        name: "Wireless Headphones",
        price: 99.99,
        description: "High quality noise cancelling headphones.",
        stock: 50,
        imageUrl: "https://via.placeholder.com/300"
    },
    {
        name: "Mechanical Keyboard",
        price: 120.50,
        description: "Clicky switches for the best typing experience.",
        stock: 20,
        imageUrl: "https://via.placeholder.com/300"
    },
    {
        name: "Gaming Mouse",
        price: 45.00,
        description: "RGB lighting and high DPI sensor.",
        stock: 100,
        imageUrl: "https://via.placeholder.com/300"
    },
    {
        name: "4K Monitor",
        price: 300.00,
        description: "Crystal clear display for work and gaming.",
        stock: 10,
        imageUrl: "https://via.placeholder.com/300"
    },
    {
        name: "Ergonomic Chair",
        price: 250.00,
        description: "Comfortable chair for long coding sessions.",
        stock: 5,
        imageUrl: "https://via.placeholder.com/300"
    }
];

const seedDatabase = async () => {
    try {
        // Connect to DB
        await db.sequelize.sync();

        // insert products
        await db.Product.bulkCreate(products);

        console.log("products added succesfully!");
        process.exit(0);
    } catch (err) {
        console.error("Error seeding data:", err);
        process.exit(1);
    }
};

seedDatabase();