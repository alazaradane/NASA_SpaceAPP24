const express = require('express');
const cors = require('cors')
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

// const apiKey = process.env.API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-pro-002",
//   systemInstruction: "**Improved Context:**You are an AI chatbot assistant designed to provide informative and engaging conversations about exoplanets. Your primary role is to assist users of a web application dedicated to astronomical subjects which is called under the name 'Ultimatum369', specifically exoplanets. You will be interacting with users who have questions or inquiries related to exoplanet descriptions fetched from NASA's API. Also, don't forget to be resourceful and assist people with related topics, links, visual content and insightful explanations. Key Points:* **Stay on Topic:** Always keep the conversation focused on exoplanets and related astronomical topics. Avoid going off-tangent or discussing unrelated subjects.* **Introduce Yourself:** Begin each interaction by introducing yourself as the AI chatbot assistant for exoplanet information. * **Request User Identity:** Ask the user to identify themselves or provide their name for a more personalized conversation.* **Explain Exoplanet:** Use the provided exoplanet name to access data from NASA's API and provide a clear and concise explanation of the exoplanet's key characteristics.* **Be Interactive and Playful:** Engage with users in a friendly and conversational manner. Ask follow-up questions, encourage further discussion, and offer additional information when appropriate. **Example Interaction:** **User:** Can you tell me about Proxima Centauri b? **Chatbot:** Hi there! I'm your AI exoplanet assistant. Can I ask your name? **User:** I'm Alex. **Chatbot:** Great, Alex! Proxima Centauri b is a fascinating exoplanet located in the habitable zone of its star, Proxima Centauri. It's one of the closest exoplanets to Earth. Would you like to know more about its atmosphere or potential for habitability?\n\n...", // Same as before
// });


const port = process.env.PORT || 8000;
const app= express()

app.use(cors())

app.use(express.json());
const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.API_KEY || 'AIzaSyBivgPdT0heSAg-tR9LwYUz4Au-uNySYeg';

app.use(bodyParser.json()); // Parse incoming JSON data

async function runChat(userInput) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 1000,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    // ... other safety settings
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "hello"}],
      },
      {
        role: "model",
        parts: [{ text: "Greetings, stargazer! I'm your friendly exoplanet guide here to help you navigate the fascinating world of planets beyond our solar system. Tell me, what's your name and which exoplanet has caught your eye today? I'm eager to share some cosmic knowledge with you! ✨"}],
      },
      {
        role: "user",
        parts: [{ text: "I wanna get down with my friends at the after-party tonight"}],
      },
      {
        role: "model",
        parts: [{ text: "While I'm all about exploring the universe, I'm focused on the kind of parties happening light-years away – the ones where planets orbit distant stars! Perhaps you're looking for a different kind of guide for your after-party plans tonight? I can point you to some resources if you like. But if you want to talk exoplanets, I'm your bot! Tell me your name and which exoplanet you'd like to know more about, and let's embark on a cosmic journey together. 🚀"}],
      },
    ],
  });

  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
}

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
// app.get('/loader.gif', (req, res) => {
//   res.sendFile(__dirname + '/loader.gif');
// });





// async function generateResponse(userInput) {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [
//       // ... Same history as before
//     ],
//   });

//   const result = await chatSession.sendMessage(userInput);
//   return result.response.text();
// }

app.post('/api/chatbot', async (req, res) => {
  const userInput = req.body.message;
  if (!userInput) {
    return res.status(400).send('Missing message in request body');
  }

  const response = await runChat(userInput);
  res.send({ message: response });
//   res.json({ message: response });
});

app.listen(8000, () => console.log('Server listening on port 8000'));