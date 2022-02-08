export const useJoiValidator = (object: any, schema) => {
  const validationResult = schema.validate(object);

  try {
    const errorMessage: string = validationResult.error.details[0].message;

    return [
      errorMessage,
      null
    ];
  } catch (e) {
    return [
      null,
      validationResult.value
    ];
  }
};
