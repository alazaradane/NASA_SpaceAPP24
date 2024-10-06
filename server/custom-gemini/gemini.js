const express = require('express');
const bodyParser = require('body-parser');

/*
* Install the Generative AI SDK and Express.js
*
* $ npm install @google/generative-ai express body-parser
*/

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro-002",
  systemInstruction: "**Improved Context:**\n\n...", // Same as before
});

const generationConfig = {
  temperature: 0.5,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const app = express();
app.use(bodyParser.json()); // Parse incoming JSON data

async function generateResponse(userInput) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      // ... Same history as before
    ],
  });

  const result = await chatSession.sendMessage(userInput);
  return result.response.text();
}

app.post('/chat', async (req, res) => {
  const userInput = req.body.message;
  if (!userInput) {
    return res.status(400).send('Missing message in request body');
  }

  const response = await generateResponse(userInput);
  res.send({ message: response });
});

app.listen(8000, () => console.log('Server listening on port 8000'));