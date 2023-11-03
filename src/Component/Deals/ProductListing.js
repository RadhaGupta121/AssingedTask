import Product from "./Product";
const ProductListing =()=>{
    return(
        <>
        <div className="product-list m-auto mt-10">
        <div className="flex flex-wrap justify-center">
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