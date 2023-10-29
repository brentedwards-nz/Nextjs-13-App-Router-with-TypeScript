Add VS Code Extensions

- ES7 React/Redux/React-Native/JS Snippets
- JavaScript and TypeScript Nightly
- Tailwind CSS IntelliSense

Use next js
- next js is build on react
- Has server and client side rendering
- Better for SEO some page content rendered from the server

SSR - Server Side Rendering
- Components are server by default

- Advantages
  - Smaller Bundles
  - Less memory usage on client
  - SEO 
  - More secure e.g. api keys can be isolated to the server

- Disadvantages 
  - Cannot listen to browser events
    - click, change, submit
  - No access to browser apis
    - e.g. local storage
  - Cannot maintain state
  - Cannot use effects

Runtime Error produced when using client side apis on server side coponents

```
Unhandled Runtime Error
Error: Event handlers cannot be passed to Client Component props.
  <button onClick={function} children=...>
                  ^^^^^^^^^^
If you need interactivity, consider converting part of this to a Client Component.
```

Create next js app

`npx create-next-app@<version> <app-name>`

`npx create-next-app@13.4 next-app`

`npx create-next-app@latest next-app`

Run Development Build

`npm run dev`

Create pages and routes in app folder
- This is using <new> app router as opposed to old pages router

- app
  - route
    - page.tsx

`
rafce # React arrow function component export
`

```
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
```
