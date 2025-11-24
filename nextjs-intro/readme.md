# Next js Introduction

Questions and Answers

1. What is Next.js?
Next JS is a React framework. It is a full stack framework built on react js.

It has the following features:

a. File based routing.

b. Server Side Rendering.

c. Ability to create API routes.

It has the following benefits:

a. Improved SEO because of Server Side Rendering.

b. Opinionated Solution for faster business logic building.

c. Full Stack solution within a single codebase.

2. Difference between React and Next.js
React is a JavaScript library for building user interfaces, whereas Next.js is a framework built on top of React.

React has the following characteristics:

a. It focuses on the view layer of the application.

b. It renders on the client side by default.

c. It requires third party libraries for routing.

Next.js has the following characteristics:

a. It offers a complete full stack solution.

b. It supports server side rendering and static site generation.

c. It has a built in file based routing system.

3. What is Server-Side Rendering?
Server Side Rendering is a method where the page content is generated on the server for each request.

It works in the following way:

a. The server executes the logic and generates HTML.

b. The fully populated HTML is sent to the browser.

c. The browser displays the content immediately and then hydrates the JavaScript.

It has the following benefits:

a. Search engines can crawl the content easily.

b. Users see the content faster on initial load.

c. Improved performance on slower devices.

4. What is Client-Side Rendering?
Client Side Rendering is a method where the rendering process takes place in the user browser.

It works in the following way:

a. The server sends a minimal HTML shell.

b. The browser downloads and executes the JavaScript.

c. The JavaScript populates the HTML with content.

It has the following characteristics:

a. Initial page load is slower compared to server rendering.

b. Transitions between pages are very fast after the initial load.

c. Reduced load on the server.

5. How does routing work in Next.js?
Routing in Next.js is file system based.

It operates in the following way:

a. Any file created inside the pages or app directory becomes a route.

b. The file path determines the URL structure.

c. No external configuration or routing library is needed.

It supports the following types:

a. Index routes.

b. Nested routes.

c. Dynamic routes.

6. What is a dynamic route?
A dynamic route is a page that allows you to match custom parameters in the URL.

It is created in the following way:

a. By wrapping the folder or file name in square brackets.

b. For example [id].js helps capture specific IDs.

c. The value inside the brackets is accessible as a query parameter.

It is used for the following cases:

a. User profile pages.

b. Blog posts.

c. Product detail pages.

7. What are API Routes in Next.js?
API Routes allow developers to create backend endpoints within the Next.js application.

It has the following features:

a. They function as serverless functions.

b. They are mapped to the /api/ route automatically.

c. They do not increase the size of the client side bundle.

It is used for the following tasks:

a. Accessing the database.

b. Handling form submissions.

c. Managing authentication.

8. What is getStaticProps used for?
getStaticProps is a data fetching function used for Static Site Generation.

It functions in the following way:

a. It runs only on the server side at build time.

b. It fetches the data and passes it to the page component as props.

c. It generates a static HTML file for the page.

It is used when:

a. The data is available before the user request.

b. The data needs to be cached by a CDN.

c. SEO is a priority.

9. What is the purpose of the app directory in Next.js?
The app directory is the new router implementation introduced in Next.js 13.

It introduces the following concepts:

a. Server Components as the default rendering method.

b. Support for layouts and templates.

c. Streaming and data fetching optimizations.

It has the following benefits:

a. Reduced client side JavaScript bundle size.

b. Ability to fetch data directly inside components.

c. Improved performance through granular caching.

10. What is the use of the Image component in Next.js?
The Image component is an extension of the standard HTML img element designed for the modern web.

It provides the following optimizations:

a. It automatically serves images in modern formats like WebP.

b. It resizes images based on the device viewport.

c. It prevents layout shifts by reserving space.

It has the following benefits:

a. Faster page load times.

b. Improved Core Web Vitals scores.

c. Automatic lazy loading of images.