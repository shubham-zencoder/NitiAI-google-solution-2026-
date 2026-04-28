# NitiAI

NitiAI is a React-based MVP for Jobs, Loans, and Healthcare assistance powered by Gemini.

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

## Test

```bash
npm test
```

## Environment

Create a `.env` file in the project root:

```bash
REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
```

## Deployment

The app is configured for Firebase Hosting with `build` as the public directory. After setting up a Firebase project, run:

```bash
firebase deploy --only hosting
```

## Notes

- The app uses React Router for the three module pages.
- Tailwind CSS v3 is configured in `tailwind.config.js` and `postcss.config.js`.
- `.env` is ignored by `.gitignore` and should never be committed.
