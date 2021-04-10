import { Forecast, getForecast, GetForecastRequestParams } from '../../api/weather';
import { ForecastType } from './types';

export const getForecastAction = (cityName: string, params?: GetForecastRequestParams) => async (
  dispatch: any
) => {
  dispatch({
    type: ForecastType.GET_FORECAST_REQUEST
  });

  try {
    const res = await getForecast(cityName, params);

    const { city, list } = res.data;

    const forecastByDays: Forecast[][] = [];

    let dayForecast: Forecast[] = [];

    for (let i = 0; i < list.length; i++) {
      const forecastDate = list[i].dt_txt.slice(0, 10);
      const nextForecastDate = list[i + 1]?.dt_txt.slice(0, 10);

      dayForecast.push(list[i]);

      if (forecastDate !== nextForecastDate || i === list.length - 1) {
        forecastByDays.push(dayForecast);
        dayForecast = [];
      }
    }

    dispatch({
      type: ForecastType.GET_FORECAST_SUCCESS,
      payload: {
        forecastByDays,
        city
      }
    });
  } catch (err) {
    if (err.response.status === 404) {
      alert('Write correct city name!');
    }

    dispatch({
      type: ForecastType.GET_FORECAST_FAIL,
      payload: err
    });
  }
};
