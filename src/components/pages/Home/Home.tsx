import Button from "../../ui/Button";

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
  const showButton = false;
  return (
    <main>
      <h1 onClick={() => alert("Hello User!")}>Hello Ukhasyah's World</h1>

      {/* Rendering Condition */}
      {showButton ? (
        <Button type="button">Ukhasyah</Button>
      ) : (
        <Button type="button">Test</Button>
      )}
      <br />
      <br />

      {/* Rendering List */}
      {makanan.map((item, index) => (
        <Button key={`makanan-${index}`} type="button">
          {item.nama}
        </Button>
      ))}
    </main>
  );
};

export default Home;
