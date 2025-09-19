import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true, // prevent XSS attacks: cross site scripting
    secure: process.env.NODE_ENV === "development" ? false : true, // only send cookie over https in production
    sameSite: "strict", // CSRF protection (cross site request forgery)
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  return token;
};
