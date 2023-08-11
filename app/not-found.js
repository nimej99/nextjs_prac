'use client'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <span>
        <Link href="/">View all posts</Link>
      </span>
      <style jsx>{`
        span{
          color: #f00;
        }
      `}</style>
    </div>
  )
}