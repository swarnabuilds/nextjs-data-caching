import ProductsCard from "../components/ProductsCard";

 
const getProducts = async() => {
    const res = await fetch('http://localhost:5000/products', {cache: 'no-store'})// force-cache deuya jay bt cannot be change data 
    return res.json()
}
const ProductsPage = async() => {
    const products = await getProducts()
    return (
        <div>
            <h2>All Products</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    products.map(product => <ProductsCard 
                        key={product.id}
                        product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;