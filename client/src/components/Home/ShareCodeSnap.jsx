import React from "react"
import reactSnap from "../../assets/react-code-snap.png"
import backendCodeSnap from "../../assets/backend-code-snap.png"
// import backendAuthCodeSnap from "../../assets/backend-auth-code-snap.png"
import Heading from "../common/Heading"
import HighLightText from "../common/HighLightText"
import meta from "../../assets/meta.png"
import instagram from "../../assets/instagram.png"
import snapchat from "../../assets/snapchat.png"
import twitter from "../../assets/twitter.png"


const ShareCodeSnap = () => {

  const heading = "CREATE            CODESNAP";
  const splittedHeading = heading.split("");

  const codeSnap = [reactSnap , backendCodeSnap];
  const socialIcons = [meta, instagram, snapchat, twitter];

  return (
    <>
      <div className="w-[100%] h-max mx-auto md:2xl:w-[75%] p-2 flex md:gap-8 gap-2 mt-6">

        <div className="w-fit flex flex-col justify-start flex-wrap">
          {splittedHeading.map((item, index) => {
            return (
              <div key={index} className="text-center mb-1 rotate-[90deg]">
                <HighLightText
                  color="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-[#d60d7f]"
                  size="text-4xl font-extrabold md:text-7xl">
                  {item}
                </HighLightText>
              </div>
            );
          })}
        </div>

        {/* code snap */}
        <div className="md:w-[95%] flex gap-16 justify-evenly md:mt-5 flex-col lg:flex-row items-center lg:items-start">

            {/* code images */}
            <div className="w-max flex flex-col gap-6 md:ml-16">
                {
                    codeSnap.map((item, index) => {
                        return <div className={`max-[420px]:w-[180px] w-[320px] md:w-[400px] h-fit ${index === 0 ? 'rotate-[3deg]' : '-rotate-[12deg]'}  hover:-translate-y-[10px] transition-all ease-linear duration-150 cursor-pointer`}>
                            <img src={item} alt="code image" className="w-[100%] h-[100%] object-center object-contain" />
                        </div>
                    })
                }
            </div>

            {/* para and icons */}
            
            <div className="flex flex-col lg:ml-12 lg:gap-8 items-center lg:items-start">

                <Heading style="text-3xl md:text-6xl xl:text-8xl font-extrabold lg:tracking-wide leading-normal lg:leading-loose" >Share your <HighLightText color="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-[#d60d7f]">CodeSnap</HighLightText> with other and show your <HighLightText color="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-[#d60d7f]">progress.</HighLightText></Heading>

                {/* social icons */}
                <div className="p-2 flex gap-8 rounded-md w-fit mt-6">
                    {
                        socialIcons.map((item, index) => {
                            return <div className="p-2" key = {index}>
                                <img src={item} alt={`${item} icon`} className="w-[30px] md:w-[50px] transition-all duration-100 ease-linear grayscale-[100%] hover:grayscale-0 cursor-pointer" />
                            </div>
                        })
                    }
                </div>
            </div>
            
        </div>

      </div>
    </>
  );
};

export default ShareCodeSnap;
