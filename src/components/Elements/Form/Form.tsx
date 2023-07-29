import styles from "./Form.module.scss";
import { ReactNode, useEffect } from "react";
import { FieldValues, UseFormReturn, useForm } from "react-hook-form";

export interface FormProps<FormValues extends FieldValues> {
  children: (methods: UseFormReturn<FormValues>) => ReactNode;
  onSubmit: () => void;
  parentMethods?: UseFormReturn<FormValues>;
  defaultValues: FormValues;
}

const Form = <FormValues extends Record<string, unknown> = Record<string, unknown>>({
  children,
  onSubmit,
  parentMethods,
  defaultValues,
}: FormProps<FormValues>) => {
  const methods = useForm<FormValues>({
    defaultValues: async () => defaultValues,
  });
  const selectedMethods = parentMethods || methods;

  useEffect(() => {
    if (selectedMethods) {
      selectedMethods.reset({ ...defaultValues });
    }
  }, [defaultValues, selectedMethods]);

  return (
    <form
      onSubmit={selectedMethods.handleSubmit(onSubmit)}
      className={styles.form}
    >
      {children(selectedMethods)}
    </form>
  );
};

export default Form;
