import { Link } from 'react-router-dom'

const Menu = () => {
  const menuItems = [
    {
      name: 'Italian Loaf',
      price: '$10',
      description:
        'Ham, pepperoni, onions, and mozzarella cheese baked on a 10-inch loaf.',
    },
    {
      name: 'Potato Skins',
      price: '$14',
      description:
        'You get an abundance of these tasty treats, topped with sour cream, baked cheese and bacon bits.',
    },
    {
      name: 'Deep Fried Pickles',
      price: '$12',
      description:
        'Caution: Highly Addictive. Pickle skewers breaded and seasoned, then deep fried. Served with our dill sauce.',
    },
    {
      name: 'Donair Calzone',
      price: '$12',
      description:
        'Beef donair, caesar sauce, onions, tomatoes & mozza-cheddar. Served with a side of sweet sauce.',
    },
    {
      name: 'Bacon Mozza Cheddar Burger',
      price: '$9',
      description:
        'A thick and juicy beef patty topped with Mozza and Cheddar cheese, Bacon, Lettuce and Tomato with our homemade white sauce.',
    },
    {
      name: 'Beef Donair',
      price: '$10',
      description:
        'Donair meat, tomatoes, onions and lettuce served with Caesar, dill or east coast sweet sauce.',
    },
    {
      name: 'Buffalo Chicken Sandwich',
      price: '$12',
      description:
        'Seasoned chicken breast tossed in hot sauce and baked with cheese on a garlic loaf.',
    },
    {
      name: 'Steak or Chicken Fajita',
      price: '$12',
      description:
        'A flour tortilla stuffed with grilled Beef or Chicken breast, sautéed Onions, Peppers, Salsa and served with sour cream.',
    },
    // Add more menu items as needed
  ]

  return (
    <div className="opacity-90 bg-black text-white p-8 md:p-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl text-center mb-8 sm:mb-0">OUR MENU</h1>

        <div className="p-8 text-center relative hidden sm:block">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 border-t-2 border-white w-1/4"></div>
          <span className="text-2xl">Get Relax. Eat.</span>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 border-t-2 border-white w-1/4"></div>
        </div>

        <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-52 gap-y-8 mx-auto">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-4 text-justify">
              <h2 className="text-xl">
                {item.name} - {item.price}
              </h2>
              <p className="text-sm font-light">{item.description}</p>
            </div>
          ))}
        </div>
        <Link
          to="https://boondocks2.popmenu.com/#menu?location=boondocks"
          rel="noreferrer"
          target="_blank"
        >
          <button className="block text-md border border-white p-2 mx-auto mt-4 hover:bg-white hover:text-black">
            VIEW ALL MENU
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Menu
