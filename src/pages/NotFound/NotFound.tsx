import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { FormikInput } from '../../components/shared/formikAdapters';
import { WeatherFormSchema } from '../../utils/validation-schemas';
import { getForecastAction } from '../../state/actions/weather';
import { AppState } from '../../state/store';
import { forecastSelector } from '../../state/selectors/weather';

interface WeatherForm {
  city: string;
}

const defaultValues: WeatherForm = {
  city: ''
};

export const NotFound = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getForecastAction('Lviv', {
        units: 'metric',
        lang: 'en'
      })
    );
  }, []);

  const [dayIndex, setDayIndex] = useState<number>(0); // Days from now, 0 is today
  const { forecastByDays, city } = useSelector(forecastSelector);

  const selectedDayForecast = forecastByDays[dayIndex];
  const selectedDate = selectedDayForecast && selectedDayForecast[0].dt_txt.slice(0, 10);

  return (
    <div>
      <button onClick={() => setDayIndex(prev => prev - 1)} disabled={dayIndex <= 0}>
        Prev Day
      </button>
      <span>{selectedDate}</span>
      <button onClick={() => setDayIndex(prev => prev + 1)} disabled={dayIndex >= forecastByDays.length - 1}>
        Next Day
      </button>

      <Formik
        initialValues={defaultValues}
        validationSchema={WeatherFormSchema}
        onSubmit={val => {
          dispatch(
            getForecastAction(val.city, {
              units: 'metric',
              lang: 'en'
            })
          );
        }}
      >
        <Form>
          <FormikInput name='city' label='Your city' />

          {city && <span>Weather in {city.name}</span>}
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Temprature</th>
                <th>Humidity</th>
                <th>Pressure</th>
                <th>Wind Speed</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {selectedDayForecast ? (
                selectedDayForecast.map(forecast => (
                  <tr key={forecast.dt}>
                    <td>{forecast.dt_txt.slice(11)}</td>
                    <td>{forecast.main.temp}</td>
                    <td>{forecast.main.humidity}</td>
                    <td>{forecast.main.pressure}</td>
                    <td>{forecast.wind.speed}</td>
                    <td>{forecast.weather.reduce((acc, cur) => (acc ? ', ' : '') + cur.description, '')}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
          <button>Get weather</button>
        </Form>
      </Formik>
    </div>
  );
};
