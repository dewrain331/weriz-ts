const badRequest = (req, res, next) => {
  res.status(404).json("error.unexpected_URL")
};

export { badRequest };