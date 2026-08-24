"use client";

import {useEffect} from "react";

export default function ScrollReveal(){
  useEffect(()=>{
    const root=document.documentElement;
    const items=Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    root.classList.add("sg-js");

    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
      items.forEach(item=>item.classList.add("is-revealed"));
      return ()=>root.classList.remove("sg-js");
    }

    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.12,rootMargin:"0px 0px -8% 0px"});

    items.forEach(item=>observer.observe(item));
    return ()=>{observer.disconnect();root.classList.remove("sg-js")};
  },[]);

  return null;
}
