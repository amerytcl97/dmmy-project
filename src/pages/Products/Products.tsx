import { List, ProductCard, ProductCardProps } from "@components/index";
import { API_GET_PRODUCTS, API_GET_PRODUCTS_LIMIT } from "@constants";
import { useQuery } from "@hooks/UseQuery";
import { Pagination } from "@components/Elements/Pagination/Pagination";
import styles from "./Products.module.scss";

const Products = () => {
  const { data } = useQuery<{ products: ProductCardProps[]; total: number; limit: number }>(
    (() => {
      const url = new URL(API_GET_PRODUCTS);
      url.searchParams.append("select", ["title", "price", "rating", "brand", "stock", "thumbnail"].join(","));
      return url.href;
    })()
  );

  return (
    <div className={styles.wrapper}>
      <section>
        <header>
          <span>Shop with us</span>
          <img
            src="../../../public/shopping.svg"
            alt=""
          />
        </header>
        <h1>Our Products</h1>
        <List<ProductCardProps>
          items={data?.products || []}
          itemKey="title"
          renderItems={({ value }) => <ProductCard {...value} />}
          className={styles.productList}
        />
        <Pagination
          itemsTotal={data?.total || 0}
          itemsLimit={API_GET_PRODUCTS_LIMIT}
        />
      </section>
    </div>
  );
};

export default Products;
