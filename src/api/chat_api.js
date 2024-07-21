
import { useState } from 'react'
import axios from 'axios'
import dotenv from "dotenv"

dotenv.config()

const API_MODEL = "https://api.openai.com/v1/engines/gpt-3.5-turbo-0125/completions"
const API_KEY = process.env.API_KEY

const [chatResponse, setChatResponse] = useState(null);


const apiCall = ({ message }) => {

    const options = {
        prompt: message,
        max_tokens: 150, // max tokens per answer
        n: 1, // One message per question 
        stop: null,
        temperature: 0.7, // creativity 
    }

    const getResponse = async () => {
        try {
            const response = await axios.post(API_MODEL,
                { options },
                { headers: { 'Authorization': `Bearer ${API_KEY}` } }
            )

            setResponse(response.data.choices[0].text)

        } catch (err) {
            console.error(err)

        }

    }
}
export default apiCall