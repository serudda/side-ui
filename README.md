# Side-UI

Side-UI is a versatile and powerful UI Kit crafted exclusively for Indie Creators HQ. As a team of Hispanic developers passionate about side-projects, we understand the value of building robust and visually stunning user interfaces quickly and efficiently.
## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Quick Setup](#quick-setup)
- [How to Use It](#how-to-use-it)
  - [Using Enums in Side-UI Components](#using-enums-in-side-ui-components)
- [Updating Colors](#updating-colors)
- [Community](#community)
- [License](#license)
- [References](#references)

## Introduction

At Indie Creators HQ, we believe in empowering developers like you with the right tools. Side-UI offers a collection of reusable and customizable React components, designed to meet the diverse needs of your projects, whether they are web applications, websites, or prototypes. With Side-UI, you can create delightful user experiences and focus on bringing your ideas to life.
# Getting Started

## Quick Setup

Before you can use side-UI, there are a couple of prerequisites you need to have in place:

1. `Tailwind CSS:` Make sure you have a working Tailwind CSS project set up.
2. `Node.js and a Package Manager:` Make sure you have Node.js installed on your machine.


npm
```bash
npm install side-ui
```
yarn
```bash
yarn install side-ui
```
pnpm
```bash
pnpm install side-ui
```

### Include

Next, include Side-UI in your tailwind.config.js file to enable its components.
```js
module.exports = {
  content: ['./node_modules/side-ui/**/*.{js,jsx,ts,tsx}'],
  presets: [require('./node_modules/side-ui/dist/tailwind.config')],
};
```
<div align="right">

[ [ ↑ to top ↑ ] ](#side-ui)

</div>

It's that easy!!!.
## How to use it

In this example, we import the Button component from side-ui, and then we use it in the `MyComponent` functional component. The Button is configured as a primary button with the base size, and when clicked, it logs "Button clicked" to the console.

This short example demonstrates the basic usage of the Button component, and you can easily customize it by using different variant, size, and other props according to your project's needs.

```tsx
import React from 'react';
import { Button, ButtonVariant, ButtonSize } from 'side-ui';

export const MyComponent = () => {
  <Button
  variant={ButtonVariant.primary}
  size={ButtonSize.base}
  onClick={() => console.log('Button clicked')}>
    Click Me
  </Button>
}

export default MyComponent;
```
### Using Enums in Side-UI Components

Several components in Side-UI utilize enums to provide customizable options for different variations and styles. Enums are sets of named constants representing discrete values, allowing you to choose from predefined options when using the components.
### Example

In the Button component, you can use the ButtonVariant enum to choose from different button styles, such as `ButtonVariant.primary`, `ButtonVariant.secondary`, and more.

```tsx
import { Button, ButtonVariant } from 'side-ui';

const MyComponent = () => {
  return (
    <div>
      <Button variant={ButtonVariant.primary} >
        Click Me
      </Button>
      <Button variant={ButtonVariant.secondary}>
        Click Me Too
      </Button>
    </div>
  );
};
```
### Visual Example
![primary_example](https://github.com/serudda/side-ui/assets/14036522/3743dd41-514a-4e9f-8285-babb14cdd7d7)
![fsecondary_example](https://github.com/serudda/side-ui/assets/14036522/46a03b23-db34-44f0-953a-25a42c610520)

### Benefit from Consistency

Enums help maintain consistency throughout your application, ensuring that components adhere to predefined styles and variants. They provide a clear set of options, making it easier to understand and use the components effectively.
<div align="right">

[ [ ↑ to top ↑ ] ](#side-ui)

</div>

## Updating colors
1. Access the tailwind.config.js File

    Ensure you have the tailwind.config.js file in your project. If it doesn't exist, create it at the root of your project.

1. Update the colors Section

    In the tailwind.config.js file, locate the colors section under the theme object. This section defines the primary and secondary colors, among others. The colors are specified using a numeric scale, where each number corresponds to a different shade of the color.

Here's an example of how you can set your custom primary and secondary colors:

```js
module.exports = {
  // ... other configurations ...

  theme: {
    // ... other theme configurations ...

    // Extend the colors section to define your custom primary and secondary colors

    extend: {
      colors: {
        primary: {
          50: '#FEFFD6',
          100: '#FEFFAD',
          200: '#FDFF85',
          300: '#FCFF5C',
          400: '#FCFF33',
          500: '#FAFF00',
          600: '#DDE000',
          700: '#B5B800',
          800: '#8C8F00',
          900: '#646600',
          950: '#3C3D00',
        },
        secondary: {
          50: '#ECEDFD',
          100: '#C7C8FA',
          200: '#A1A3F7',
          300: '#7C7EF4',
          400: '#6366F1',
          500: '#4346EF',
          600: '#1E21EB',
          700: '#1215CE',
          800: '#0F11A9',
          900: '#0B0D83',
          950: '#080A5E',
        },
      },
    },
  },

  // ... other configurations ...
};

```
<div align="right">

[ [ ↑ to top ↑ ] ](#side-ui)

</div>

<!-- TODO: CUSTOM HOOKS -->
# Community

Contributions are always welcome!

See [CONTRIBUTING.md](/docs/CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [CODE_OF_CONDUCT.](/docs/CODE_OF_CONDUCT.md)
# License

side-UI is Open Source project and licensed under [MIT](/LICENSE).

# References

[NPM Publish config](
https://articles.wesionary.team/react-component-library-with-vite-and-deploy-in-npm-579c2880d6ff)

[TailwindCSS and StorybookJS config](
https://betterprogramming.pub/build-a-custom-react-component-library-with-storybook-7-beta-and-vite-4-in-2023-c52db4d733c0)

<div align="right">

[ [ ↑ to top ↑ ] ](#side-ui)

</div>