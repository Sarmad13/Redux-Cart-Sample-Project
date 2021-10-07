import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 6,
    title: "Book",
    description: "asdsad",
  },
  {
    id: "p2",
    price: 5,
    title: "Book2",
    description: "asdsad",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {DUMMY_PRODUCT.map((product) => (
        <ul>
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        </ul>
      ))}
    </section>
  );
};

export default Products;
