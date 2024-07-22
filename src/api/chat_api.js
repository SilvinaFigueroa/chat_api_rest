
// Openai ChatGPT Implementation 

// import axios from 'axios'

// const API_MODEL = "https://api.openai.com/v1/engines/gpt-3.5-turbo-0125/completions"

// const apiCall = async ({ message }) => {

//     const options = {
//         prompt: message,
//         max_tokens: 150, // max tokens per answer
//         n: 1, // One message per question 
//         stop: null,
//         temperature: 0.7, // creativity 
//     }
//     try {
//         console.log(`Sending request to OpenAI API with options: ${JSON.stringify(options)}`) // debugging line

//         const response = await axios.post(
//             API_MODEL,
//             options,
//             {
//                 headers: {
//                     'Authorization': `Bearer ${import.meta.env.VITE_GPT_AI_KEY}`
//                 }
//             }
//         )
//         console.log(`Received response from OpenAI API: ${JSON.stringify(response.data)}`) // debugging line
//         return response.data.choices[0].text

//     } catch (err) {
//         console.error(`Error from OpenAI API: ${JSON.stringify(err.response ? err.response.data : err.message)}`)
//         throw err
//     }

// }


// Google Gemini Implementation
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import systemInstruction from "./system_instruction"

// Use environment variables for API key
const apiKey = import.meta.env.VITE_GOOGLE_GENERATIVE_AI_KEY
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: systemInstruction

})

const generationConfig = {
    temperature: 0.95,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

const apiCall = async ({  name, career, message }) => {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [
                {
                  role: "user",
                  parts: [
                    {text: `Hi, I'm ${name} and I want to become a ${career}. ${message}`}
                  ],
                }
            ]
        });

        const result = await chatSession.sendMessage(message);
        return result.response.text();
    } catch (err) {
        console.error('Error from Google Generative AI:', err.response ? err.response.data : err.message);
        throw err;
    }
};


export default apiCall