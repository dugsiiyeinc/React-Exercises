import { Link } from "react-router";

// Recipe Data
export const recipes = [
   {
    id: 1,
    title: 'Classic Chocolate Cake',
    description: 'Rich and moist chocolate cake perfect for any occasion',
    category: 'desserts',
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake at 350°F for 25 minutes'
    ]
  },
  {
    id: 2,
    title: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with creamy egg sauce',
    category: 'dinner',
    ingredients: [
      'Spaghetti',
      'Eggs',
      'Pecorino cheese',
      'Black pepper'
    ],
    instructions: [
      'Cook pasta',
      'Mix eggs and cheese',
      'Combine while hot'
    ]
  },
  {
    id: 3,
    title: 'Greek Salad',
    description: 'Fresh Mediterranean salad with feta cheese',
    category: 'lunch',
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake at 350°F for 25 minutes'
    ]
  },
  {
    id: 4,
    title: 'Breakfast Smoothie Bowl',
    description: 'Healthy and colorful breakfast bowl',
    category: 'breakfast',
    ingredients: [
      'Spaghetti',
      'Eggs',
      'Pecorino cheese',
      'Black pepper'
    ],
    instructions: [
      'Cook pasta',
      'Mix eggs and cheese',
      'Combine while hot'
    ]
  },
  {
    id: 5,
    title: 'Tiramisu',
    description: 'Classic Italian coffee-flavored dessert',
    category: 'desserts',
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake at 350°F for 25 minutes'
    ]
  }
];

const getRecipesCategory=(category)=>{
   
    switch(category){
        case 'dinner':
           return 'bg-rose-100 text-rose-600'
        case 'lunch':
           return 'bg-yellow-100 text-yellow-600'
        case 'breakfast':
           return 'bg-amber-100 text-amber-600'
        case 'desserts':
           return 'bg-sky-100 text-sky-600'
    }
}

const Recipes = () => {
  return (
    <div className="bg-gray-100 w-full h-screen ">
      <div className="max-w-4xl mx-auto  p-8">
        <h1 className="text-4xl font-bold capitalize">all recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
           {
             recipes.map(recipe => (
              <Link
                key={recipe.id}
                to={`/recipes/${recipe.id}`}
                className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6"
              >
                <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>
                <span className={`${getRecipesCategory(recipe.category)} p-2 rounded-lg`}>{recipe.category}</span>
              </Link>
            ))
            }
        </div>
      </div>
    </div>
  )
}

export default Recipes
