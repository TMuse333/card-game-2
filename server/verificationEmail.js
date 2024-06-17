export const getVerificationEmailHtml = (username, verificationLink) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Email Verification</title>
</head>
<body>
  <p>Dear ${username},</p>
  <p>Thank you for registering with Quantum Card Game. Please click the link below to verify your email address:</p>
  <a href="${verificationLink}">Verify Email</a>
  <p>If you did not request this, please ignore this email.</p>
</body>
</html>
`;