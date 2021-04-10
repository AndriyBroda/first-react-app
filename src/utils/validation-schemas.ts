import * as Yup from 'yup';

export const WeatherFormSchema = Yup.object().shape({
  city: Yup.string().required()
});
