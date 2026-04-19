import Hero from "@/components/sections/Hero";
import LMBridge from "@/components/sections/LMBridge";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Video from "@/components/sections/Video";
import Faq from "@/components/sections/Faq";
import Financing from "@/components/sections/Financing";
import AskAssistant from "@/components/sections/AskAssistant";
import Journal from "@/components/sections/Journal";
import Visit from "@/components/sections/Visit";

export default function Home() {
  return (
    <>
      <Hero />
      <LMBridge />
      <BeforeAfter />
      <Video />
      <AskAssistant />
      <Faq />
      <Financing />
      <Journal />
      <Visit />
    </>
  );
}
