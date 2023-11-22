import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotal: localStorage.getItem("cartTotal")
    ? JSON.parse(localStorage.getItem("cartTotal"))
    : 0,
  totalItems: localStorage.getItem("totalItems")
    ? JSON.parse(localStorage.getItem("totalItems"))
    : 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (cart.length === 14) return toast.error("Cart limit exceed");

      const course = action.payload;
      const courseIndex = state.cart.findIndex(
        (currItem) => currItem._id === course._id
      );

      // if the courseIndex id returns -1 it means that the course is not present in the cart if it returns the index number it means that the course is already added in the cart.

      if (courseIndex >= 0)
        return toast.error("Course already present in cart");

      state.cart.push(course);
      state.totalItems++;
      state.cartTotal += course.price;

      // set the cart data in the local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems));

      toast.success("Course added to cart 😁");
    },

    removeFromCart: (state, action) => {
      const courseId = action.payload;
      const courseIndex = state.cart.findIndex(
        (currItem) => currItem._id === courseId
      );

      if (courseIndex >= 0) {
        state.totalItems--;
        state.cartTotal -= state.cart[courseIndex].price;
        state.cart.splice(courseIndex, 1);

        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
        localStorage.setItem("totalItems", JSON.stringify(state.totalItems));

        toast.success("Course removed from cart");
      }
    },

    resetCart: (state) => {
      state.cart = [];
      state.cartTotal = 0;
      state.totalItems = 0;

      localStorage.removeItem("cart");
      localStorage.removeItem("cartTotal");
      localStorage.removeItem("totalItems");
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
