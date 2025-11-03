import Link from 'next/link';

/**
 * Custom 404 Not Found page for the Next.js App Router.
 * This file should be placed at `app/not-found.tsx`.
 * It automatically handles 404 errors for the entire application.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center">
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
        <h1 className="text-9xl font-bold font-serif text-primary">
          404
        </h1>
        <h2 className="mt-4 text-center font-serif text-3xl leading-tight md:text-4xl">
          Page Not Found
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted-foreground md:text-base">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved or deleted.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 py-2 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
