import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { LoadingRecipes } from '@/components/recipes/LoadingRecipes';
import { RecipeResults } from '@/components/recipes/RecipeResults';

import { getRecipes } from '@/lib/api/recipes';
import type { SearchParams } from '@/lib/api/recipes';

export default async function RecipesPage({
	searchParams,
}: {
	searchParams: SearchParams;
}) {
	if (!searchParams.query && !searchParams.cuisine && !searchParams.maxTime) {
		notFound();
	}

	const recipes = await getRecipes(searchParams);

	return (
		<main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900">Search Results</h1>
					<Link
						href="/"
						className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
					>
						New Search
					</Link>
				</div>

				<Suspense fallback={<LoadingRecipes />}>
					<RecipeResults recipes={recipes} />
				</Suspense>
			</div>
		</main>
	);
}
