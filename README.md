This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

The main pages is located at `app/page.js`.

## Hosting on a custom domain (AKA: soupocalypse.com)

Build the app, commit and push changes:

```bash
git checkout main

npm run build

git add .

git commit -m '[your message]'

git push
```

The next.js [GitHub Action](https://github.com/annaboodle/soupocalypse/actions) will run automatically and deploy the changes to the live site.

## Hosting on GitHub Pages (not currently the case as of 1/21/26)

If the site is NOT hooked up to a custom domain and you see the 404 page, check the next.config.mjs file. There are some lines that need to be commented out for local development, but they will be necessary for hosting on GitHub Pages. 

### Local development

In the next.config.mjs file, comment these out:

```bash
  basePath: "/soupocalypse",
  assetPrefix: "/soupocalypse/",
```

## Deploy the app to GitHub Pages

In the next.config.mjs file, make sure these lines are NOT commented out:

```bash
  basePath: "/soupocalypse",
  assetPrefix: "/soupocalypse/",
```

## Helpful resources

Deploying Next.js app to GitHub Pages:

- [How to deploy a Nextjs app to GitHub pages?](https://medium.com/frontendweb/how-to-deploy-a-nextjs-app-to-github-pages-1de4f6ed762e)
- [Discussion that helped resolve build errors](https://github.com/vercel/next.js/discussions/58790)

Learning more about Next.js:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [the Next.js GitHub repository](https://github.com/vercel/next.js/)

CircleType (used for the page header - currently removed due to lack of browser support):

- [the Next.js GitHub repository](https://circletype.labwire.ca/#fitText)
