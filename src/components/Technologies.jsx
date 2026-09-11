import React, { useState, useEffect } from 'react';

export default function Technologies({ onAddToStack }) {

    const [technologies, setTechnologies] = useState([]);

    useEffect(() => {
        fetch('/data/technologies.json')
            .then((res) => res.json())
            .then((data) => setTechnologies(data))
            .catch((err) => console.error('Error fetching technologies:', err));
    }, []);

    return (
        <section id="technologies" className="max-w-7xl mx-auto px-4 py-12">
            {/* হেডিং */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Explore <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
                </h2>
                <p className="mt-3 text-gray-600">
                    Select technologies to build your customized tech stack.
                </p>
            </div>

            {technologies.length === 0 ? (
                <p className="text-center text-gray-500 py-10">Loading technologies...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech) => (
                        <div
                            key={tech.id}
                            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                        >
                            <div>

                                <div className="flex items-center justify-between mb-4">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="w-12 h-12 object-contain"
                                    />
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-100 text-orange-600">
                                        {tech.category}
                                    </span>
                                </div>


                                <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                    {tech.description}
                                </p>
                            </div>


                            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-sm font-semibold text-gray-700">
                                    ⭐ {tech.rating}
                                </span>
                                <button
                                    onClick={() => onAddToStack(tech)}
                                    className="btn btn-sm text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 border-0 hover:opacity-90"
                                >
                                    Add to Stack ➕
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );

}
