export const handleCityChange = (event, setCityError) => {
  const inputValue = event.target.value;
  let errors = [];

  if (!inputValue) {
    errors.push("Укажите название города");
  } else if (inputValue.length < 3) {
    errors.push("Название города должно содержать не менее 3 букв");
  } else {
    const cityPattern = /^[A-Za-zА-Яа-яёЁ\s]+([-'][A-Za-zА-Яа-яёЁ\s]+)*$/;

    if (!cityPattern.test(inputValue)) {
      errors.push(
        "Используйте только буквы и дефис, за которым должно следовать ещё одно слово."
      );
    }
  }

  setCityError(errors);
};
