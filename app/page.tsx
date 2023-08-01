import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full h-full grid place-items-center'>
      <Link className='text-black hover:underline text-2xl' href={'/login'}>FA Landing page</Link>
    </div>
  )
}
