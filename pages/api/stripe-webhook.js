import stripe from '../../lib/stripe'
import { buffer } from 'micro'
import { supabase } from '../../lib/supabaseClient'

export const config = { api: { bodyParser: false } }

export default async function handler(req, res) {
  const sig = req.headers['stripe-signature']
  const buf = await buffer(req)
  let event
  try {
    event = stripe.webhooks.constructEvent(buf.toString(), sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('webhook signature error', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    await supabase.from('subscriptions').upsert({
      user_email: session.customer_email,
      stripe_subscription_id: session.subscription || null,
      crate_type: session.display_items?.[0]?.custom?.name || 'unknown',
      active: true
    }, { onConflict: ['user_email'] })
  }

  if (event.type === 'customer.subscription.deleted') {
    const sub = event.data.object
    await supabase.from('subscriptions').update({ active: false }).eq('stripe_subscription_id', sub.id)
  }

  res.json({ received: true })
}
