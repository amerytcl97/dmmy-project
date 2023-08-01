import { Input, InputProps } from "@components/index";
import styles from "./InputField.module.scss";
import clsx from "clsx";

export type InputFieldProps = {
    label: string;
    row?: boolean;
} & InputProps

export const InputField = (props: InputFieldProps) => {
    const { label, row = false, className, ...inputProps } = props;
    return (
        <label className={clsx(row ? styles.row : styles.column, className)}>
            {label}
            <Input {...inputProps} />
        </label>
    )
};