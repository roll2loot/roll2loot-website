-- profiles table (optional — Supabase Auth also creates user records)
create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  display_name text,
  created_at timestamptz default now()
);

create table if not exists subscriptions (
  id bigserial primary key,
  user_email text not null,
  stripe_subscription_id text,
  crate_type text,
  active boolean default true,
  last_sent timestamptz,
  created_at timestamptz default now()
);

create table if not exists physical_crate_addresses (
  id bigserial primary key,
  user_email text not null,
  address jsonb,
  crate_type text,
  created_at timestamptz default now()
);
