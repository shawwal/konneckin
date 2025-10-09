export function TrustedLogos() {
  const logos = ["/placeholder-logo.svg", "/placeholder-logo.png", "/abstract-client-logo.png"]
  return (
    <section className="mx-auto max-w-5xl px-4 py-8 md:py-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
      <div className="mx-auto w-fit rounded-full border px-3 py-1 text-xs text-muted-foreground">
        {"Trusted by leading companies around the world"}
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-80">
        {logos.map((src, i) => (
          <img key={i} src={src || "/placeholder.svg"} alt="Client logo" className="h-6 w-auto md:h-7" />
        ))}
      </div>
    </section>
  )
}
