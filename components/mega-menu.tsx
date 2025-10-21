"use client"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { mainServices, subServices, featuredLinks } from "@/data/servicesMenuData" // Adjust the import path as needed

type MegaMenuProps = {
  open: boolean
  onClose?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function MegaMenu({ open, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  return (
    <div
      className={cn("absolute left-0 right-0 top-full z-40", open ? "block" : "hidden")}
      role="dialog"
      aria-label="Services Menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="glass bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700">
        <div className="mx-auto container px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
            {/* Main Services Column */}
            <div className="md:col-span-2 space-y-4">
              {mainServices.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "group flex items-start space-x-4 p-3 rounded-lg transition-colors",
                    item.highlighted
                      ? "bg-blue-50 dark:bg-blue-900/50"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <div className="flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary dark:text-blue-400 mt-1" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                  {item.highlighted && (
                    <ArrowRight className="h-5 w-5 text-primary dark:text-blue-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </a>
              ))}
            </div>

            {/* Vertical Separator */}
            <div className="hidden md:block border-l border-gray-200 dark:border-gray-700"></div>

            {/* Sub Services Column */}
            <div className="md:col-span-2 space-y-2">
              {subServices.map((item) => (
                <a key={item.title} href={item.href} className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                </a>
              ))}
            </div>

            {/* Vertical Separator */}
            <div className="hidden md:block border-l border-gray-200 dark:border-gray-700"></div>

            {/* Featured Links Column */}
            <div className="md:col-span-2 space-y-4">
              <p className="font-semibold px-3 text-gray-900 dark:text-white">Featured</p>
              {featuredLinks.map((item) => (
                <a key={item.title} href={item.href} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  {/* <img src={item.imageUrl} alt={item.imageAlt} className="h-14 w-14 rounded-md object-cover flex-shrink-0" /> */}
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
