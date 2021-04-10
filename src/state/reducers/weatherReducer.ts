// import * as Types from '../actions/types';

import { Forecast, PaginationResponse } from '../../api/weather';
import { ForecastType } from '../actions/types';

interface ForecastReducerState {
  city: PaginationResponse<Forecast>['city'] | null;
  loading: boolean;
  forecastByDays: Forecast[][];
}

interface Action {
  type: string;
  payload: ForecastReducerState;
}

const initialState: ForecastReducerState = {
  forecastByDays: [],
  loading: false,
  city: null
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ForecastType.GET_FORECAST_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }

    case ForecastType.GET_FORECAST_SUCCESS: {
      return {
        ...state,
        loading: false,
        forecastByDays: action.payload.forecastByDays,
        city: action.payload.city
      };
    }

    case ForecastType.GET_FORECAST_FAIL: {
      return {
        ...state,
        loading: false
      };
    }

    default:
      return state;
  }
};
