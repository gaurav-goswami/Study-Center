import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import { useSelector } from "react-redux";
import Button from "../common/Button";

const CartTotal = () => {
  const { cartTotal } = useSelector((state) => state.cart);

  return (
    <>
      <div className="flex flex-col bg-richblack-800 p-4">
        <Heading style="text-lg md:text-xl text-pure-greys-200">Total:</Heading>
        <Paragraph
          color="text-yellow-100"
          styles="text-xl md:text-2xl font-semibold"
        >
          {cartTotal}
        </Paragraph>
        <Button path="/" styles="bg-yellow-200">
          Buy Now
        </Button>
      </div>
    </>
  );
};

export default CartTotal;
