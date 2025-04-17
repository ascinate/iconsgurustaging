"use client";
import { useEffect, useState } from "react";
import NavicationHome from "../components/NavicationHome";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Form from "next/form";

export default function Icons() {


  const staticImages = [
    '/interface.svg',
    '/design-th1.svg',
    '/food-th.svg',
    '/device.svg',
    '/business.svg',
    '/shopping1.svg',
    '/business.svg',
    '/colori.svg',
    '/design-th1.svg',
    '/food-th.svg',
    '/social.svg',
    '/users.svg',
    '/weather.svg', 
  ];

  const [icontypes, setCategoryTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://iconsguru.ascinatetech.com/admin/api/icon-categories-count");
        const json = await res.json();
        if (json.status && Array.isArray(json.data)) {
          const updatedData = json.data.map((item, index) => ({
            ...item,
            img: staticImages[index] || '/default.svg',
            link: `/icon/${encodeURIComponent(item.icon_category.trim().toLowerCase())}`
          }));
          setCategoryTypes(updatedData);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);


  return (
    <>
      <Head>
        <title>Icons Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavicationHome/>
      <section className="sub-banners d-inline-block w-100 float-start mt-2">
                <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                          <h2> Browse High-Quality <br/>
                          Icons by Category </h2>
                          <p className="col-lg-8 mt-3"> The largest database of vector icons available for download
                          SVG, EPS, PSD and BASE 64 formats. </p>
                      </div>
                      
                    </div>
                </div>
      </section>
      <main className="pricing-pages-part float-start w-100 mb-5">
            <section className="float-start w-100 pt-0">
                  <div className="container">
                     <div className="comon-cate-list trending-icons d-inline-block w-100">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="d-flex align-items-center">
                                  <h2 className="text-left comon-head cmg-heading m-0"> Icon Categories </h2> 
                              </div>
                            </div>
                            
                        </div>
                        {loading ? (
                          <div className="text-center my-5 d-block w-100">
                              <div className="loading-animations">
                                    <Image
                                      loading="lazy"
                                      src="/category-loader.svg"
                                      alt="iconsguru"
                                      width={1116}
                                      height={984}
                                    />
                              </div>
                          </div>
                        ) : (
                             
                        <div className="row row-cols-1 row-cols-lg-3 gy-4 g-lg-4 mt-4">
      
                            {icontypes.map((type) => (
                                    <div className="col" key={type.id}>
                                      <article className="d-inline-block w-100 comon-types01 position-relative">
                                        <span className="tagsd">{type.tag}</span>
                                          <figure className="text-center mx-auto d-block mb-1">
                                            <Link href={type.link}> <Image loading="lazy" src={type.img}
                                                  alt="user"
                                                  width={260}
                                                  height={178} /> </Link>
                                          </figure>
                                          <span className="d-flex icon-list-name col-lg-10 mx-auto align-items-center justify-content-between">
                                              <h5 className="mb-0"> 
                                                <Link href={type.link}> 
                                                {type.icon_category.trim()}
                                                </Link>
                                              </h5>
                                              <Link className="coun-text" href={type.link}> 
                                                  
                                                <strong> {type.count}</strong> icons
                                              </Link>
                                              
                                          </span>
                                      </article>
                                    </div>
                                ))}
                            
                        </div>
                        )}
                     </div>

                  
      
                  </div>
             </section>
       </main>

      <Footer/>
    </>
  );
}
