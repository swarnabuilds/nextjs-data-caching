import Link from "next/link";

 

const ProductsCard = ({ product }) => {
    const {id, name ,category, price, description} = product
    return (
<div className="card card-border bg-base-100">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{price}</p>
    <p>{category}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">

      <Link href={`/products/${id}`}><button className="btn btn-primary">Buy Now</button></Link>
    </div>
  </div>
</div>
    );
};

export default ProductsCard;