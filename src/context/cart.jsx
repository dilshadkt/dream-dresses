/* eslint-disable no-case-declarations */
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import {
  ADD_NOTE_TO_ITEM,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ENTIRE_ITEM,
  REMOVE_FROM_CART,
} from "../constants";
import UseToastNotification from "../hooks/UseToastNotification";

const initialValue = {
  items: [],
  totalQuantity: 0,
};
// Utility function to get cart data from localStorage
const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    const cart = JSON.parse(storedCart);
    return cart;
  } else {
    return initialValue;
  }
};

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, title } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === id && item.title === title
      );

      if (existingItemIndex > -1) {
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          totalQuantity: state.totalQuantity + 1,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalQuantity: state.totalQuantity + 1,
        };
      }
    case REMOVE_FROM_CART: {
      const { id, title } = action.payload;

      let itemToRemove;
      // if (title) {
      //   itemToRemove = state.items.find(
      //     (item) =>
      //       item.ProductID === productId &&
      //       item.ProductVariants?.VariantID === variantId
      //   );
      // } else {
      itemToRemove = state.items.find((item) => item.id === id);
      // }

      if (!itemToRemove) return state;

      let updatedItems;
      if (itemToRemove.quantity > 1) {
        // Decrease quantity if more than 1
        updatedItems = state.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // Remove item completely if quantity is 1
        updatedItems = state.items.filter((item) => !(item.id === id));
      }

      return {
        ...state,
        items: updatedItems,
        totalQuantity: state.totalQuantity - 1,
      };
    }

    case REMOVE_ENTIRE_ITEM: {
      const { id } = action.payload;
      let itemsToRemove;
      itemsToRemove = state.items.filter((item) => item.id === id);
      const quantityOfRemovedItems = itemsToRemove.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const updatedItems = state.items.filter((item) => {
        return item.id !== id;
      });

      return {
        ...state,
        items: updatedItems,
        totalQuantity: state.totalQuantity - quantityOfRemovedItems,
      };
    }
    case ADD_NOTE_TO_ITEM: {
      const { productId, variantId, note } = action.payload;
      const updatedItems = state.items.map((item) => {
        if (
          item.ProductID === productId &&
          (!variantId || item.ProductVariants?.VariantID === variantId)
        ) {
          return { ...item, note };
        }
        return item;
      });
      return { ...state, items: updatedItems };
    }
    case CLEAR_CART:
      return initialValue;

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, getCartFromLocalStorage());
  const [isCartModalOpen, setCartModal] = useState(false);
  const [isAddressModalOpen, setAddressModalOpen] = useState(false);
  const { showToast } = UseToastNotification();

  // Store cart data in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const addToCart = useCallback(
    (item) => {
      dispatch({ type: ADD_TO_CART, payload: item });
      showToast("Added");
    },
    [showToast]
  );

  const removeFromCart = useCallback(
    (data) => {
      dispatch({ type: REMOVE_FROM_CART, payload: data });
      showToast("Removed");
    },
    [showToast]
  );
  const removeEntireItem = useCallback(
    (data) => {
      dispatch({ type: REMOVE_ENTIRE_ITEM, payload: data });
      showToast("Removed");
    },
    [showToast]
  );

  const clearCart = useCallback(() => {
    dispatch({ type: CLEAR_CART });
  }, []);

  const subtotal = useMemo(() => {
    return state.items.reduce((total, item) => {
      return total + parseFloat(item.price) * item.quantity;
    }, 0);
  }, [state.items]);
  // const subtotal = useMemo(() => {
  //   return state.items.reduce((total, item) => {
  //     return (
  //       total +
  //       parseFloat(item.Price - (item.Price * item.Discount) / 100) *
  //         item.quantity
  //     );
  //   }, 0);
  // }, [state.items]);

  // const grandTotal = useMemo(() => {
  //   return state.items.reduce((total, item) => {
  //     return total + parseFloat(item.Price) * item.quantity;
  //   }, 0);
  // }, [state.items]);
  // const addNoteToItem = useCallback(
  //   (productId, variantId, note) => {
  //     dispatch({
  //       type: ADD_NOTE_TO_ITEM,
  //       payload: { productId, variantId, note },
  //     });
  //   },
  //   [showToast]
  // );

  const handleAddressModal = () => {
    setCartModal(false);
    setAddressModalOpen(true);
  };

  const value = {
    items: state.items,
    totalQuantity: state.totalQuantity,
    isCartModalOpen,
    isAddressModalOpen,
    subtotal,
    // grandTotal,
    setCartModal,
    addToCart,
    removeFromCart,
    removeEntireItem,
    clearCart,
    setAddressModalOpen,
    handleAddressModal,
    // addNoteToItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
