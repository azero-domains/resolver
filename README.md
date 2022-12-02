# AZERO Domains – Resolver

![Typescript](https://img.shields.io/badge/Typescript-blue)

This repository contains a simple Typescript package to resolve `.azero` domains issued by [AZERO Domains](https://azero.domains). It supports resolving domains to their associated SS58 addresses and the other way around.

📃 **Documentation:** https://azero-domains.github.io/resolver/.

## Disclaimer 🚨

This package uses a testnet RPC and contracts. It's not ready for production use yet.

## Getting Started

Install the package from the npm registry:

```bash
npm install @azns/resolver
```

Use it:

```ts
import { resolveName } from '@azns/resolver'

const address = await resolveName('wojak')
```

## Development

```bash
# Install pnpm (https://pnpm.io/)
npm i -g pnpm

# Install dependencies
pnpm i

# Start tsup in development mode (watching)
pnpm dev

# Build the package and generated docs
pnpm run build
```
