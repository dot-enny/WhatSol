import { useState } from "react";
import { classNames } from "../utils/helpers";

const Landing = () => {
  return (
    <div className="bg-[#131313] min-h-screen text-white">
      <Hero />
      <Steps />
      <WhyChooseSol />
      <img src="/assets/illustrations/token-illustration.svg" alt="" />
      <SignUpCTA />
      <FAQs />
      <Footer />
    </div>
  );
};

const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <img src="/assets/logo.svg" alt="" />
      <img src="/assets/icons/bar3.svg" alt="" />
    </div>
  )
}

const Hero = () => {
  return (
    <div className="hero-bg min-h-screen">
      <TopBar />
      <div className="text-white text-center max-w-[32ch] px-5 mx-auto pt-20">
        <h1 className="text-[2.5rem] leading-[3.15rem] font-bold">Send Solana Instantly</h1>
        <p className="text-sm font-medium mt-3 mb-5">WhatSOL makes sending SOL as easy as sending a message. No complicated wallets, no confusing interfaces</p>
        <button className="bg-[#0DC143] pl-5 pr-1 py-1 text-sm rounded-full flex items-center gap-x-4 mx-auto">
          <span className="flex-1">Get Started</span>
          <img src="/assets/icons/right-arrow.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

const whyChooseSol = [
  {
    title: 'Lightning-Fast Transactions',
    description: 'Send SOL instantly, no more waiting',
    bgColor: '#0DC143',
    bgImg: 'world-web.svg',
  },
  {
    title: 'Secure & Reliable',
    description: "Built on the robust Solana blockchain, your transactions are safe and secure",
    bgColor: '#0DC143',
    bgImg: 'squigly-line.svg',
  },
  {
    title: 'Easy to Use',
    description: "Send SOL just like sending a WhatsApp message.  No technical knowledge required",
    bgColor: '#008829',
    bgImg: '3d-hexagon.svg',
  },
  {
    title: 'Low Fees',
    description: "Enjoy minimal transaction fees on the Solana network",
    bgColor: '#008829',
    bgImg: '3d-hexagon.svg',
  },
  {
    title: 'Global Access',
    description: "Send SOL to anyone, anywhere in the world, with a WhatsApp account",
    bgColor: '#008829',
    bgImg: '3d-hexagon.svg',
  },
]

const Steps = () => {
  return (
    <div className="px-4">
      <h2 className="text-[2.188rem] leading-[2.756rem] mb-5">Effortless SOL transfers in <br /> <span className="text-[#0DC143]">3 Simple Steps</span></h2>
      <div className="grid gap-6">
        <Step title="Connect Your Wallet" description="Securely link your Solana wallet to WhatSOl in seconds." bgImg="world-web.svg" bgColor="#0DC143" />
        <Step title="Send SOL via WhatsApp" description="Type the amount and the recipient's phone number, then send!" bgImg="squigly-line.svg" bgColor="#0DC143" bgSize="cover" />
        <Step title="Instant Confirmation" description="Your SOL transfer is confirmed instantly on the Solana blockchain" bgImg="3d-hexagon.svg" bgColor="#008829" />
      </div>
    </div>
  )
}

const Step = ({ title, description, bgImg, bgSize = '', bgColor }: { title: string, description: string, bgImg: string, bgSize?: string, bgColor: string }) => {
  return (
    <div
      className="p-8 pt-44 rounded-lg"
      style={{ background: `url('/assets/bg/${bgImg}') no-repeat`, backgroundColor: bgColor, backgroundPosition: 'center', backgroundSize: bgSize }}>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  )
}

const WhyChooseSol = () => {
  return (
    <div className="px-4 my-44">
      <h2 className="text-[2.188rem] leading-[2.756rem] mb-5">Why Choose <span className="text-[#0DC143]">WhatSOL?</span></h2>
      <div className="overflow-y-auto no-scrollbar">
        <div className="flex gap-5 w-fit slide-track">
          {whyChooseSol.map((item, index) => (
            <WhyChooseSolItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

const WhyChooseSolItem = ({ title, description, bgColor, bgImg }: { title: string, description: string, bgColor: string, bgImg: string }) => {
  return (
    <div
      className="p-8 pt-44 rounded-lg min-w-[314px]"
      style={{ background: `url('/assets/bg/${bgImg}') no-repeat`, backgroundColor: bgColor, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  )
}

const SignUpCTA = () => {
  return (
    <div className="text-center text-balance py-20 m-4 bg-[#0859F4] rounded-lg mt-36" style={{ backgroundImage: `url('/assets/bg/web-pattern.svg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <span className="text-[2.188rem] font-bold">Ready to <span className="bg-[#0DC143] rounded-full text-nowrap px-1">Send SOL</span> the Easy Way</span>
      <button className="bg-[#0DC143] pl-5 pr-1 py-1 text-sm rounded-full flex items-center gap-x-4 mx-auto">
        <span className="flex-1">Get Started Now</span>
        <img src="/assets/icons/right-arrow.svg" alt="" />
      </button>
    </div>
  )
}

const questions = [
  { question: 'How does WhatSOL work?', answer: 'Yes, security is our top priority. WhatSOl uses secure wallet connection methods (like WalletConnect) to link your wallet. We never store your private keys.  All transactions are processed on the secure Solana blockchain, ensuring the safety of your funds.' },
  { question: 'Is WhatSOL secure?', answer: 'Yes, security is our top priority. WhatSOl uses secure wallet connection methods (like WalletConnect) to link your wallet. We never store your private keys.  All transactions are processed on the secure Solana blockchain, ensuring the safety of your funds.' },
  { question: 'What fees are involved?', answer: 'Yes, security is our top priority. WhatSOl uses secure wallet connection methods (like WalletConnect) to link your wallet. We never store your private keys.  All transactions are processed on the secure Solana blockchain, ensuring the safety of your funds.' },
  { question: ' Do I need a special WhatsApp account to use WhatSOl?', answer: 'Yes, security is our top priority. WhatSOl uses secure wallet connection methods (like WalletConnect) to link your wallet. We never store your private keys.  All transactions are processed on the secure Solana blockchain, ensuring the safety of your funds.' },
]

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="px-4 mt-32">
      <h2 className="text-[2.188rem] leading-[2.756rem] mb-5">FAQs</h2>
      <div className="grid gap-6">
        {questions.map((item, index) => (
          <FAQ key={index} question={item.question} answer={item.answer} index={index} isOpen={index === activeIndex} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        ))}
      </div>
    </div>
  )
}

const FAQ = ({ question, answer, isOpen, index, activeIndex, setActiveIndex }: { question: string, answer: string, isOpen: boolean, index: number, activeIndex: number | null, setActiveIndex: (index: number | null) => void }) => {

  return (
    <div className="p-5 rounded-lg bg-[#FFFFFF12]">
      <div className="flex items-center justify-between">
        <h3 className="text-sm md:text-lg font-medium">{question}</h3>
        <img src="/assets/icons/circle-plus.svg" alt="" className="cursor-pointer" onClick={() => setActiveIndex(index === activeIndex ? null : index)} />
      </div>
      <div className={classNames('grid transition-[grid-template-rows_500ms]', isOpen ? 'grid-rows-[1fr] py-6' : 'grid-rows-[0fr]')}>
        <div className="overflow-hidden">
          <p className="text-sm leading-[1.5rem]">{answer}</p>
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="text-center mt-44">
      <div className="bg-[#0859F4] rounded-3xl pt-32 pb-10" style={{ backgroundImage: `url('/assets/bg/footer-bg.svg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center 50px', backgroundSize: '' }}>
        <img src="/assets/logo-icon.svg" alt="" className="mx-auto" />
        <h2 className="text-[2.5rem] leading-[3.15rem]">Send Solana Instantly</h2>
        <div className="flex gap-x-6 justify-center mt-20">
          <span>How it Works</span>
          <span>Key features</span>
        </div>
        <div className="flex flex-col gap-y-2 justify-center mt-14">
          <span>Socials</span>
          <div className="flex gap-x-6 justify-center">
            <img src="/assets/icons/twitter.svg" alt="" className="size-10" />
            <img src="/assets/icons/telegram.svg" alt="" className="size-10" />
            <img src="/assets/icons/discord.svg" alt="" className="size-10" />
            <img src="/assets/icons/github.svg" alt="" className="size-10" />
          </div>
        </div>
      </div>
      <div className="font-medium py-10">Copyright 2025, WhatSOL All Rights Reserved.</div>
    </footer>
  )
}

export default Landing;
