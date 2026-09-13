import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackPanel from "./components/StackPanel";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTechs, setSelectedTechs] = useState([]);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Technology data load করা যায়নি!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAdd = (tech) => {
    const exists = selectedTechs.some(
      (item) => item.id === tech.id
    );

    if (exists) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setSelectedTechs((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  const handleRemove = (id) => {
    const removedTech = selectedTechs.find(
      (tech) => tech.id === id
    );

    setSelectedTechs((prev) =>
      prev.filter((tech) => tech.id !== id)
    );

    if (removedTech) {
      toast.info(`${removedTech.name} removed from stack.`);
    }
  };

  const handleClear = () => {
    if (selectedTechs.length === 0) return;

    setSelectedTechs([]);
    toast.info("All technologies removed.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TechnologyGrid
                technologies={technologies}
                loading={loading}
                selectedTechs={selectedTechs}
                onAdd={handleAdd}
              />
            </div>

            <div className="lg:col-span-1 lg:mt-[233px]">
              <StackPanel
                selectedTechs={selectedTechs}
                onRemove={handleRemove}
                onClear={handleClear}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default App;