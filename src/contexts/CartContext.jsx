import { useState, createContext, useEffect } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // item amount state
  const [itemamount, setItemAmount] = useState(0);

  // total price state
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // get total price
    const price = cart.reduce((acc, product) => {
      return acc + product.price * product.amount;
    }, 0);
    setTotalPrice(price);
  }, [cart]);

  // add product to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    // check if item is already in cart
    const itemInCart = cart.find((product) => {
      return product.id === id;
    });

    // if item is already in cart, increase amount by 1
    if (itemInCart) {
      const newCart = [...cart].map((product) => {
        if (product.id === id) {
          return { ...product, amount: product.amount + 1 };
        } // if product is not in cart, add product to cart
        else {
          return product;
        }
      });
      setCart(newCart);
    } else {
      // set cart with new item
      setCart([...cart, newItem]);
    }
  };

  // remove product from cart
  const removeFromCart = (id) => {
    // filter out product with matching id
    const newCart = [...cart].filter((product) => {
      // if product id matches id, remove product from cart
      return product.id !== id;
    });
    // set cart with new cart
    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const product = cart.find((product) => product.id === id);
    addToCart(product, id);
  };

  // decrease amount
  const decreaseAmount = (id) => {
    const product = cart.find((product) => product.id === id);
    if (product) {
      const newProduct = cart.map((product) => {
        if (product.id === id) {
          return { ...product, amount: product.amount - 1 };
        } else {
          return product;
        }
      });
      setCart(newProduct);
    }
    if (product.amount < 2) {
      removeFromCart(id);
    }
  };

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, product) => {
        return acc + product.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemamount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
