const stringRegex = /^[a-zA-Z\s]+$/;
const numberRegex = /^\d+$/;
const temperamentsRegex = /^[a-zA-Z\s]+$/;
const imageRegex = /^https?:\/\/[^\s/$.?#].[^\s]*\.(?:jpg|jpeg|png|gif)$/i;

const validation = (
  {
    name,
    minHeight,
    maxHeight,
    minWeight,
    maxWeight,
    min_life_span,
    max_life_span,
    temperaments,
    image,
  },
  event
) => {
  const errors = {};
  if (minHeight.length && maxHeight.length) {
    if (!numberRegex.test(minHeight) || !numberRegex.test(maxHeight)) {
      errors.height = 'Altura mínima y altura máxima deben ser numeros';
    } else if (Number(minHeight) >= Number(maxHeight)) {
      errors.height = 'La altura mínima debe ser mayor a la máxima';
    } else {
      delete errors.height;
    }
  }

  if (minWeight.length && maxWeight.length) {
    if (Number(minWeight) >= Number(maxWeight)) {
      errors.weight = 'El peso mínimo debe ser mayor al máximo';
    } else if (!numberRegex.test(minWeight) || !numberRegex.test(maxWeight)) {
      errors.weight = 'Peso mínimo y peso máximo deben ser numeros';
    } else {
      delete errors.weight;
    }
  }

  if (min_life_span.length && max_life_span.length) {
    if (Number(min_life_span) >= Number(max_life_span)) {
      errors.life_span = 'Expectativa mínima debe ser mayor a la máxima';
    } else if (
      !numberRegex.test(min_life_span) ||
      !numberRegex.test(max_life_span)
    ) {
      errors.life_span =
        'Expectativa mínima y expectativa máxima deben ser numeros';
    } else {
      delete errors.life_span;
    }
  }

  if (name.length) {
    if (!stringRegex.test(name)) {
      errors.name = 'Raza debe contener letras y espacios';
    } else {
      delete errors.name;
    }
  }
  // if (temperaments.length) {
  //   if (!temperamentsRegex.test(temperaments)) {
  //     errors.temperaments =
  //       'Los temperamentos deben ser palabras separadas por espacios';
  //   } else {
  //     delete errors.temperaments;
  //   }
  // }
  if (image.length) {
    if (!imageRegex.test(image)) {
      errors.image = 'Debe introducir un URL de una imagen';
    } else {
      delete errors.image;
    }
  }

  return errors;
};

export default validation;
