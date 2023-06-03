const validateId = (req, res, next) => {
  const { id } = req.params;

  if (id === null) return res.status(400).json({ message: "id is riquired" });

  return next();
};

module.exports = validateId;