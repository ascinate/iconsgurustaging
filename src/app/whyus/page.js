"use client";
import { useEffect, useState } from "react";
import NavicationHome from "../components/NavicationHome";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Form from "next/form";


export default function whyus() {


  return (
    <>
      <Head>
        <title>Icons Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavicationHome/>
      <main className="float-start w-100 why-us01">
         <section className="tops-sections01 d-inline-block w-100">
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2 align-items-center">
                  <div className="col">
                      <div className="text-caraole-divb d-inline-block w-100">
                          <h2 className="tect-list"> Crafting Exceptional Visuals <span className="d-block"> for Every Creative Vision </span> </h2>
                          <p className="col-12 mt-4"> At IconsGuru, we believe great design starts with the right tools — and nothing brings a 
                            project to life faster than the perfect icon. 
                            That&quot;s why we&quot;ve dedicated ourselves to building
                             one of the most versatile and high-quality icon libraries available today. </p>
                          <p className="col-12 mt-3"> We offer a premium selection of beautifully crafted SVG icons, designed to meet the needs of designers, 
                            developers, and brands aiming for excellence. Whether you&quot;re working on a website, app, presentation,
                             or any creative project,
                             our design resources are tailored to make your work stand out effortlessly.</p>
                      </div>
                  </div>
                  <div className="col">
                      <figure className="m-0 text-center d-block">
                          <Image loading="lazy" src="/pic.svg"
                                alt="iconsguru"
                                width={530}
                                height={390} />
                      </figure>
                  </div>
                </div>
            </div>
         </section>

         <section className="tops-sections01 next-why d-inline-block w-100">
            <div className="container">
                <div className="row align-items-center">
                  
                  <div className="col-lg-12">
                      <div className="text-caraole-divb d-inline-block w-100">
                          <h2 className="text-center"> Why Choose IconsGuru? </h2>
                          <div className="row row-cols-1 row-cols-lg-3 mt-4 gy-4 g-lg-4">
                             <div className="col">
                                <div className="comon-list01">
                                   <h3> <span className="d-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(31,177,65,1)"><path d="M21 4V18.7215C21 18.9193 20.8833 19.0986 20.7024 19.1787L12 23.0313L3.29759 19.1787C3.11667 19.0986 3 18.9193 3 18.7215V4H1V2H23V4H21ZM8 12V14H16V12H8ZM8 8V10H16V8H8Z"></path></svg>
                                   </span> Free & Premium 
                                   Premium Quality, Always </h3>
                                   <p className="mt-3"> Our premium icons are meticulously designed to ensure clarity, consistency,
                                     and usability across all devices and screen sizes. </p>
                                </div>
                             </div>
                             <div className="col">
                                <div className="comon-list01">
                                   <h3> <span className="d-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(31,177,65,1)"><path d="M7 17H17V22H7V17ZM19 20V15H5V20H3C2.44772 20 2 19.5523 2 19V9C2 8.44772 2.44772 8 3 8H21C21.5523 8 22 8.44772 22 9V19C22 19.5523 21.5523 20 21 20H19ZM5 10V12H8V10H5ZM7 2H17C17.5523 2 18 2.44772 18 3V6H6V3C6 2.44772 6.44772 2 7 2Z"></path></svg>
                                   </span> Massive Icon Library </h3>
                                   <p className="mt-3"> Gain access to thousands of unique, modern, and constantly updated SVG icons covering every category 
                                    you can imagine — technology, business, social media, healthcare, and more. </p>
                                </div>
                             </div>
                             <div className="col">
                                <div className="comon-list01">
                                   <h3> <span className="d-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(31,177,65,1)"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22H2L4.92893 19.0711C3.11929 17.2614 2 14.7614 2 12C2 6.47715 6.47715 2 12 2ZM16 13H8C8 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13Z"></path></svg>
                                   </span> Scalable & Customizable </h3>
                                   <p className="mt-3"> Every icon is available in scalable vector (SVG) format, giving you the freedom to resize,
                                     edit, and style them to fit your brand perfectly — without losing quality. </p>
                                </div>
                             </div>
                             <div className="col">
                                <div className="comon-list01">
                                   <h3> <span className="d-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(31,177,65,1)"><path d="M10.9042 2.10025L20.8037 3.51446L22.2179 13.414L13.0255 22.6063C12.635 22.9969 12.0019 22.9969 11.6113 22.6063L1.71184 12.7069C1.32131 12.3163 1.32131 11.6832 1.71184 11.2926L10.9042 2.10025ZM13.7327 10.5855C14.5137 11.3666 15.78 11.3666 16.5611 10.5855C17.3421 9.80448 17.3421 8.53815 16.5611 7.7571C15.78 6.97606 14.5137 6.97606 13.7327 7.7571C12.9516 8.53815 12.9516 9.80448 13.7327 10.5855Z"></path></svg>
                                   </span> Royalty-Free Licensing </h3>
                                   <p className="mt-3"> Use our icons for personal or commercial projects without worrying about complex licensing issues. </p>
                                </div>
                             </div>
                             <div className="col">
                                <div className="comon-list01">
                                   <h3> <span className="d-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(31,177,65,1)"><path d="M4.7134 7.12811L4.46682 7.69379C4.28637 8.10792 3.71357 8.10792 3.53312 7.69379L3.28656 7.12811C2.84706 6.11947 2.05545 5.31641 1.06767 4.87708L0.308047 4.53922C-0.102682 4.35653 -0.102682 3.75881 0.308047 3.57612L1.0252 3.25714C2.03838 2.80651 2.84417 1.97373 3.27612 0.930828L3.52932 0.319534C3.70578 -0.106511 4.29417 -0.106511 4.47063 0.319534L4.72382 0.930828C5.15577 1.97373 5.96158 2.80651 6.9748 3.25714L7.69188 3.57612C8.10271 3.75881 8.10271 4.35653 7.69188 4.53922L6.93228 4.87708C5.94451 5.31641 5.15288 6.11947 4.7134 7.12811ZM18.2278 2.3713L13.2886 6.21289C9.34224 5.23923 5.55843 7.54646 4.5 11.4966C4.39826 11.8763 4.36647 12.262 4.33317 12.666C4.21829 14.0599 4.08554 15.6707 1 17.9966C3.5 19.4966 8 20.9984 11.5016 20.9984C14.8142 20.9984 17.8463 18.7896 18.7444 15.4377C19.0836 14.1719 19.0778 12.895 18.7847 11.7067L22.6253 6.76879C22.9349 6.3707 22.8997 5.80435 22.543 5.44774L19.5488 2.45355C19.1922 2.09694 18.6259 2.06168 18.2278 2.3713ZM16.8952 8.2852C16.8319 8.21952 16.7673 8.15494 16.7015 8.09149L15.5769 6.96685L18.7589 4.49198L20.5046 6.23774L18.0297 9.41972L16.8952 8.2852Z"></path></svg>
                                   </span> Time-Saving Design Resources </h3>
                                   <p className="mt-3"> No more spending hours creating icons from scratch. Our ready-to-use
                                     design resources let you focus on creativity, not logistics. </p>
                                </div>
                             </div>
                             <div className="col">
                                <div className="comon-list01">
                                   <h3> <span className="d-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(31,177,65,1)"><path d="M20 13C20 15.2091 19.1046 17.2091 17.6569 18.6569L19.0711 20.0711C20.8807 18.2614 22 15.7614 22 13 22 7.47715 17.5228 3 12 3 6.47715 3 2 7.47715 2 13 2 15.7614 3.11929 18.2614 4.92893 20.0711L6.34315 18.6569C4.89543 17.2091 4 15.2091 4 13 4 8.58172 7.58172 5 12 5 16.4183 5 20 8.58172 20 13ZM15.293 8.29297 10.5 12.5 12.5 14.5 16.7072 9.70718 15.293 8.29297Z"></path></svg>
                                   </span> Optimized for Speed </h3>
                                   <p className="mt-3"> We prioritize lightweight, web-friendly files to help keep your websites and 
                                    apps fast, responsive, and SEO-optimized. </p>
                                </div>
                              </div>
                              <div className="col">
                                <div className="comon-list01">
                                   <h3> <span className="d-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(31,177,65,1)"><path d="M4.7134 7.12811L4.46682 7.69379C4.28637 8.10792 3.71357 8.10792 3.53312 7.69379L3.28656 7.12811C2.84706 6.11947 2.05545 5.31641 1.06767 4.87708L0.308047 4.53922C-0.102682 4.35653 -0.102682 3.75881 0.308047 3.57612L1.0252 3.25714C2.03838 2.80651 2.84417 1.97373 3.27612 0.930828L3.52932 0.319534C3.70578 -0.106511 4.29417 -0.106511 4.47063 0.319534L4.72382 0.930828C5.15577 1.97373 5.96158 2.80651 6.9748 3.25714L7.69188 3.57612C8.10271 3.75881 8.10271 4.35653 7.69188 4.53922L6.93228 4.87708C5.94451 5.31641 5.15288 6.11947 4.7134 7.12811ZM18.2278 2.3713L13.2886 6.21289C9.34224 5.23923 5.55843 7.54646 4.5 11.4966C4.39826 11.8763 4.36647 12.262 4.33317 12.666C4.21829 14.0599 4.08554 15.6707 1 17.9966C3.5 19.4966 8 20.9984 11.5016 20.9984C14.8142 20.9984 17.8463 18.7896 18.7444 15.4377C19.0836 14.1719 19.0778 12.895 18.7847 11.7067L22.6253 6.76879C22.9349 6.3707 22.8997 5.80435 22.543 5.44774L19.5488 2.45355C19.1922 2.09694 18.6259 2.06168 18.2278 2.3713ZM16.8952 8.2852C16.8319 8.21952 16.7673 8.15494 16.7015 8.09149L15.5769 6.96685L18.7589 4.49198L20.5046 6.23774L18.0297 9.41972L16.8952 8.2852Z"></path></svg>
                                   </span> Dedicated to Creators </h3>
                                   <p className="mt-3"> Whether you&quot;re a solo designer, a startup founder, or a large agency, IconsGuru equips you with tools that 
                                    empower your creativity and accelerate your projects. </p>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
         </section>

         <section className="darsk-sections d-inline-block w-100">
            <div className="container">
               <div className="row row-cols-1 row-cols-lg-2 align-items-center">
                   <div className="col">
                      <Image loading="lazy" src="/adf.svg"
                          alt="iconsguru"
                          width={371}
                          height={269} />
                   
                   </div>
                   <div className="col">
                      <div className="contents-div">
                          <h3 className="text-white"> The IconsGuru Promise </h3>
                          <p className="text-white mt-3"> We&quot;re not just an <strong> icon library </strong> — we&quot;re your partner in creative success. Every pixel we craft, every collection we release,
                             is aimed at helping you achieve stunning results faster and easier. </p>
                          <p className="text-white mt-3"> When you choose <strong> IconsGuru,</strong> you&quot;re choosing a brand trusted by thousands of creatives 
                            who demand only the best from their <strong> premium icons </strong> and <strong>design resources.</strong> </p>
                          <Link href="/icons" className="btn btn-st-bn mt-3"> Start now </Link>
                      </div>
                   </div>
               </div>
            </div>
         </section>

         <section className="value-sections d-inline-block w-100">
            <div className="container">

                <h3 className="text-center"> Ready to elevate your designs? </h3>
                <p className="col-lg-7 mx-auto text-center mt-3 mb-4"> Explore our full collection of <strong>SVG icons</strong> and experience why
                     IconsGuru is the ultimate destination for modern visual storytelling.</p>
               
                <Link class="btn btn-expolre d-table mx-auto mt-3" href="/icons"> Explore now </Link>

            </div>
         </section>

      </main>

      <Footer/>
    </>
  );
}
