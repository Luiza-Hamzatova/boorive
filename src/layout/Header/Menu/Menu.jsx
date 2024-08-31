import { Link } from "react-router-dom";
import styles from "./Menu.module.sass";
import { useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("https://640ef1d54ed25579dc40e2a6.mockapi.io/menu")
      .then((res) => res.json())
      .then((res) => {
        setMenu(res);
      });
  }, []);

  return (
    <ul className={styles.menu}>
      <li>
        <Link to="/" className={styles.link}>
          {" "}
          Главная
        </Link>
      </li>
      {menu.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/catalog?menuId=${id}`} className={styles.link}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Menu;
