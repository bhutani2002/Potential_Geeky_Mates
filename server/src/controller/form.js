const { Configuration, OpenAIApi } = require("openai");
const { chatgptApiCall } = require("../services/Chatgpt");

const getFormData = async (req, res) => {
  try {
    const data = req.body;

    const result = await chatgptApiCall("list of popular location");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getFormData };
