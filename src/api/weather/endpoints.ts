import { getQueryParams } from '../../utils/helpers';
import Axios from '../axios';
import { GetForecastResponse } from './types';

export interface GetForecastRequestParams {
  cnt?: number;
  lang?: string;
  units?: 'standard' | 'metric' | 'imperial';
}

export const getForecast = (
  city: string,
  params?: GetForecastRequestParams
): Promise<GetForecastResponse> => {
  return Axios.instance.get('/forecast' + getQueryParams({ ...params, q: city }));
};
