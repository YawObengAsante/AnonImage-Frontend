import Heading from "../components/heading";
import MaxWidthWrapper from "../components/max-width-wrapper";
import {Button} from "@/components/ui/Button"
import { CgArrowRight } from "react-icons/cg";
import illustrationImg from "@/assets/undraw_photographer_2rbr.svg"

export default function LandingPage() {
  return (
    <section className="w-full h-screen bg-white/95">
      <MaxWidthWrapper className="flex gap-x-6">
        <div className="flex flex-col gap-y-5 justify-center">
          <Heading>
            <span>Anonymous Images,</span>
            <br />
            <span className="relative gradient-text">
              Delivered to Your Gallery
            </span>
          </Heading>
          <p className="text-2xl">
            Share Images. No names.{" "}
            <span className="font-semibold text-gray-700">No limits</span>
          </p>
          <p className="text-base text-gray-600 max-w-prose text-pretty">Upload and share images anonymously. No login. No tracking. Just pure freedom</p>
          <Button className="w-[150px] cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition-all ease-in-out duration-300">Get Started <CgArrowRight/></Button>
        </div>
        <div className="hidden md:block h-full">
          <img className="h-full" src={illustrationImg} alt="illustration image" />
        </div>
      </MaxWidthWrapper>
    </section> 
  );
}
