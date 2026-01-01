import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import ReactLenis from "lenis/react";
import ScrollToTop from "./components/Utilities/ScrollToTop";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?" +
      "family=Bricolage+Grotesque:wght@500;600;700&" +
      "family=Montserrat:wght@500;600;700&" +
      "display=swap",
  },
];

export const meta: Route.MetaFunction = () => [
  // Basic SEO
  {
    title: "Mossform Architecture | Contemporary & Nature-Driven Architecture",
  },
  {
    name: "description",
    content:
      "Mossform Architecture is a contemporary architecture studio focused on calm, sustainable, and nature-driven spaces rooted in biophilic design principles."
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  {
    property: "og:type",
    content: "website"
  },
  {
    property: "og:site_name",
    content: "Mossform Architecture"
  },
  {
    property: "og:title",
    content:
      "Mossform Architecture | Contemporary & Nature-Driven Architecture"
  },
  {
    property: "og:description",
    content:
      "Calm, modern, and nature-driven architecture shaped by biophilic and sustainable design principles."
  },
  {
    property: "og:image",
    content: "/images/og-cover.jpg"
  },
  {
    property: "og:image:width",
    content: "1200"
  },
  {
    property: "og:image:height",
    content: "630"
  },

  // Twitter
  {
    name: "twitter:card",
    content: "summary_large_image"
  },
  {
    name: "twitter:title",
    content:
      "Mossform Architecture | Contemporary & Nature-Driven Architecture"
  },
  {
    name: "twitter:description",
    content:
      "Contemporary architecture studio creating calm, sustainable, and nature-connected spaces."
  },
  {
    name: "twitter:image",
    content: "/images/og-cover.jpg"
  },
];


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ReactLenis root>
      <ScrollToTop/>
      <Outlet />
    </ReactLenis>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
