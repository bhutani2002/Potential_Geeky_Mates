const { chatgptApiCall } = require("../services/Chatgpt");
const { dummyRecomendation } = require("../services/Dummy");

const getFormData = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    // const result = await chatgptApiCall("list of popular location");
    const response = dummyRecomendation(data);
    // console.log(response);
    res.status(200).json({ data: response });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getFormData };
