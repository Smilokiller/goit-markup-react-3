import React from "react";
import styles from "./styles.module.css";
export function Searchbar(prop) {
  return (
    <>
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={prop.onSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            name="keyWord"
            onChange={prop.onChange}
            value={prop.value}
          />
        </form>
      </header>
    </>
  );
}
