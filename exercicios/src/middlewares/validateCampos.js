const validateTitle = (req, res, next) => {
  const { title } = req.body;

  if (!title) return res.status(401).json({ message: "Title is riquired" });
  if (typeof title !== 'string') return res.status(401).json({ message: "Title used in string" });
  if (title.length < 3)
    return res.status(401).json({ message: "O titulo deve conter ao menos 3 letras" });
  
  next();
};

const validateAuthor = (req, res, next) => {
  const { author } = req.body;

  if (!author) return res.status(401).json({ message: "Author is riquired" });
  if (typeof author !== 'string') return res.status(401)
   .json({ message: "Author used in string" });
  if (author.length < 3)
    return res.status(401).json({ message: "O Author deve conter ao menos 3 letras" });

  next();
};

const validatePageQuantity = (req, res, next) => {
  const { pageQuantity } = req.body;

  if (!pageQuantity) return res.status(401).json({ message: "pageQuantity is riquired" });
  if (typeof pageQuantity !== 'number') return res.status(401).json({ message: "pageQuantity used in number" });

  next();
};

module.exports = {
  validateTitle,
  validateAuthor,
  validatePageQuantity
};