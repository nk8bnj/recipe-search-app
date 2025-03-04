# Recipe Search App - [DEMO](https://recipe-search-app-omega.vercel.app/)

A Next.js application that allows users to search for recipes using the Spoonacular API. Users can search by recipe name, cuisine type, and maximum preparation time.

## Features

- Search recipes by name, cuisine type, and preparation time
- View recipe details including ingredients and preparation instructions
- Responsive design with Tailwind CSS
- Server-side rendering for better performance
- API response caching
- Loading states with React Suspense

## Prerequisites

- Node.js 14.6.0 or newer
- npm or yarn
- Spoonacular API key (get one at [Spoonacular API](https://spoonacular.com/food-api))

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd recipe-search-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Spoonacular API key:

   ```
   NEXT_PUBLIC_SPOONACULAR_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [ESLint](https://eslint.org/) - JavaScript linting utility
- [Prettier](https://prettier.io/) - Code formatter
