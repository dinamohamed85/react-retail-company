
const Product = ({ product }) => {
    return (
        <div      >
            <h2>
                {product.title}{' '}
            </h2>
            <h4>{product.author}</h4>
            <p>{product.year}</p>
        </div>
    )
}

export default Product