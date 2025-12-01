import { supabase } from '../../lib/supabaseClient'
import { sendMail } from '../../lib/mailer'

export default async function handler(req, res) {
  // protect endpoint with secret key query param
  if (req.query.secret !== process.env.CRON_SECRET) return res.status(401).end()

  const { data: subs } = await supabase.from('subscriptions').select('user_email').eq('crate_type', 'digital').eq('active', true)

  const { data: urlData } = await supabase.storage.from('digital-crates').createSignedUrl('latest.zip', 60 * 60)

  for (const s of subs || []) {
    await sendMail(s.user_email, 'Your Roll2Loot Digital Crate is here!', `<p>Your crate: <a href="${urlData.signedUrl}">Download</a></p>`)
  }

  res.json({ sent: subs.length })
}
