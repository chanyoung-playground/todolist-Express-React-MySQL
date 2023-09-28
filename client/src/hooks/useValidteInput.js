export function useValidateInput() {
  const validateInput = (id, value, isValidInput) => {
    if (id === 'email') {
      const pattern = /@/;
      return { ...isValidInput, [id]: pattern.test(value) };
    } else if (id === 'password') {
      return { ...isValidInput, [id]: value.length >= 8 };
    }
  };

  return validateInput;
}
