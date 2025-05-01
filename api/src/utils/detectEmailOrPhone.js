function detectEmailOrPhone(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (emailRegex.test(input)) {
    return 'email';
  } else if (phoneRegex.test(input)) {
    return 'phone';
  } else {
    return 'invalid';
  }
}

module.exports = detectEmailOrPhone;


