import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import qs from "qs";

import styles from "./filter.module.sass";

const Filter = () => {
  const [categories, setCategories] = useState([]);
  const [menuId, setMenuId] = useState([]);
  const [price, setPrice] = useState("desktopAllPrices");
  const params = qs.parse(window.location.search.substring(1));

  useEffect(() => {
    fetch(
      `https://640ef1d54ed25579dc40e2a6.mockapi.io/categories/a${params.menuId}`
    )
      .then((res) => res.json())
      .then((res) => {
        setMenuId(res.menuId);
        setCategories(res.categories);
      });
  }, [params.menuId]);
  return (
    <div className={styles.filter}>
      {categories && categories.length > 0 && (
        <div className={styles.column}>
          <div className={styles.title}>КАТЕГОРИИ:</div>
          <ul className={styles.list}>
            {categories.map(({ id, name }) => (
              <li key={id}>
                <Link
                  to={`?categoryId=${id}&menuId=${menuId}`}
                  className={styles.item}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className={styles.column}>
        <div className={styles.title}>ЦЕНЫ:</div>
        <form action="" className={styles.options}>
          <div className={styles.option}>
            <input
              type="radio"
              id="desktopAllPrices"
              name="price"
              value="desktopAllPrices"
              checked={price === "desktopAllPrices"}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="desktopAllPrices">Все цены</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              id="desktopUpto500"
              name="price"
              value="desktopUpto500"
              checked={price === "desktopUpto500"}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="desktopUpto500">до 500</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              id="desktopFrom500to1000"
              name="price"
              value="desktopFrom500to1000"
              checked={price === "desktopFrom500to1000"}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="desktopFrom500to1000">500 — 1000</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              id="desktopFrom1000to1500"
              name="price"
              value="desktopFrom1000to1500"
              checked={price === "desktopFrom1000to1500"}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="desktopFrom1000to1500">1000 — 1500</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              id="desktopFrom1500"
              name="price"
              value="desktopFrom1500"
              checked={price === "desktopFrom1500"}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="desktopFrom1500">от 1500</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
