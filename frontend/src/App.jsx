import "./App.css";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SkillImpact from "./components/SkillImpact";
import Timeline from "./components/Timeline";

function App() {
  return (
    <main className="app">
      <Navbar />
      <Hero />
      <Dashboard />
      <Timeline />
      <SkillImpact />
    </main>
  );
}

export default App;