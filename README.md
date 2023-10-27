Add VS Code Extensions

- ES7 React/Redux/React-Native/JS Snippets
- JavaScript and TypeScript Nightly
- Tailwind CSS IntelliSense

- Use next js
- next js is build on react
- Has server and client side rendering
- Better for SEO some page content rendered from the server

- Create next js app

> npx create-next-app@<version> <app-name>
> npx create-next-app@13.4 next-app
> npx create-next-app@latest next-app

- Run Development Build
> npm run dev

- Create pages and routes in app folder
- This is using <new> app router as opposed to old pages router

- app
- - route
- - - page.tsx

> rafce # React arrow function component export

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page