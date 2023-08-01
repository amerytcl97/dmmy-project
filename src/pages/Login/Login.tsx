import { Logo } from "@components/index";
import styles from "./Login.module.scss";
import Form from "@components/Elements/Form/Form";

const Login = () => {
  const onSubmit = () => { };

  return (
    <section>
      <h1 className={styles.title}>
        Welcome to
        <Logo />
      </h1>
      <div className={styles.loginContainer}>
        <Form
          onSubmit={onSubmit}
          defaultValues={{}}
        >
          {({ register }) => (
            <>
              <fieldset>
                <label>Username</label>
                <input />
              </fieldset>
            </>
          )}
        </Form>
      </div>
    </section>
  );
};

export default Login;
