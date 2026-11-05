import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const mealExamples = {
  vegetarian: [
    ["Breakfast", "Oats with milk or fortified soy milk, banana and a few nuts"],
    ["Lunch", "Dal, 2 whole-wheat rotis, seasonal sabzi and curd"],
    ["Snack", "Roasted chana and one fruit"],
    ["Dinner", "Paneer/tofu bhurji, roti and mixed vegetables"]
  ],
  "non-vegetarian": [
    ["Breakfast", "2 eggs, whole-wheat toast and one fruit"],
    ["Lunch", "Grilled chicken or fish, rice/roti and vegetables"],
    ["Snack", "Plain curd and roasted chana"],
    ["Dinner", "Dal or chicken, roti and mixed vegetables"]
  ],
  eggetarian: [
    ["Breakfast", "Vegetable omelette and whole-wheat toast"],
    ["Lunch", "Dal, rice/roti, curd and seasonal vegetables"],
    ["Snack", "Boiled egg and one fruit"],
    ["Dinner", "Paneer/tofu, roti and mixed vegetables"]
  ],
  vegan: [
    ["Breakfast", "Oats with fortified soy milk, banana and seeds"],
    ["Lunch", "Rajma/chole, rice and seasonal vegetables"],
    ["Snack", "Roasted chana and one fruit"],
    ["Dinner", "Tofu/soy chunks, roti and mixed vegetables"]
  ]
};

const activityFactors = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  high: 1.725
};

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "APNA GYM backend is running" });
});

app.post("/api/diet-plan", (req, res) => {
  const { age, weight, height, gender, foodPreference, goal, activity } = req.body ?? {};
  const numericAge = Number(age);
  const numericWeight = Number(weight);
  const numericHeight = Number(height);

  if (!Number.isFinite(numericAge) || numericAge < 18 || numericAge > 100 ||
      !Number.isFinite(numericWeight) || numericWeight < 30 || numericWeight > 300 ||
      !Number.isFinite(numericHeight) || numericHeight < 120 || numericHeight > 230) {
    return res.status(400).json({ error: "Please enter valid details. This demo is for adults aged 18+." });
  }
  if (!["male", "female"].includes(gender) ||
      !Object.hasOwn(mealExamples, foodPreference) ||
      !["fat-loss", "muscle-gain", "maintenance"].includes(goal) ||
      !Object.hasOwn(activityFactors, activity)) {
    return res.status(400).json({ error: "Please choose all options from the form." });
  }

  const bmi = numericWeight / ((numericHeight / 100) ** 2);
  // Mifflin-St Jeor estimate. These are approximate educational estimates.
  const bmr = 10 * numericWeight + 6.25 * numericHeight - 5 * numericAge + (gender === "male" ? 5 : -161);
  const maintenance = bmr * activityFactors[activity];
  const adjustment = goal === "fat-loss" ? -300 : goal === "muscle-gain" ? 200 : 0;
  const calories = Math.round(Math.max(1200, maintenance + adjustment) / 50) * 50;
  const protein = Math.round(numericWeight * (goal === "muscle-gain" ? 1.6 : 1.2));

  const bmiCategory = bmi < 18.5 ? "Below the usual adult reference range" :
    bmi < 25 ? "Within the usual adult reference range" :
    bmi < 30 ? "Above the usual adult reference range" : "Higher than the usual adult reference range";

  res.json({
    bmi: Number(bmi.toFixed(1)),
    bmiCategory,
    estimatedCalories: calories,
    proteinGrams: protein,
    goal,
    meals: mealExamples[foodPreference],
    note: "Estimates are approximate and not a prescription. Portion sizes and needs vary. Consult a registered dietitian for an individualized plan."
  });
});

app.listen(PORT, () => console.log(`APNA GYM backend running at http://localhost:${PORT}`));
