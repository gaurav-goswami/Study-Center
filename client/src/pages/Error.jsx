import React from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import Button from "../components/common/Button";
import Paragraph from "../components/common/Paragraph";
import ScreenWrapper from "../components/Wrapper/ScreenWrapper";

const Error = () => {
  return (
    <>
      <ScreenWrapper>
        <MainWrapper>
          <div className="flex flex-col gap-4 flex-wrap mx-auto items-center justify-center h-screen">
            <Paragraph styles="text-4xl">Oops Wrong Page! 🥲</Paragraph>
            <Button styles="w-fit bg-yellow-200 my-4" path="/">
              Back to home
            </Button>
          </div>
        </MainWrapper>
      </ScreenWrapper>
    </>
  );
};

export default Error;
