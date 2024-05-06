export const handleCityChange = (event, setCityError) => {
   const inputValue = event.target.value
   let errors = []
 
   if (!inputValue) {
     errors.push(`Укажите название города`)
   } else if (inputValue.length < 3) {
     errors.push(`Название города должно содержать не менее 3 букв`)
   } else {
     const cityPattern = /^[a-zA-Zа-яА-Я]+$/
 
     if (!cityPattern.test(inputValue)) {
       errors.push('Должны быть только буквы')
     }
   }
 
   setCityError(errors);
 }