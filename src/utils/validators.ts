export const emailValidator = (_: any, value: string) => {
  if (!value || value.trim().length === 0) {
    return Promise.reject(new Error("Email can not be blank!"));
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return Promise.reject(new Error("Please enter a valid email address!"));
  }
  return Promise.resolve();
};

export const passwordValidator = (_: any, value: string) => {
  if (!value || value.trim().length === 0) {
    return Promise.reject(new Error("Password can not be blank!"));
  }
  if (value.length < 5) {
    return Promise.reject(
      new Error("Password must be at least 5 characters long!")
    );
  }
  return Promise.resolve();
};
