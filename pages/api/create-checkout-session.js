import stripe from '../../lib/stripe'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { priceId, successUrl, cancelUrl, email } = req.body
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: email,
      success_url: successUrl,
      cancel_url: cancelUrl
    })
    res.json({ id: session.id })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
}
