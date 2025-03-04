import { Suspense } from 'react';

import { RecipeDetails } from '@/components/recipes/RecipeDetails';

import { getRecipeDetails } from '@/lib/api/recipes';

function LoadingRecipe() {
	return (
		<div className="animate-pulse">
			<div className="h-64 bg-gray-200 rounded-lg mb-6" />
			<div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
			<div className="space-y-3">
				<div className="h-4 bg-gray-200 rounded w-1/2" />
				<div className="h-4 bg-gray-200 rounded w-2/3" />
				<div className="h-4 bg-gray-200 rounded w-1/3" />
			</div>
		</div>
	);
}

export default async function RecipeDetailsPage({
	params,
}: {
	params: { id: string };
}) {
	const recipe = await getRecipeDetails(params.id);

	return (
		<main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto">
				<Suspense fallback={<LoadingRecipe />}>
					<RecipeDetails recipe={recipe} />
				</Suspense>
			</div>
		</main>
	);
}
