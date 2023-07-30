import { Anchor } from "@components/Elements/Button/Anchor/Anchor";
import "./ProductCard.module.scss";
import styles from "./ProductCard.module.scss";

export type ProductCardProps = {
  title: string;
  price: number;
  rating: number;
  brand: string;
  stock: number;
  thumbnail: string;
};

export const ProductCard = (props: ProductCardProps) => {
  const { title, price, rating, brand, stock, thumbnail } = props;

  return (
    <Anchor
      href="/products/"
      title={
        <div className={styles.productCard}>
          <div className={styles.productCardImgContainer}>
            <img
              src={thumbnail}
              alt={title}
              //   height={100}
            />
          </div>
          <section>
            <span>${price}</span>
            <h2>{title}</h2>
            <div></div>
          </section>
        </div>
      }
    />
  );
};
