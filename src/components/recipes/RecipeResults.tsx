import Link from 'next/link';

import { RecipeCard } from './RecipeCard';

import type { Recipe } from '@/lib/api/recipes';

interface RecipeResultsProps {
  recipes: Recipe[];
}

export function RecipeResults({ recipes }: RecipeResultsProps) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">No recipes found</h2>
        <p className="text-gray-600">Try searching for another recipe</p>
        <Link
          href="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Back to Search
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
} 