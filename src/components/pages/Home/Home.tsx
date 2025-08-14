import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import styles from "./Home.module.css";

const makanan = [
  {
    nama: "Nasi Goreng",
    harga: 10000,
  },
  {
    nama: "Nasi Kebuli",
    harga: 10000,
  },
];

const Home = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [menus, setMenus] = useState([]);
  const showButton = false;
  console.log(darkMode);

  // useEffect(() => {
  //   alert(`Mode  ${darkMode ? "Gelap" : "Terang"} Aktif!`);
  // }, [darkMode]);

  useEffect(() => {
    fetch("https://wpu-cafe.vercel.app/api/menu")
      .then((response) => response.json())
      .then((data) => setMenus(data.data));
  }, []);

  return (
    <main className={darkMode ? styles.dark : styles.light}>
      <h1 onClick={() => alert("Hello User!")}>Hello Ukhasyah's World</h1>

      {/* Rendering Condition */}
      {showButton ? (
        <Button type="button">Ukhasyah</Button>
      ) : (
        <Button type="button">Zufar</Button>
      )}
      <br />
      <br />

      {/* Rendering List */}
      {makanan.map((item, index) => (
        <Button key={`makanan-${index}`} type="button">
          {item.nama}
        </Button>
      ))}
      <br />
      <br />
      {menus.map((menu: { id: string; name: string }) => (
        <Button key={`makanan-${menu.id}`} type="button">
          {menu.name}
        </Button>
      ))}

      <br />
      <br />
      <Button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </main>
  );
};

export default Home;
