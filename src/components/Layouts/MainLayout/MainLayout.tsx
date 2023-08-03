import { CaretDown, ListDashes, MagnifyingGlass, ShoppingCartSimple } from "phosphor-react";
import { Button, Anchor, Logo, SearchForm, Dropdown, List } from "@components/index";
import { Outlet } from "react-router-dom";
import { useQuery } from "@hooks/UseQuery";
import { API_GET_CATEGORIES } from "@constants";
import styles from "./MainLayout.module.scss";

const CategoriesDropdown = ({ categories }: { categories: string[] }) => {
  return (
    <Dropdown
      opener={({ setExpand }) => (
        <Button
          title="ALL CATEGORIES"
          startIcon={
            <ListDashes
              weight="regular"
              size={20}
            />
          }
          endIcon={
            <CaretDown
              weight="regular"
              size={20}
            />
          }
          onClick={() => setExpand((state) => !state)}
          className={styles.categoriesBtn}
        />
      )}
    >
      <List<string>
        items={categories}
        itemKey="data"
        renderItems={({ value }) => (
          <Anchor
            title={value}
            href={""}
          />
        )}
        className={styles.categoriesDropdownMenu}
      />
    </Dropdown>
  );
};

const SearchInput = () => {
  return (
    <SearchForm
      to="/products?search="
      className={styles.search}
    >
      {({ setSearchQuery }) => (
        <>
          <input
            type="search"
            placeholder="Search"
            onChange={(event) => setSearchQuery(event.target.value)}
            className={styles.searchInput}
          />
          <Button
            type="submit"
            startIcon={
              <MagnifyingGlass
                weight="light"
                size={20}
              />
            }
            title="Search"
            className={styles.searchButton}
          />
        </>
      )}
    </SearchForm>
  );
};

const UserActions = () => {
  return (
    <div>
      <Button
        className={styles.cartButton}
        startIcon={<ShoppingCartSimple size={20} />}
      />
    </div>
  );
};

export const MainLayout = () => {
  const { data } = useQuery<{ categories: string[]; randomCategories: string[] }>(API_GET_CATEGORIES, (rawData: string[]) => {
    const randomCategories = [];
    const RANDOM_LIMIT = 5;
    for (let i = 0; i < rawData.length; i++) {
      randomCategories.push(rawData[Math.floor(Math.random() * rawData.length)]);
      if (randomCategories.length >= RANDOM_LIMIT) {
        break;
      }
    }

    return {
      categories: rawData,
      randomCategories,
    };
  });

  return (
    <div className={styles.layout}>
      <header>
        <nav>
          <div className={styles.authWrapper}>
            <Anchor
              title="Register"
              href=""
            />
            <Anchor
              title="Login"
              href=""
            />
          </div>
        </nav>
        <div className={styles.headerContent}>
          <Logo />
          <SearchInput />
          <UserActions />
        </div>
        <div className={styles.headerSubContent}>
          <CategoriesDropdown categories={data?.categories || []} />
          <List<string>
            items={data?.randomCategories || []}
            itemKey="data"
            className={styles.randomCategoriesList}
            renderItems={({ value }) => <Button title={value} />}
          />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <span className={styles.copyright}>&copy; {new Date().getUTCFullYear().toString()} DummyShop, All Rights Reservered?</span>
      </footer>
    </div>
  );
};
