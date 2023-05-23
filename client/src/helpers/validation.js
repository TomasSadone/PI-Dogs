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

  if (event.target.name.includes('Height')) {
    if (Number(minHeight) >= Number(maxHeight))
      errors.height = 'La altura mínima debe ser menor a la máxima';
    if (!numberRegex.test(minHeight) || !numberRegex.test(maxHeight))
      errors.height = 'Altura mínima y altura máxima deben ser numeros';
  }
  if (event.target.name.includes('Weight')) {
    if (Number(minWeight) >= Number(maxWeight))
      errors.weight = 'El peso mínimo debe ser menor al máximo';
    if (!numberRegex.test(minWeight) || !numberRegex.test(maxWeight))
      errors.weight = 'Peso mínimo y peso máximo deben ser numeros';
  }
  if (event.target.name.includes('life_span')) {
    if (Number(min_life_span) >= Number(max_life_span))
      errors.life_span = 'Expectativa mínima debe ser menor a la máxima';
    if (!numberRegex.test(min_life_span) || !numberRegex.test(max_life_span))
      errors.life_span =
        'Expectativa mínima y expectativa máxima deben ser numeros';
  }
  if (event.target.name === 'name') {
    if (!stringRegex.test(name))
      errors.name = 'Raza debe contener letras y espacios';
  }
  if (event.target.name === 'temperaments') {
    if (!temperamentsRegex.test(temperaments))
      errors.temperaments =
        'Los temperamentos deben ser palabras separadas por espacios';
  }
  if (event.target.name === 'image') {
    if (!imageRegex.test(image))
      errors.image = 'Debe introducir un URL de una imagen';
  }

  return errors;
};

export default validation;
