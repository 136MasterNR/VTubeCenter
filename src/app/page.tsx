import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <br/>
      <br/>
      <h2>
        use <Link href="/c/doggirls">/c/doggirls</Link>
      </h2>
      <p>
        or if ur experimental hehe use <Link href="/c/test">/c/test</Link>
      </p>
    </div>
  )
}
