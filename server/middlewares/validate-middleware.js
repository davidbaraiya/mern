const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    let error = err.errors[0].message;
    next({ status: 400, message: error });
    // res.status(400).json({ message: error });
    console.log(err);
  }
};

module.exports = validate;
