const OpenAI = require("openai");
const axios = require("axios");
let chatgptApiCall = async (user_input) => {
  const apiUrl = "https://api.openai.com/v1/engines/davinci/completions"; // Use the GPT-3 engine

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`,
  };

  const data = {
    prompt: user_input,
    max_tokens: 100,
  };

  try {
    const response = await axios.post(apiUrl, data, { headers });
    const chatGPTResponse = response.data.choices[0].text;

    console.log("ChatGPT Response:", chatGPTResponse);
  } catch (err) {
    if (err.response) {
      console.log(err.response.status);
      console.log(err.response.data);
    } else {
      console.log(err.message);
    }
  }
};

module.exports = { chatgptApiCall };
