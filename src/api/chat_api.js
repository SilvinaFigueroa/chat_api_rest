import axios from 'axios'

const API_MODEL = "https://api.openai.com/v1/engines/gpt-3.5-turbo-0125/completions"

const apiCall = async ({ message }) => {

    const options = {
        prompt: message,
        max_tokens: 150, // max tokens per answer
        n: 1, // One message per question 
        stop: null,
        temperature: 0.7, // creativity 
    }
    try {
        console.log(`Sending request to OpenAI API with options: ${JSON.stringify(options)}`) // debugging line

        const response = await axios.post(
            API_MODEL,
            options,
            {
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            }
        )
        console.log(`Received response from OpenAI API: ${JSON.stringify(response.data)}`) // debugging line
        return response.data.choices[0].text

    } catch (err) {
        console.error(`Error from OpenAI API: ${JSON.stringify(err.response ? err.response.data : err.message)}`)
        throw err
    }

}

export default apiCall