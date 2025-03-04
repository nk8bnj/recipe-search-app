import Link from 'next/link';

import type { Recipe } from '@/lib/api/recipes';

interface RecipeDetailsProps {
  recipe: Recipe;
}

export function RecipeDetails({ recipe }: RecipeDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{recipe.title}</h1>

      <div className="flex gap-4 mb-6">
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-gray-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-gray-600">
            Ready in {recipe.readyInMinutes} minutes
          </span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-gray-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="text-gray-600">Serves {recipe.servings}</span>
        </div>
      </div>

      {recipe.extendedIngredients && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id} className="text-gray-600">
                {ingredient.amount} {ingredient.unit} {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {recipe.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
          <div
            className="text-gray-600 prose max-w-none"
            dangerouslySetInnerHTML={{ __html: recipe.summary }}
          />
        </div>
      )}

      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Back to Search
      </Link>
    </div>
  );
} 