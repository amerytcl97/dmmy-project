import { List, ProductCard, ProductCardProps } from "@components/index";
import { API_GET_PRODUCTS } from "@constants";
import { useQuery } from "@hooks/UseQuery";
import styles from "./Products.module.scss";


const Products = () => {
  const { data } = useQuery(
    (() => {
      const url = new URL(API_GET_PRODUCTS);
      url.searchParams.append("select", ["title", "price", "rating", "brand", "stock", "thumbnail"].join(","));
      return url.href;
    })(),
    (rawData: { limit: number; products: ProductCardProps[]; skip: number; total: number }) => {
      return rawData.products;
    }
  );

  return (
    <div className={styles.wrapper}>
      <List<ProductCardProps>
        items={data || []}
        itemKey="title"
        renderItems={({ value }) => <ProductCard {...value} />}
        className={styles.productList}
      />
    </div>
  );
};

export default Products;
