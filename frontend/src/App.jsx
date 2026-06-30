import "./App.css";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="app">
      <Navbar />
      <Hero />
      <Dashboard />
    </main>
  );
}

export default App;