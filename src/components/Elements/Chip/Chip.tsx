import clsx from "clsx";
import styles from "./Chip.module.scss";
import { ReactNode } from "react";

type ChipSizes = {
    sm: string;
    md: string;
}

const sizes: ChipSizes = {
    sm: styles.chipSm,
    md: styles.chipMd
}

type ChipProps = {
    title: string | ReactNode;
    onClick?: () => void;
} & {
    size?: keyof typeof sizes;
}

export const Chip = ({ title, size = "md", onClick }: ChipProps) => {

    const isClickable: boolean = typeof onClick !== "undefined";

    return (
        <span className={clsx(styles.chip, isClickable ? styles.chipClickable : "", sizes[size])} onClick={() => { }}>
            {title}
        </span>
    )
};
