/** Shared antd validation rules for the auth forms. */

export const NAME_RULES = [
  { required: true, whitespace: true, message: "Please enter your full name" },
  { min: 2, message: "Your name should be at least 2 characters" },
  { max: 60, message: "Your name should be at most 60 characters" },
];

export const EMAIL_RULES = [
  { required: true, message: "Please enter your email" },
  { type: "email", message: "Please enter a valid email address" },
];

export const NEW_PASSWORD_RULES = [
  { required: true, message: "Please create a password" },
  { min: 8, message: "Use at least 8 characters" },
  { max: 64, message: "Use at most 64 characters" },
  {
    pattern: /^(?=.*[A-Za-z])(?=.*\d).+$/,
    message: "Include at least one letter and one number",
  },
];

export const PASSWORD_RULES = [{ required: true, message: "Please enter your password" }];
