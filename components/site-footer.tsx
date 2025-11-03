import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6"

export function SiteFooter() {
  return (
    <footer className="hidden md:block border-t bg-card">
      <div className="mx-auto grid container grid-cols-2 gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="font-serif text-lg font-semibold">Konneckin</div>
          <p className="mt-2 text-sm text-muted-foreground">Trusted advisors delivering measurable impact.</p>
        </div>
        <div>
          <div className="font-medium">Company</div>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Insights</div>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="/insights" className="hover:underline">
                Strategy
              </a>
            </li>
            <li>
              <a href="/insights" className="hover:underline">
                Sustainability
              </a>
            </li>
            <li>
              <a href="/insights" className="hover:underline">
                Digital
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Legal</div>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Use
              </a>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <a aria-label="LinkedIn" target="_blank" href="https://linkedin.com/company/konneckin">
              <FaLinkedin className="size-5" />
            </a>
            <a aria-label="Twitter" href="#">
              <FaXTwitter className="size-5" />
            </a>
            <a aria-label="Twitter" target="_blank" href="https://www.instagram.com/konneckinofficial">
              <FaInstagram className="size-5" />
            </a>
            <a aria-label="Twitter" href="#">
              <FaYoutube className="size-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Konneckin. All rights reserved.
      </div>
    </footer>
  )
}
