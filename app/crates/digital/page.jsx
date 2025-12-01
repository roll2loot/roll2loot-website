'use client'
import { useState } from 'react'

export default function DigitalCratePage(){
  const [email, setEmail] = useState('')
  const handleSubscribe = async () => {
    alert('This starter does not create subscriptions yet. Follow README to configure Stripe and Supabase.')
  }
  return (
    <div className="card">
      <h2 className="text-xl font-bold">Digital Crate - $5/month</h2>
      <p className="mt-2">Monthly digital downloads: maps, one-shots, STL files, and more.</p>
      <div className="mt-4">
        <input className="p-2 rounded bg-gray-700" placeholder="Your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button onClick={handleSubscribe} className="ml-2 px-3 py-2 bg-indigo-600 rounded">Subscribe</button>
      </div>
    </div>
  )
}
