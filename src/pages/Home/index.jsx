import { addToCart, emptyCart, productList, removeToCart } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <div className="p-4">
      <div className="mb-4">
        <button
          onClick={() => dispatch(emptyCart())}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Empty Cart
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-lg">
            <img src={item.photo} alt={item.name} className="w-full h-40 object-cover mb-4 rounded" />
            <div className="font-bold text-lg mb-2">{item.name}</div>
            <div className="text-gray-700 mb-1">Color: {item.color}</div>
            <div className="text-gray-700 mb-1">Price: ${item.price}</div>
            <div className="text-gray-700 mb-1">Category: {item.category}</div>
            <div className="text-gray-700 mb-1">Brand: {item.brand}</div>
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => dispatch(addToCart(item))}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
              <button
                onClick={() => dispatch(removeToCart(item.id))}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
