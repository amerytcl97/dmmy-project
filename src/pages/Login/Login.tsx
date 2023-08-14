import { Anchor, Button, Input, InputField, Logo } from "@components/index";
import styles from "./Login.module.scss";
import Form from "@components/Elements/Form/Form";
import { CaretLeft } from "phosphor-react";
import { useForm } from "react-hook-form";

const Login = () => {
  const onSubmit = () => { };

  

  return (
    <div className={styles.wrapper}>
      <section className={styles.loginContainer}>
        <header>
          <Anchor title="Back" startIcon={<CaretLeft />} href="" />
        </header>
        <h1 className={styles.title}>
          Login to Your Account
          <Logo />
        </h1>
        <Form
          onSubmit={onSubmit}
          defaultValues={{}}
        >
          {({ register }) => (
            <>
              <InputField label="Username" />
              <InputField label="Password" type="password" />
              <Anchor title="Create Account" href="/register" />
              <Button title="Login" type="submit" />
            </>
          )}
        </Form>
      </section>
    </div>
  );
};

export default Login;
