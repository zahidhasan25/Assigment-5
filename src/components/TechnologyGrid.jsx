import technologies from "../data/technologies.json";


function TechnologyGrid({ selectedTechs, onAdd }) {
  return (
    <section id="technologies" className="py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Explore{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-3 text-slate-500">
          Choose the right technologies for your development stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech) => {
          const isSelected = selectedTechs.some(
            (item) => item.id === tech.id
          );

          return (
            <div
              key={tech.id}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={tech.icon}
                alt={`${tech.name} icon`}
                className="h-10 w-10 object-contain"
              />

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {tech.name}
              </h3>

              <p className="mt-2 min-h-12 text-sm leading-5 text-slate-500">
                {tech.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
                  {tech.category}
                </span>

                <span className="text-sm text-amber-500">
                  ★ {tech.rating}
                </span>
              </div>

              <button
                onClick={() => onAdd(tech)}
                className={`mt-4 w-full rounded-lg py-2 text-sm font-medium transition ${
                  isSelected
                    ? "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    : "bg-slate-900 text-white hover:bg-slate-700"
                }`}
              >
                {isSelected ? "Added to Stack" : "Add to Stack"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TechnologyGrid;