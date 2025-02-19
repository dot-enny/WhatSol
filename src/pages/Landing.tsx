import { useEffect, useRef, useState } from "react";
import { classNames } from "../utils/helpers";
import { Link } from "react-router-dom";
import CountUp from "../components/CountUp";

const Landing = () => {
  return (
    <div className="bg-[#131313] text-white max-w-[1440px] mx-auto">
      <Hero />
      <Steps />
      <WhyChooseSol />
      <Metrics />
      <img src="/assets/illustrations/token-illustration.svg" alt="" className="mx-auto max-sm:p-2 mt-32" />
      <SignUpCTA />
      <FAQs />
      <Footer />
    </div>
  );
};

const TopBar = () => {
  return (
    <div className="md:pt-8">
      <div className="flex max-sm:justify-between items-center max-sm:p-4 md:p-1 md:bg-black md:rounded-full">
        <img src="/assets/logo.svg" alt="" />
        <img src="/assets/icons/bar3.svg" alt="" className="md:hidden" />
        <span className="ml-auto max-sm:hidden">How it Works</span>
        <span className="mx-5 max-sm:hidden">Key Features</span>
        <Link to="/signup" className="max-sm:hidden bg-[#0DC143] pl-5 pr-1 py-1 max-sm:text-sm rounded-full flex items-center gap-x-4 max-sm:mx-auto">
          <span className="flex-1">Get Started</span>
          <img src="/assets/icons/right-arrow.svg" alt="" />
        </Link>
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="hero-bg max-2xl:min-h-screen min-h-[50vw] md:w-[90%] md:mx-auto grid">
      <TopBar />
      <div className="text-white max-sm:text-center max-w-[32ch] md:max-w-[49ch] px-5 max-sm:mx-auto">
        <h1 className="text-[2.5rem] md:text-[5.625rem] leading-[3.15rem] md:leading-[5.813rem] font-bold">Send Solana Instantly</h1>
        <p className="text-sm leading-[1.103rem] font-medium mt-3 mb-5 md:mt-5 md:mb-7 md:text-lg md:leading-[1.418rem]">WhatSOL makes sending SOL as easy as sending a message. No complicated wallets, no confusing interfaces</p>
        <Link to="/signup" className="bg-[#0DC143] w-fit pl-5 pr-1 py-1 max-sm:text-sm rounded-full flex items-center gap-x-4 max-sm:mx-auto">
          <span className="flex-1">Get Started</span>
          <img src="/assets/icons/right-arrow.svg" alt="" />
        </Link>
      </div>
    </div>
  )
}

const Steps = () => {
  return (
    <div className="px-4 md:w-[90%] mx-auto mt-24">
      <h2 className="text-[2.188rem] md:text-[3.15rem] leading-[2.756rem] md:leading-[4.275rem] mb-5">Effortless SOL transfers in <br /> <span className="text-[#0DC143]">3 Simple Steps</span></h2>
      <div className="grid gap-6 md:grid-cols-3">
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
    <div className="my-44">
      <h2 className="px-4 md:w-[90%] mx-auto text-[2.188rem] leading-[2.756rem] mb-5">Why Choose <span className="text-[#0DC143]">WhatSOL?</span></h2>
      <div className="overflow-y-auto no-scrollbar pointer-events-none">
        <div className="flex gap-5 w-fit slide-track">
          {whyChooseSol.map((item, index) => (
            <WhyChooseSolItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

const WhyChooseSolItem = ({ title, description, bgImg }: { title: string, description: string, bgImg: string }) => {
  return (
    <div
      className="p-8 pt-44 rounded-lg min-w-[314px]"
      style={{ background: `url('/assets/bg/${bgImg}') no-repeat`, backgroundColor: '#008829', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  )
}

const Metrics = () => {
  const statsRef = useRef<HTMLElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsMounted(true);
      } else {
        setIsMounted(false);
      }
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    };

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div ref={statsRef as React.Ref<HTMLDivElement>} className="bg-[#0859F4] max-sm:m-4 md:w-[90%] mx-auto rounded-[1.25rem] metrics-bg flex flex-col p-4 pb-20">
      <span className="bg-[#0DC143] font-bold text-[2.188rem] rounded-full px-1 mx-auto">Metrics</span>
      <div className="md:flex justify-center gap-x-16 mt-10">
        <div className="flex flex-col items-center">
          <span className="[font-family:var(--Anton)] text-[6.25rem]">
            <CountUp end={1200} isMounted={isMounted} />
          </span>
          <span className="text-lg font-bold">Website visits</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="[font-family:var(--Anton)] text-[6.25rem]">
            <CountUp end={890} isMounted={isMounted} />
          </span>
          <span className="text-lg font-bold">Transactions completed</span>
        </div>
      </div>
    </div>
  )
}

const SignUpCTA = () => {
  return (
    <div className="text-center text-balance pt-20 pb-10 m-4 bg-[#0859F4] rounded-[1.25rem] mt-36 md:w-[80%] md:mx-auto md:rounded-[1.875rem]" style={{ backgroundImage: `url('/assets/bg/web-pattern.svg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <span className="text-[2.188rem] md:text-[3.125rem] leading-[2.756rem] md:leading-[3.938rem] font-bold">Ready to <span className="bg-[#0DC143] rounded-full text-nowrap px-1">Send SOL</span> <br /> the Easy Way</span>
      <button className="bg-[#0DC143] pl-5 pr-1 py-1 text-sm rounded-full flex items-center gap-x-4 mx-auto mt-10">
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
    <div className="px-4 mt-32 md:w-[70%] mx-auto">
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
    <div className={classNames('p-5 rounded-lg bg-[#FFFFFF12]', isOpen ? 'border border-[#0DC143]' : '')}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm md:text-lg font-medium">{question}</h3>
        <button
          className="cursor-pointer"
          onClick={() => setActiveIndex(index === activeIndex ? null : index)}
        >
          {isOpen ? <img src="/assets/icons/circle-minus.svg" alt="" /> : <img src="/assets/icons/circle-plus.svg" alt="" />}
        </button>
      </div>
      <div className={classNames('grid transition-[grid-template-rows_500ms]', isOpen ? 'grid-rows-[1fr] py-6' : 'grid-rows-[0fr]')}>
        <div className="overflow-hidden">
          <p className="text-sm leading-[1.5rem] max-w-[40ch] text-balance">{answer}</p>
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="text-center mt-44 md:w-[90%] mx-auto">
      <div className="bg-[#0859F4] rounded-3xl pt-32 pb-10 footer-bg">
        <img src="/assets/logo-icon.svg" alt="" className="mx-auto" />
        <h2 className="text-[2.5rem] leading-[3.15rem]">Send Solana <br /> Instantly</h2>
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

const whyChooseSol = [
  {
    title: 'Lightning-Fast Transactions',
    description: 'Send SOL instantly, no more waiting',
    bgImg: 'lightning-fast-transactions.svg',
  },
  {
    title: 'Secure & Reliable',
    description: "Built on the robust Solana blockchain, your transactions are safe and secure",
    bgImg: 'secure-and-reliable.svg',
  },
  {
    title: 'Easy to Use',
    description: "Send SOL just like sending a WhatsApp message.  No technical knowledge required",
    bgImg: 'easy-to-use.svg',
  },
  {
    title: 'Low Fees',
    description: "Enjoy minimal transaction fees on the Solana network",
    bgImg: 'low-fees.svg',
  },
  {
    title: 'Global Access',
    description: "Send SOL to anyone, anywhere in the world, with a WhatsApp account",
    bgImg: 'global-access.svg',
  },

  {
    title: 'Lightning-Fast Transactions',
    description: 'Send SOL instantly, no more waiting',
    bgImg: 'lightning-fast-transactions.svg',
  },
  {
    title: 'Secure & Reliable',
    description: "Built on the robust Solana blockchain, your transactions are safe and secure",
    bgImg: 'secure-and-reliable.svg',
  },
  {
    title: 'Easy to Use',
    description: "Send SOL just like sending a WhatsApp message.  No technical knowledge required",
    bgImg: 'easy-to-use.svg',
  },
  {
    title: 'Low Fees',
    description: "Enjoy minimal transaction fees on the Solana network",
    bgImg: 'low-fees.svg',
  },
  {
    title: 'Global Access',
    description: "Send SOL to anyone, anywhere in the world, with a WhatsApp account",
    bgImg: 'global-access.svg',
  },

]
