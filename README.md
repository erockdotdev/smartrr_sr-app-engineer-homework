# Currency Converter | USD/BRL currency conversion rates every hour

This application uses [Currency Converter API](https://rapidapi.com/natkapral/api/currency-converter5), [Next.js](https://nextjs.org/) hosted on [Vercel](https://vercel.com/) [GitHub Actions](https://github.com/features/actions) to and [Contentful](https://www.contentful.com/) to fetch, store and retrieve USD/BRL currency conversion rates over the last 24 hours.


## Prerequisites

- Node 18.X.X
- NPM 8.X.X

## Recommendations
- Some knowledge of: 
  - Next.js
  - Typescript
  - React Testing Library
  - Jest
  - Contentful
  - Event based systems
## Getting Started
- clone repo and run `yarn` or `npm install`
- environment variables
  - copy `.env.local.example` and rename to `.env.local`
  - acquire and add var to `.env.local` (ask me and I'll share them)
- run `yarn dev` or `npm run` start to launch

## Scripts
- `yarn dev`: start the application
- `yarn build`: build a local copy of prod app
- `yarn start`: serve local build
- `yarn test`: run tests

## Endpoints
`api/currency-converter?from=USD&to=BRL&amount=1` : fetches data from currency converter and saves to contentful 

## Chron Job
Github Actions runs a chron job that triggers the `api/currency-converter` once an hour with the correct params. You can view the job in the root `.github/workflows` directory in the `chron.yml` file

## Demo

This app is available at [smartrr-sr-app-engineer-homework](https://smartrr-sr-app-engineer-homework.vercel.app/)

## Open issues 🤔

### Using fetch in Next Serverless Function
I had to make a last minute switch from fetch to axios. Next.JS Serverless Functions were not playing well with fetch giving this warning occasionally. 
>Warning: This is an experimental feature and could change at any time" message
I tried to resolve with `node-fetch` but that didn't cut it.
The serverless function would also occasionally read `NEXT_PUBLIC_CURRENCY_CONVERTER_API_KEY` env var as undefined so that is hardcoded as well

### Test Coverage
Query Content test failure test is throwing the error I'm expecting but the test isn't catching it and the app crashes.

ManageContentClient tests are missing - those would be good to cover

Overall the test probably could be a little more thorough but I could use some guidance in that area.

### Various Todos
There are a few todo's throughout the app - just thought in certain places that could be improved on or otherwise cleaned up.


