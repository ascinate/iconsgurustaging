'use client';

import Head from "next/head";
import NavicationHome from "@/app/components/NavicationHome";
import Footer from "@/app/components/Footer";
import { useEffect, useState } from "react";
import SidebarFilter from "@/app/components/SidebarFilter";

import Link from "next/link";
import Image from "next/image";
import { useParams, useSearchParams } from 'next/navigation';

export default function CategorySearchPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const category = params.category;

  const typeValues = ['thin', 'solid', 'regular'];
  const isType = typeValues.includes(category.toLowerCase());

  const [page, setPage] = useState(1);
  const [icons, setIcons] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalIcons, setTotalIcons] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState({
    categories: isType ? [] : [category],
    colors: [],
    types: isType ? [category] : [],
    tag: searchParams.get('tag') || ''
  });

  useEffect(() => {
    const fetchIcons = async () => {
      setIsLoading(true);
      try {
        const query = new URLSearchParams();
        query.append("page", page);
        query.append("limit", 20);

        if (filters.categories.length)
          filters.categories.forEach(c => query.append("categories[]", c));
        if (filters.colors.length)
          filters.colors.forEach(c => query.append("colors[]", c));
        if (filters.types.length)
          filters.types.forEach(t => query.append("types[]", t));
        if (filters.tag)
          query.append("tag", filters.tag);

        const finalURL = `https://iconsguru.ascinatetech.com/admin/api/icons?${query.toString()}`;

        const response = await fetch(finalURL);
        const data = await response.json();

        if (data?.icons?.data && Array.isArray(data.icons.data)) {
          setIcons(data.icons.data);
          setTotalPages(data.icons.last_page || 1);
          setTotalIcons(data.icons.total || 0);
        } else {
          console.error("❌ Unexpected data.icons format:", data);
          setIcons([]);
        }
      } catch (error) {
        console.error("🚨 Error fetching icons:", error);
        setIcons([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIcons();
  }, [page, filters]);


  const iconname = filters.tag ? `${filters.tag}` : `${category}`;

  return (
    <>
      <Head>
        <title>Listing page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavicationHome />
      

      <main className="listing-pages floate-start w-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
            <SidebarFilter
              onFilterChange={(newFilters) => {
                setFilters((prev) => ({
                  ...prev,
                  ...newFilters,
                  categories: newFilters.categories?.length > 0
                    ? newFilters.categories
                    : isType ? [] : [category],
                  types: newFilters.types?.length > 0
                    ? newFilters.types
                    : isType ? [category] : [],
                  tag: newFilters.tag ?? prev.tag 
                }));
              }}
              showCategoryFilter={true}
            />


            </div>
            <div className="col-lg-9 ps-lg-4">
              <div className="main-divs g-col-6">
                <h2 className="search-listings01">{iconname} icons</h2>
                <p>
                  Showing <strong className="serch-data">{totalIcons}</strong> Icons
                </p>

                <div className="tabsd_divs d-inline-block w-100 mt-2 position-relative">
                      <div className="new-icons-bm gy-2 g-lg-2 mt-0">
                        
                        {isLoading ? (
                          <div className="loading-animations">
                                <Image
                                  loading="lazy"
                                  src="/ser-loader.svg"
                                  alt="iconsguru"
                                  width={859}
                                  height={364}
                                />
                          </div>
                        ) : Array.isArray(icons) && icons.length > 0 ? (
                          icons.map((icon) => (

                            <article key={icon.Id} className="svg-item position-relative">
                              <Link href={`/details/${icon.icon_name.replace(/\s+/g, "-").toLowerCase()}_${icon.Id}`} className="btn icons-list p-0">
                                <span dangerouslySetInnerHTML={{ __html: icon.icon_svg }}></span>
                              </Link>
                              <div className="hover-divs">
                                <button type="button" className="btn btn-adds">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(67,67,67,1)">
                                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                                  </svg>
                                </button>
                                <button type="button" className="btn btn-downloads">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(255,255,255,1)">
                                    <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path>
                                  </svg>
                                </button>
                              </div>
                            </article>
                          ))
                        ) : (
                          <div className="col no-found-div w-100">
                                <div className="not-imgs text-center">
                                    <figure className="m-0">
                                          <Image
                                            loading="lazy"
                                            src="/nofound.png"
                                            alt="iconsguru"
                                            width={249}
                                            height={219}
                                          />
                                    </figure>
                                    <h2> No results found </h2>
                                    <p> Try updating your search terms or filters </p>
                                </div>
                            </div>
                        )}
                      </div>

                      {/* Pagination */}
                      {totalPages > 1 && (
                      <div className="d-flex align-items-center justify-content-center my-5 gap-2 flex-wrap">
                        <button
                          className="btn btn-pre"
                          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                          disabled={page === 1}
                        >
                          ← Previous
                        </button>

                        {[...Array(totalPages)].map((_, index) => {
                          const pageNum = index + 1;
                          return (
                            <button
                              key={pageNum}
                              onClick={() => setPage(pageNum)}
                              className={`btn btn-sm ${page === pageNum ? "btn-primary" : "btn-outline-secondary"}`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}

                        <button
                          className="btn btn-next"
                          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                          disabled={page === totalPages}
                        >
                          Next →
                        </button>
                      </div>
                       )}
                    
                  
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
