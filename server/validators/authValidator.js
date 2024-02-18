const { z } = require("zod");

const singUpSchema = z.object({
  userName: z
    .string({ required_error: "Name is Require" })
    .trim()
    .min(2, { message: "Name atleast be min 2 char" })
    .max(255, { message: "Name cant not be more than 255 char" }),
  email: z
    .string({ required_error: "Email is require" })
    .email({ message: "please enter a valid email" }),
  phone: z
    .string({ required_error: "phone is require" })
    .trim()
    .min(10, { message: "phone is not valid" })
    .max(10, { message: "phone is not valid" }),
  password: z
    .string({ required_error: "password is require" })
    .min(6, { message: "password alteast be min 6 char" }),
});

module.exports = singUpSchema;
