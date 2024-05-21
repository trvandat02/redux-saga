import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    let amount = cartData.length && cartData.map(item => item.price).reduce((prev, next) => prev + next);

    return (
        <div className="container mx-auto py-8">
            <Link to="/" className="text-blue-500 hover:text-blue-700">Go to Home</Link>
            <h1 className="text-3xl font-semibold mt-4 mb-8">Cart Page</h1>
            <div className="cart-page-container">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Color</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Brand</th>
                            <th className="px-4 py-2">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartData.map((item) => (
                            <tr key={item.key} className="border-b">
                                <td className="px-4 py-2">{item.name}</td>
                                <td className="px-4 py-2">{item.color}</td>
                                <td className="px-4 py-2">{item.price}</td>
                                <td className="px-4 py-2">{item.brand}</td>
                                <td className="px-4 py-2">{item.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="price-details mt-8">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Amount</span>
                        <span>${amount}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Discount</span>
                        <span>${amount / 10}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Tax</span>
                        <span>$0</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Total</span>
                        <span>${amount - (amount / 10)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
