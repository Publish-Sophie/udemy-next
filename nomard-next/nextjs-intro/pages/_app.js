// import "../styles/globals.css";
import NavBar from "@/components/NavBar";

function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: dodgerblue;
          text-decoration: none;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </>
  );
}

export default App;
