# nextjs-quickstart
 

https://nextjs.org/learn/foundations/how-nextjs-works/code-splitting

Next.js has built-in support for code splitting. Each file inside your pages/ directory will be automatically code split into its own JavaScript bundle during the build step.


SSR vs SSG
SSR - HTML is generated but hydration(attaching event handler etc) happens at client side.
SSG - 
https://nextjs.org/learn/foundations/how-nextjs-works/rendering


We can start next js with 3 simple steps

1) install react react-dom next. Change in package.json for start command 'next dev
2) Create a 'pages' folder and a index.js[x] file in it. 
3) start the server

All folders represent a route in Next js.
https://nextjs.org/learn/basics/navigate-between-pages/pages-in-nextjs
pages/index.js is associated with the / route.
pages/posts/first-post.js is associated with the /posts/first-post route. 

import Link from 'next/link'; - For routing in Next
e.g. <Link href="/posts/first-post">this page!</Link>


Code splitting:
https://nextjs.org/learn/basics/navigate-between-pages/client-side

Next.js does code splitting automatically, so each page only loads what’s necessary

Furthermore, in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background.


Pre-rendering:-
https://nextjs.org/learn/basics/data-fetching/pre-rendering

By default nextjs pre-renders all pages.
Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)

We can check by disabling js and load home page. You will notice html is loaded but click handler does not work.

Static site generation(SSG):- 
HTML is generated during build time.
The pages those do not require fetching external data, those pages will automatically be statically generated when the app is built for production.

getStaticProps(SSG with Data):
We need to export a getStaticProps function. During build time this methid will be executed and data will be used for page generation,

export async function getStaticProps() {
  return {
    props: ...
  }
}

Important notes:
1) getStaticProps can only be exported from a page. You can’t export it from non-page files.
2) getStaticProps only runs on the server-side. It will never run on the client-side. It won’t even be included in the JS bundle for the browser.
3) In development mode, getStaticProps runs on each request instead.

https://nextjs.org/learn/basics/data-fetching/with-data
https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops


Server Side Rendering(SSR):
https://nextjs.org/learn/basics/data-fetching/request-time

HTML is generated on each request.
To use Server-side Rendering, you need to export getServerSideProps instead of getStaticProps from your page.

getServerSideProps:-

export async function getServerSideProps(context) {
  return {
    props: {}
  };
}
context: contains request specific parameters.

Client Side Rendering: 
1) Statically generate (pre-render) parts of the page that do not require external data.
2) When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.


In our application we can verify SSR and SSG (For developemnt it also similar to SSR).
    1) There wont be any call to api server from client.
    2) the console log is printed in terminal not is browser.