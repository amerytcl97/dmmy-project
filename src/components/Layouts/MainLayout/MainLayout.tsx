import styles from "./MainLayout.module.scss";
import { CaretDown, ListDashes, MagnifyingGlass, ShoppingCartSimple, UserCircle } from "phosphor-react";
import { Button, Anchor, Logo, SearchForm, Dropdown, List } from "@components/index";
import { Outlet } from "react-router-dom";
import { useQuery } from "@hooks/UseQuery";
import { API_GET_CATEGORIES } from "@constants";

const CategoriesDropdown = () => {
  const { data } = useQuery<string[]>(API_GET_CATEGORIES);
  return (
    <Dropdown
      opener={({ setExpand }) => (
        <Button
          title="Categories"
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
        items={data || []}
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

// const BrandsBar = () => {
//   return (
//     <div>
//       <div></div>
//     </div>
//   );
// };

const HeaderOne = () => {
  return (
    <div className={styles.headerFirst}>
      <Logo />
      <SearchForm
        to="/products?search="
        className={styles.searchForm}
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
      <div className={styles.actions}>
        <Button
          startIcon={
            <ShoppingCartSimple
              weight="regular"
              size={25}
            />
          }
          title=""
        />
        <Dropdown
          opener={({ setExpand }) => (
            <Button
              title=""
              startIcon={
                <UserCircle
                  weight="regular"
                  size={30}
                />
              }
              onClick={() => setExpand((state) => !state)}
            />
          )}
        >
          <></>
        </Dropdown>
      </div>
    </div>
  );
};

const HeaderTwo = () => {
  return (
    <div className={styles.headerSecond}>
      <CategoriesDropdown />
      <nav>
        <Anchor
          href=""
          title="Ready to ship"
        />
        <Anchor
          href=""
          title="Personal Protective"
        />
        {/* <Link to=""></Link> */}
      </nav>
    </div>
  );
};

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <header>
        <HeaderOne />
        <HeaderTwo />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
