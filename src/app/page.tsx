'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const cuisines = [
	'Chinese',
	'French',
	'Indian',
	'Italian',
	'Japanese',
	'Mexican',
];

export default function Home() {
	const router = useRouter();
	const [query, setQuery] = useState('');
	const [cuisine, setCuisine] = useState('');
	const [maxTime, setMaxTime] = useState('');
	const [isNextEnabled, setIsNextEnabled] = useState(false);

	useEffect(() => {
		setIsNextEnabled(query !== '' || cuisine !== '' || maxTime !== '');
	}, [query, cuisine, maxTime]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const params = new URLSearchParams();
		if (query) params.append('query', query);
		if (cuisine) params.append('cuisine', cuisine);
		if (maxTime) params.append('maxTime', maxTime);
		router.push(`/recipes?${params.toString()}`);
	};

	return (
		<main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md mx-auto">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-2">Recipe Search</h1>
					<p className="text-gray-600">Find your perfect recipe</p>
				</div>

				<form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
					<div>
						<label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
							Recipe Name
						</label>
						<input
							type="text"
							id="query"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Enter recipe name (e.g., pasta)"
							className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>

					<div>
						<label htmlFor="cuisine" className="block text-sm font-medium text-gray-700 mb-1">
							Cuisine Type
						</label>
						<select
							id="cuisine"
							value={cuisine}
							onChange={(e) => setCuisine(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						>
							<option value="">Select cuisine</option>
							{cuisines.map((c) => (
								<option key={c} value={c.toLowerCase()}>
									{c}
								</option>
							))}
						</select>
					</div>

					<div>
						<label htmlFor="maxTime" className="block text-sm font-medium text-gray-700 mb-1">
							Maximum Preparation Time (minutes)
						</label>
						<input
							type="number"
							id="maxTime"
							value={maxTime}
							onChange={(e) => setMaxTime(e.target.value)}
							min="0"
							placeholder="Enter max preparation time"
							className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>

					<button
						type="submit"
						disabled={!isNextEnabled}
						className={`w-full py-2 px-4 rounded-md text-white font-medium ${isNextEnabled
							? 'bg-blue-600 hover:bg-blue-700'
							: 'bg-gray-400 cursor-not-allowed'
							} transition-colors duration-200`}
					>
						Next
					</button>
				</form>
			</div>
		</main>
	);
}
