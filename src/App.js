import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <img
            src="https://media.istockphoto.com/vectors/lemon-vector-id523615971?k=6&m=523615971&s=612x612&w=0&h=qivVcW0jtHC7z9TVSCH8z5kpUqjSNrOodUA2MHBZNtg="
            alt="lemon"
          />
          <h1>when life gives you</h1>
          <br />
          <h2 className="lemons">lemons...</h2>
        </header>
        <main>
          <Dictionary defaultKeyword="lemonade" />
        </main>
        <footer className="text-center">
          🍋 This app was coded by Michelle Laybolt and is{" "}
          <a
            href="https://github.com/mllaybolt/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://loving-nobel-8362d4.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
