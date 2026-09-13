function StackPanel({ selectedTechs, onRemove, onClear }) {
    return (
        <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">
                Your Stack
            </h3>

            <p className="mt-1 text-sm text-slate-500">
                {selectedTechs.length} technologies selected
            </p>

            {selectedTechs.length === 0 ? (
                <p className="mt-6 text-center text-sm text-slate-400">
                    No technologies selected yet.
                    <br />
                    Add technologies to build your stack.
                </p>
            ) : (
                <div className="mt-5 space-y-3">
                    {selectedTechs.map((tech) => (
                        <div
                            key={tech.id}
                            className="flex items-center justify-between rounded-lg border border-slate-100 p-3"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={tech.icon}
                                    alt={`${tech.name} icon`}
                                    className="h-7 w-7 object-contain"
                                />

                                <span className="text-sm font-medium text-slate-800">
                                    {tech.name}
                                </span>
                            </div>

                            <button
                                onClick={() => onRemove(tech.id)}
                                className="text-xl text-slate-400 transition hover:text-red-500"
                                aria-label={`Remove ${tech.name}`}
                            >
                                ×
                            </button>
                        </div>
                    ))}

                    <button
                        onClick={onClear}
                        className="mt-3 w-full rounded-lg border border-red-200 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
                    >
                        Remove All
                    </button>
                </div>
            )}
        </aside>
    );
}

export default StackPanel;