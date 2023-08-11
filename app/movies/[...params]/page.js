'use client'
import { useRouter,useSearchParams, usePathname } from "next/navigation";

// Generate segments for both [id] and [title]
//   export async function generateStaticParams() {
//     const title = await fetch('localhost:3000//.../title').then((res) => res.json())

//   return movies.map((movie) => ({
//     id: movie.id.id,
//     title: id.title,
//   }))
// }

export async function getStaticProps({ params : {params}} ) {
  return {
    props: { params },
  };
  }
export async function getStaticPaths() {
  return {
    paths: [], // 동적 경로가 없으므로 빈 배열로 설정
    fallback: 'blocking', // 다른 경로로의 접근은 서버 사이드에서 대기
  };
}

export default function Page(
  { params } = { params : { title: string, id: string } || 'Loading...'}
  ){
    console.log(params);
  return(
    <>
    <h2>detail</h2>
    <p>id = {params.params[0] }</p>
    <p>title = {params.params[1]}</p>
    </>
  )
}