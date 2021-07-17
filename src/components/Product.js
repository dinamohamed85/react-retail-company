const Product = ({ product }) => {
    return (
        <div className='product' >
            <img src={product.image}></img>
            <h3>
                {product.product_name}{' '}
            </h3>
            
            <h4>{product.description}</h4>
            <p>{product.price}{' €'}</p>
        </div>
    )
}

export default Product