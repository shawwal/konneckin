import Link from "next/link"
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
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Insights</div>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/insights" className="hover:underline">
                Strategy
              </Link>
            </li>
            <li>
              <Link href="/insights" className="hover:underline">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="/insights" className="hover:underline">
                Digital
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Legal</div>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms of Use
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <a aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/company/konneckin">
              <FaLinkedin className="size-5" />
            </a>
            <a aria-label="Twitter" href="#">
              <FaXTwitter className="size-5" />
            </a>
            <a aria-label="Instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/konneckinofficial">
              <FaInstagram className="size-5" />
            </a>
            <a aria-label="YouTube" href="#">
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