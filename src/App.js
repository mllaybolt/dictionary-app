import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          This app was coded by Michelle Laybolt and is open-sourced on GitHub
          and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
