"use client";

import {useEffect,useRef,useState,type ReactNode} from "react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {Moon,Sun} from "lucide-react";
import Lenis from "lenis";
import gsap from "gsap";

export function Experience(){
 const cursor=useRef<HTMLDivElement>(null);const halo=useRef<HTMLDivElement>(null);const progress=useRef<HTMLDivElement>(null);
 useEffect(()=>{const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;const coarse=window.matchMedia("(pointer: coarse)").matches;let frame=0;let lenis:Lenis|undefined;
  if(!reduce){lenis=new Lenis({duration:1.05,smoothWheel:true,wheelMultiplier:.9});const raf=(time:number)=>{lenis?.raf(time);frame=requestAnimationFrame(raf)};frame=requestAnimationFrame(raf);lenis.on("scroll",({progress:amount}:{progress:number})=>{if(progress.current)progress.current.style.transform=`scaleX(${amount})`});gsap.to(".v-float-shape",{y:-18,rotation:8,duration:3.8,ease:"sine.inOut",repeat:-1,yoyo:true,stagger:.45});}
  const move=(event:PointerEvent)=>{document.documentElement.style.setProperty("--pointer-x",`${event.clientX}px`);document.documentElement.style.setProperty("--pointer-y",`${event.clientY}px`);const nx=event.clientX/window.innerWidth-.5;const ny=event.clientY/window.innerHeight-.5;document.documentElement.style.setProperty("--parallax-x",`${nx*22}px`);document.documentElement.style.setProperty("--parallax-y",`${ny*16}px`);if(!coarse){cursor.current?.style.setProperty("transform",`translate3d(${event.clientX}px,${event.clientY}px,0)`);halo.current?.style.setProperty("transform",`translate3d(${event.clientX}px,${event.clientY}px,0)`);}};
  window.addEventListener("pointermove",move,{passive:true});return()=>{window.removeEventListener("pointermove",move);if(frame)cancelAnimationFrame(frame);lenis?.destroy();gsap.killTweensOf(".v-float-shape")}},[]);
 return <><div className="v-scroll-progress" ref={progress}/><div className="v-cursor" ref={cursor}/><div className="v-cursor-halo" ref={halo}/></>;
}

export function RevealSection({children,className,id,ariaLabel}:{children:ReactNode;className:string;id?:string;ariaLabel?:string}){return <motion.section className={className} id={id} aria-label={ariaLabel} initial={{opacity:0,y:52}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.72,ease:[.2,.75,.25,1]}}>{children}</motion.section>}

export function CountUp({to,suffix=""}:{to:number;suffix?:string}){const {ref,inView}=useInView({triggerOnce:true,threshold:.45});const [value,setValue]=useState(0);useEffect(()=>{if(!inView)return;const duration=1200;const begin=performance.now();let frame=0;const tick=(now:number)=>{const progress=Math.min((now-begin)/duration,1);setValue(Math.round(to*(1-Math.pow(1-progress,3))));if(progress<1)frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame)},[inView,to]);return <strong ref={ref}>{value}{suffix}</strong>}

export function ThemeToggle(){const [dark,setDark]=useState(false);useEffect(()=>{const saved=localStorage.getItem("sudarshan-theme");const next=saved? saved==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.dataset.theme=next?"dark":"light";const frame=requestAnimationFrame(()=>setDark(next));return()=>cancelAnimationFrame(frame)},[]);const toggle=()=>{const next=!dark;setDark(next);document.documentElement.dataset.theme=next?"dark":"light";localStorage.setItem("sudarshan-theme",next?"dark":"light")};return <button className="v-theme" type="button" onClick={toggle} aria-label={dark?"Use light theme":"Use dark theme"}>{dark?<Sun size={17}/>:<Moon size={17}/>}</button>}
