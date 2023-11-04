const getFormData = async (req, res) => {
  try {
    const data = req.body;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getFormData };
