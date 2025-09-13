# UNLTD Landing Page

This repository hosts the Next.js landing page for UNLTD. It already includes the correct Unicorn.Studio project ID and a prebuilt `unicornstudio-react` component, so no additional configuration is required.

## Local Development

```bash
# build the component library
npm install
npm run build

# run the landing page
cd site
npm install
npm run dev
```

The development server runs at <http://localhost:3000>.

## Production Build & Deploy

```bash
# build the component library
npm install
npm run build

# build and start the landing page
cd site
npm install
npm run build
npm start
```

The built site can be deployed by serving the `site` directory on any Node.js host (e.g., Vercel or Netlify).

## License

MIT
