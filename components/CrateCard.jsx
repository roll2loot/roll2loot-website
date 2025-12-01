export default function CrateCard({title, children}) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  )
}
