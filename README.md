# React + Tableland (TypeScript) Starter

> A TypeScript template for @tableland + React + wagmi + Rainbowkit projects

## Table of Contents

- [Background](#background)
- [Usage](#usage)
  - [Prerequisites](#prerequisites)
  - [Installation \& build](#installation--build)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Background

This repo contains starter code for a React + [wagmi](https://wagmi.sh/) + [Rainbowkit](https://www.rainbowkit.com/) project with useful Tableland clients included, bootstrapped using [`Vite`](https://vitejs.dev/). It contains a basic example for connecting to a wallet to then allow creating, writing to, and reading a table using the Tableland SDK ([`@tableland/js-tableland)`](https://github.com/tablelandnetwork/js-tableland)) as well as Local Tableland ([`@tableland/local`](https://github.com/tablelandnetwork/local-tableland)) support during development. Both linting (with [`eslint`](https://eslint.org/)) and code formatting (with [`prettier`](https://prettier.io/)) are also included, along with [Tailwind CSS](https://tailwindcss.com/).

## Usage

### Prerequisites

Before you get started, you'll need to create a WalletConnect account and create a project and retrieve the project ID: [here](https://walletconnect.com/)

RainbowKit & wagmi require a WalletConnect project ID in order to work properly. These should be set up and configured in a `.env` file within this project's root and saved to the following variables:

```txt
VITE_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
```

There's also a `VITE_ENABLE_TESTNETS` boolean value you can set in order to enable or disable wallet connections to testnet chains. All of the chains that Tableland supports are configured, including the Hardhat chain if you choose to run Local Tableland during development.

### Installation & build

First, clone this repo:

```sh
git clone https://github.com/tablelandnetwork/react-ts-tableland-template
```

To get started, you can run `npm run up` to start the app. This runs `npm install` plus the `build` / `start` scripts and then serves the application at [http://localhost:4173](http://localhost:4173). The starter template includes the following, located in `src/components/Tableland.jsx`:

- Navbar wallet connection using RainbowKit.
- A form with inputs for creating a table (hardcoded with a `id INTEGER PRIMARY KEY, val TEXT` schema) and writing a single value to it.
- Reading and rendering your table's data on button click.

The wagmi setup occurs in `src/providers` and `src/wagmi.js`. Lastly, there is a `useSigner` hook in `src/hooks/useSigner.js`. It's a required adapter for [`ethers`](https://docs.ethers.org/v5/) to work with wagmi (and RainbowKit), which use [`viem`](https://viem.sh/) under the hood.

## Development

If you'd like to run the project locally, use the following scripts in separate terminal windows:

```sh
npm run lt
npm run dev
```

This will do two things: spin up a Local Tableland node and run the app in development mode to reflect live code changes, served at [http://localhost:5173](http://localhost:5173). Local Tableland is an _extremely_ useful tool to develop as it's a lightweight Tableland validator (also spinning up a Hardhat node under the hood) that runs locally on your machine with full Tableland protocol compliance.

There are also a few other scripts you can use:

- `npm run lint`: Lint the codebase with `eslint` (along with the `lint:fix` option).
- `npm run prettier`: Prettify the code format with `prettier` (along with the `prettier:fix` option).
- `npm run format`: Both lint and format the codebase with `eslint` and `prettier`, also fixing any issues it can.
- `npm run clean`: Remove the `dist` folder.
- `npm run test`: A placeholder for running tests (currently empty).

## Contributing

PRs accepted.

Small note: If editing the README, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT AND Apache-2.0, © 2021-2023 Tableland Network Contributors
