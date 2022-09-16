const errorMiddleware = (error, req, res, next) => {
  const errMsg = {
    errMsg: error.message,
  }

  if (errMsg = "error.unauthorized") {
    res.status(401).json(errMsg)
  }

  res.status(400).json(errMsg)
};

export { errorMiddleware };