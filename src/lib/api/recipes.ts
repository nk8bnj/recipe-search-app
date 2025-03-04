export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes?: number;
  servings?: number;
  summary?: string;
  extendedIngredients?: Array<{
    id: number;
    name: string;
    amount: number;
    unit: string;
  }>;
}

export interface SearchParams {
  query?: string;
  cuisine?: string;
  maxTime?: string;
}

export async function getRecipes({ query, cuisine, maxTime }: SearchParams): Promise<Recipe[]> {
  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  if (!apiKey) {
    throw new Error('API key is not configured');
  }

  const params = new URLSearchParams();
  if (query) params.append('query', query);
  if (cuisine) params.append('cuisine', cuisine);
  if (maxTime) params.append('maxReadyTime', maxTime);
  params.append('apiKey', apiKey);

  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }

  const data = await response.json();
  return data.results;
}

export async function getRecipeDetails(id: string): Promise<Recipe> {
  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  if (!apiKey) {
    throw new Error('API key is not configured');
  }

  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch recipe details');
  }

  return response.json();
} 