# org.wcdevs.blog.front

[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue)](https://opensource.org/licenses/Apache-2.0)
[![Build and Publish](https://github.com/lealceldeiro/org.wcdevs.blog.front/actions/workflows/build-and-publish.yml/badge.svg)](https://github.com/lealceldeiro/org.wcdevs.blog.front/actions/workflows/build-and-publish.yml)

We are happy you're here!

Holds `org.wcdevs.blog.front`, the front-end application for [blog.wcdevs.org](https://blog.wcdevs.org)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
# Requirements
- [Nodejs](https://nodejs.org/en/) (version 12 LTS or above)
- [Docker](https://www.docker.com/)
- [Docker compose](https://docs.docker.com/compose/install/)
# Setup

## Frontend
We use [nvm](https://github.com/nvm-sh/nvm) to manage node versions. 

To run the project with the proper node version run the command
```bash
nvm use
```
to use the selected version we specified on the `.nvmrc` config file  for this project (`v16.13.1`)

Install the dependencies using `npm` or `yarn`.
```bash
npm i -g yarn # if you prefer yarn
# and then run
yarn
# or 
npm install
```
## Backend
API was development with [Java](https://www.java.com/en/). To run it locally, follow the instruction [here](https://github.com/lealceldeiro/org.wcdevs.blog.core#running-the-api-whole-stack-with-docker-compose)
# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Contributing

Before start contributing to this project be sure you're familiar with our
[Contribution guidelines](CONTRIBUTING.md) and our [Code of Conduct](CODE_OF_CONDUCT.md).

# Continuous Integration
We use [GitHub Actions](https://github.com/features/actions) for continuous integration. Check out our [build workflows](https://github.com/lealceldeiro/org.wcdevs.blog.front/actions).

# Changelog
See the [CHANGELOG](https://github.com/lealceldeiro/org.wcdevs.blog.front/releases) for details.

# Authors
This project exists thanks to all the people who contribute — [contribute](CONTRIBUTING.md).

Contributors

<a href = "https://github.com/lealceldeiro/org.wcdevs.blog.front/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=lealceldeiro/org.wcdevs.blog.front"/>
</a>

Made with [contributors-img](https://contrib.rocks).
# License
This project is licensed under the [Apache License](https://www.apache.org/licenses/LICENSE-2.0) - see the [LICENSE](LICENSE) file for details.

