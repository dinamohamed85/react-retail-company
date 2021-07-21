import Product from './Product'

const Products = ({ products, searchTerm }) => {
    return (
        <>
            {products.map((product, index) => {
                if (searchTerm !== "") {
                    if (product.product_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return <Product key={index} product={product} />
                    }
                }
                else {
                    return < Product key={index} product={product} />
                }
            }
            )}
        </>        
    )
}

export default Products