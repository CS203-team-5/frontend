# Premium designed free icon set for React.js

CoreUI Icons are beautifully crafted symbols for common actions and items. You can use them in your digital products for web or mobile app.

## Status
[![npm package][npm-badge]][npm]
[![NPM downloads][npm-download]][npm]
![react](https://img.shields.io/badge/react-^17.0.2-lightgrey.svg?style=flat-square&logo=react)


[npm-badge]: https://img.shields.io/npm/v/@coreui/icons-react/latest?style=flat-square
[npm]: https://www.npmjs.com/package/@coreui/icons-react
[npm-download]: https://img.shields.io/npm/dm/@coreui/icons-react.svg?style=flat-square

## Docs
- https://icons.coreui.io/docs/using-coreui-icons-with/react/  

## Installation

```bash
npm install @coreui/icons
npm install @coreui/icons-react@next
```

or

```bash
yarn add @coreui/icons
yarn add @coreui/icons-react@next
```

## Use

### Single icon

```jsx
import { CIcon } from '@coreui/icons-react';
import { cifAU } from '@coreui/icons';

...
render() {
  return (
    <CIcon icon={cilList} size="xxl"/>
  )
}
...
```

### All icons

```jsx
import { CIcon } from '@coreui/icons-react';
import * as icon from '@coreui/icons';

...
render() {
  return (
    <CIcon icon={icon.cilList} size="xxl"/>
  )
}
...
```
