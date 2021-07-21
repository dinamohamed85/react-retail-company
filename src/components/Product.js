const Product = ({ product }) => {
    return (
        <div className="responsive" >
            <div className="gallery">
                <img src={product.image} width="600px" height="400px"></img>
                <h3>
                    {product.product_name}{' '}
                </h3>
                <p className="price" >{product.price}{' €'}</p  >
                <div className="desc">{product.description}</div>
            </div>
        </div >
    )
}

export default Product