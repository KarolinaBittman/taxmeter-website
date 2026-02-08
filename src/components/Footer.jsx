export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="TaxMeter logo" className="w-10 h-10 object-contain" />
          <span className="text-muted text-sm">TaxMeter.ch</span>
        </div>
        <p className="text-muted text-sm">
          Made in Zürich 🇨🇭
        </p>
      </div>
    </footer>
  )
}
