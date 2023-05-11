# Pintura NextJS example project

Run `npm install` to install project dependencies, then run `npm start` to start the development server.

Navigate to http://localhost:3000 to view the project.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/pqina/pintura-example-nextjs)

Please note that for some reason this project won't run on StackBlitz, it will run fine locally.

### License

This projects uses a test version of Pintura. This version of Pintura will show a watermark in the editor and on generated images.

Purchase a license at https://pqina.nl/pintura to use Pintura in production.

## Transpiling packages

With version 13.1+ of NextJS we can add the following to the next.config.js file:

```js
module.exports = {
  transpilePackages: ["@pqina/pintura", "@pqina/react-pintura"],
};
```

### NextJS < 13.1

For older versions we need the "next-transpile-modules" package (see https://github.com/vercel/next.js/issues/706, and https://github.com/vercel/next.js/issues/31518).

https://github.com/martpie/next-transpile-modules

`npm i next-transpile-modules --save`

And add or adjust the `next.config.js` file like this:

```js
// next.config.js
const withTM = require("next-transpile-modules")([
  "@pqina/pintura",
  "@pqina/react-pintura",
]);
module.exports = withTM({
  // NextJS config
});
```

Additionally we need to disable `swcMinify` as it contains a bug when compiling certain JavaScript code, see: https://github.com/swc-project/swc/issues/6780

```js
// next.config.js
const withTM = require("next-transpile-modules")([
  "@pqina/pintura",
  "@pqina/react-pintura",
]);
module.exports = withTM({
  // For NextJS 13
  swcMinify: false,
});
```

### Alternative solution

Alternatively we can wrap the Pintura component and load it dynamically.

```jsx
// dynamic-pintura-editor.js
import { PinturaEditor } from "@pqina/react-pintura";

export default function (props) {
  return <PinturaEditor {...props} />;
}
```

How to import the component.

```js
// index.js
import dynamic from "next/dynamic";

const PinturaEditor = dynamic(() => import("./dynamic-pintura-editor"), {
  ssr: false,
});
```
