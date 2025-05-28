import Layout from "../components/layout/Layout";

const products = [
  {
    id: 1,
    name: "Elegant Wooden Chair",
    image: "/images/IMG-20250505-WA0133.jpg",
    description: "Handcrafted from premium wood, this chair combines comfort and style for any room."
  },
  {
    id: 2,
    name: "Classic Dining Table",
    image: "/images/IMG-20250505-WA0132.jpg",
    description: "Spacious and sturdy, perfect for family gatherings and dinner parties."
  },
  {
    id: 3,
    name: "Modern Bookshelf",
    image: "/images/IMG-20250505-WA0131.jpg",
    description: "A sleek design to showcase your favorite books and decor."
  },
  {
    id: 4,
    name: "Cozy Armchair",
    image: "/images/IMG-20250505-WA0130.jpg",
    description: "Sink into comfort with this plush, stylish armchair."
  }
];

const OurProducts = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
        <p className="text-lg text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          Discover our exclusive range of products, crafted with care and designed to elevate your living spaces. Our commitment to quality ensures that every piece is both beautiful and durable. Experience the difference with our exceptional collection!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OurProducts; 