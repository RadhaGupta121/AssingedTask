import Product from "./Product";

const ProductListing =()=>{
    return(
        <>
        <div className="product-list m-auto">
        <div className="flex flex-wrap justify-center">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
        </div>
        </>
    )
}
export default ProductListing;