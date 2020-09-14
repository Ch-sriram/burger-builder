export const updateObject = (oldObject, updatedProperties) => ({ ...oldObject, ...updatedProperties });

export const checkValidity = (value, rules) => {
  if (!rules) return true;
  let isValid = true;
  isValid = rules.required ? value.trim() !== "" && isValid : isValid;
  isValid = rules.minLength ? value.length >= rules.minLength && isValid : isValid;
  isValid = rules.maxLength ? value.length <= rules.maxLength && isValid : isValid;
  // eslint-disable-next-line no-useless-escape
  isValid = rules.isEmail ? /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value) && isValid : isValid;
  isValid = rules.isNumeric ? /^\d+$/.test(value) && isValid : isValid;
  // eslint-disable-next-line no-useless-escape
  isValid = rules.isAlphaNumeric ? /^[A-Za-z0-9]+[\-]*[A-Za-z0-9]$/.test(value) && isValid : isValid;
  return isValid;
}
