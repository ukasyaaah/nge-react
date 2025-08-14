import { useState } from "react";
import Button from "../../ui/Button";
import styles from "./Home.module.css";
import useCounterStore from "../../../stores/CounterStore";
import { useQuery } from "@tanstack/react-query";

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
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { count, increment, decrement, reset } = useCounterStore();
  const showButton = false;
  console.log(darkMode);

  const { data } = useQuery({
    queryKey: ["dataMenu"],
    queryFn: async () => {
      return await fetch("https://wpu-cafe.vercel.app/api/menu").then(
        (response) => response.json()
      );
    },
  });

  console.log(data?.data);

  return (
    <main className={darkMode ? styles.dark : styles.light}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <h1 onClick={() => alert("Hello User!")}>Hello Ukhasyah's World</h1>
        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>

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
      {data?.data.map((menu: { id: string; name: string }) => (
        <Button key={`makanan-${menu.id}`} type="button">
          {menu.name}
        </Button>
      ))}
      <br />
      <br />

      <br />
      <br />

      <h1>Counter</h1>
      <p> {count} </p>
      <Button onClick={() => increment()}>Tambah</Button>
      <Button onClick={() => decrement()}>Kurang</Button>
      <Button onClick={() => reset()}>Reset</Button>
    </main>
  );
};

export default Home;
