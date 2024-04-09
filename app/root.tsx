import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css?url";
import Header from "~/components/_header";
import Footer from "~/components/_footer";
import Background from "~/components/_background";


export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesheet }];
}

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
        <Background />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}



// create a footer function that will be used in the routes



export default function App() {
  return <Outlet />;
}
