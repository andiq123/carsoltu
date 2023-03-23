import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import About from "@/components/about";
import Intro from "@/components/intro";
import Contact from "@/components/contact";

export default function Main() {
  return (
    <div>
      <Intro />
      <About />
      <div className="bg-base-200 h-5"></div>
      <Contact />
    </div>
  );
}
