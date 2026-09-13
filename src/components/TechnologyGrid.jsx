function TechnologyGrid({
    technologies,
    loading,
    selectedTechs,
    onAdd,
}) {
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

            {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-orange-500"></div>

                    <p className="mt-4 text-sm font-medium text-slate-500">
                        Loading technologies...
                    </p>
                </div>
            ) : (
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
                                <div className="flex items-center justify-between">
                                    <img
                                        src={tech.icon}
                                        alt={`${tech.name} icon`}
                                        className="h-10 w-10 object-contain"
                                    />

                                    <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                                        {tech.badge}
                                    </span>
                                </div>

                                <h3 className="mt-4 text-lg font-bold text-slate-900">
                                    {tech.name}
                                </h3>

                                <p className="mt-2 min-h-12 text-sm leading-5 text-slate-500">
                                    {tech.description}
                                </p>

                                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                                    <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
                                        {tech.category}
                                    </span>

                                    <span className="text-xs font-medium text-slate-500">
                                        {tech.difficulty}
                                    </span>
                                </div>

                                <div className="mt-3 text-sm text-amber-500">
                                    ★ {tech.rating}
                                </div>

                                <button
                                    onClick={() => onAdd(tech)}
                                    disabled={isSelected}
                                    className={`mt-4 w-full rounded-lg py-2 text-sm font-medium text-white transition ${isSelected
                                            ? "cursor-not-allowed bg-green-600"
                                            : "bg-slate-900 hover:bg-slate-700"
                                        }`}
                                >
                                    {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}

export default TechnologyGrid;