"use client";

import React from "react";
import { motion } from "framer-motion";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";

export default function Home() {
  const words = [
    {
      text: "Spread",
    },
    {
      text: "your",
    },
    {
      text: "knowledge",
    },
    {
      text: "and",
    },
    {
      text: "be",
    },
    {
      text: "a",
    },
    {
      text: "part",
    },
    {
      text: "of",
    },
    {
      text: "a",
    },
    {
      text: "innovative",
    },
    {
      text: "Community!",
    },
  ];

  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <p className="text-neutral-200 dark:text-neutral-200 sm:text-base md:hidden xl:hidden 2xl:hidden lg:hidden">
          Spread your knowledge <br /> and be a part of a innovative Community! 
          </p>
          <TypewriterEffectSmooth words={words} className="md:ml-2" />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 md:ml-[84px]">
            <Link href="/sign-in">
              <button className="w-40 h-10 rounded-xl bg-black border border-white dark:border-white border-transparent text-white text-sm hover:bg-white hover:text-black">
                Join now
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm hover:bg-black hover:text-white">
                Signup
              </button>
            </Link>
          </div>
        </motion.h1>
      </LampContainer>
      <div className="flex flex-col items-center justify-center h-[40rem]"></div>
    </>
  );
}
