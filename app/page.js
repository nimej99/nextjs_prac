'use client'

import { useEffect, useState, useCallback } from "react";
import Seo from "./components/Seo";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `/api/movies`
          )
          ).json();
          setMovies(results);
        })();
      }, []);
      
      const router = useRouter()
      const pathname = usePathname()
      const searchParams = useSearchParams()

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
      (name, value) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)
          return params.toString()
      },
      [searchParams]
    )

  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div 
        onClick={()=>{
          router.push(`movies/${movie.original_title}/${movie.id}?`)
        }}
        className="movie" key={movie.id} as={`/movies/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>
            <Link legacyBehavior href={`movies/${movie.id}`}>
              <a>
                {movie.original_title}
              </a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}