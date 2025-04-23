import Heading from "../components/heading";
import MaxWidthWrapper from "../components/max-width-wrapper";
import { FeatureCard } from "../components/feature-card";
import { StepItem } from "../components/step-item";
import { Footer } from "../components/footer";
import { STEPS } from "@/lib/constants";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CgArrowRight } from "react-icons/cg";
import illustrationImg from "@/assets/undraw_photographer_2rbr.svg";
import {
  FaShieldAlt,
  FaRocket,
  FaChartLine,
  FaUserSecret,
} from "react-icons/fa";
import { MdOutlinePrivacyTip, MdOutlinePhotoLibrary } from "react-icons/md";
import { useEffect } from "react";
import axiosInstance from "../axiosInstance";

// Data
const features = [
  {
    icon: <FaUserSecret />,
    title: "Complete Anonymity",
    description:
      "No user accounts, no personal data collected. Your identity stays private.",
  },
  {
    icon: <MdOutlinePrivacyTip />,
    title: "End-to-End Privacy",
    description:
      "Images are encrypted and never linked to your identity in any way.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Sharing",
    description:
      "Military-grade encryption protects your images during transfer.",
  },
  {
    icon: <MdOutlinePhotoLibrary />,
    title: "Gallery Access",
    description:
      "View all your shared images in one convenient, private gallery.",
  },
  {
    icon: <FaRocket />,
    title: "Lightning Fast",
    description:
      "Upload and share images in seconds with our optimized platform.",
  },
  {
    icon: <FaChartLine />,
    title: "No Limits",
    description: "Share as many images as you want with no restrictions.",
  },
];

export default function LandingPage() {

  const getId = () => {
    const user_status = localStorage.getItem("access_token")
    if(user_status){
      axiosInstance
      .get(`api/imaging/dashboard/`, {
        headers: {
          Authorization: "JWT " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
      localStorage.setItem("user_name", res.data.name);
      localStorage.setItem("user_id", res.data.id);


        console.log(res.data)
        
      })
      .catch((e) => {
        console.log("login", e);
        console.log("something is wrong");
      });
    }
    return;
  };

  useEffect(()=>{
    getId()
  },[])
  return (
    <div className="w-full bg-white/95">
      {/* Hero Section */}
      <section className="w-full min-h-screen pt-5">
        <MaxWidthWrapper>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="order-2 md:order-1 flex flex-col gap-y-5 md:justify-center">
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
              <p className="text-base text-gray-600 max-w-prose text-pretty">
                Upload and share images anonymously. No login. No tracking. Just
                pure freedom
              </p>
              <Link to="/dashboard">
                <Button className="w-[150px] cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition-all ease-in-out duration-300">
                  Get Started <CgArrowRight />
                </Button>
              </Link>
            </div>
            {/* illustration image */}
            <div className="order-1 flex justify-center">
              <img
                className="h-[300px] md:h-[500px]"
                src={illustrationImg}
                alt="illustration image"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-gray-50">
        <MaxWidthWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the freedom of truly anonymous image sharing with our
              unique features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20">
        <MaxWidthWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to share your images anonymously
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <img
                src={illustrationImg}
                alt="How it works"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="flex-1 space-y-8">
              {STEPS.map((step, index) => (
                <StepItem key={index} number={index + 1} {...step} />
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-blue-500 text-white">
        <MaxWidthWrapper>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Share Anonymously?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of users who value their privacy while sharing
              images
            </p>
            <Link to="/dashboard">
              <Button className="px-8 py-6 text-lg bg-white text-blue-500 hover:bg-gray-100 transition-all ease-in-out duration-300">
                Get Started Now <CgArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
