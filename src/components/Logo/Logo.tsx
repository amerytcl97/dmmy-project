import { Anchor } from "@components/Elements/Button/Anchor/Anchor";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Anchor
      href="/"
      title={
        <>
          <h2 className={styles.logo}>
            Dummy
            <b>Project</b>
          </h2>
        </>
      }
    />
  );
};
