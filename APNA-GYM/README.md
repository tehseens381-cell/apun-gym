# APNA GYM – Fitness & Diet Planner

A beginner-friendly full-stack starter project:
- React + Vite frontend
- Node.js + Express backend
- BMI and estimated calorie calculations
- Vegetarian, non-vegetarian, eggetarian and vegan sample meal suggestions

## Requirements
Install Node.js LTS from https://nodejs.org/ and install VS Code.

## Run on Windows
1. Extract the ZIP.
2. Open the `APNA-GYM` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run these commands one at a time:

```bash
npm install
npm --prefix server install
npm --prefix client install
npm run dev
```

5. Open the frontend address shown by Vite, usually http://localhost:5173

The backend runs on http://localhost:5000.

If PowerShell blocks `npm.ps1`, use `npm.cmd` instead, for example:
`npm.cmd install`

## API
`POST http://localhost:5000/api/diet-plan`

Example JSON:
```json
{
  "age": 25,
  "weight": 70,
  "height": 170,
  "gender": "male",
  "foodPreference": "vegetarian",
  "goal": "fat-loss",
  "activity": "moderate"
}
```

## Important health note
This is an educational demo, not medical advice or a substitute for a registered dietitian/doctor. Calorie estimates are approximate. The demo does not generate clinical diets. Do not use it for anyone under 18, pregnant or breastfeeding, with an eating-disorder history, or with a medical condition requiring a prescribed diet. Such users should consult a qualified professional.
