import React from "react";
import DashboardWrapper from "../../components/Wrapper/DashboardWrapper";
import { useSelector } from "react-redux";
import Paragraph from "../../components/common/Paragraph";
import Button from "../../components/common/Button";
import CartItem from "../../components/Dashboard/CartItem";
import CartTotal from "../../components/Dashboard/CartTotal";

const Cart = () => {
  let { totalItems, cart } = useSelector((state) => state.cart);

  totalItems = [{ id: "1", item: "laptop" }];

  return (
    <>
      <DashboardWrapper>
        <div className="w-full md:w-[80%] lg:w-[70%] mx-auto p-6">
          {totalItems > 0 ? (
            <div className="flex w-full md:w-[100%] lg:w-[70%] mx-auto gap-2 md:flex-row flex-col">

              <div className="flex flex-col gap-2 md:w-[80%]">
                {cart.map((cartItem, index) => {
                  return <CartItem key={index} {...cartItem} />;
                })}
              </div>

              <CartTotal />

            </div>
          ) : (
            <div className="flex h-screen items-center justify-center flex-col gap-4">
              <Paragraph color="text-pure-greys-200 text-xl md:text-3xl md:font-semibold">
                Your Cart is Empty 🥲
              </Paragraph>
              <Button path="/courses" styles="bg-yellow-200">
                Explore Courses
              </Button>
            </div>
          )}
        </div>
      </DashboardWrapper>
    </>
  );
};

export default Cart;
