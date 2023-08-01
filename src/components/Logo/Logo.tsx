import { Anchor } from "@components/Elements/Button/Anchor/Anchor";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Anchor
      href="/"
      title={
        <>
          <span className={styles.logo}>
            <b>Shop</b>
          </span>
        </>
      }
    />
  );
};
