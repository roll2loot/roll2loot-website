import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="card">
        <h2 className="text-2xl font-semibold">Welcome to Roll2Loot</h2>
        <p className="mt-2">Custom 3D-printed minis, terrain, and monthly digital content for your tabletop games.</p>
        <div className="mt-4 space-x-2">
          <Link href="/crates/digital"><a className="underline">Digital Crate</a></Link>
          <Link href="/crates/player"><a className="underline">Player Crate</a></Link>
          <Link href="/crates/dm"><a className="underline">DM Crate</a></Link>
        </div>
      </section>
    </div>
  )
}
