import Axios from '../axios';
import { GetHotelResponse, Hotel, PostHotelResponse } from './types';

export const getHotels = (): Promise<GetHotelResponse> => {
  return Axios.get('/hotel');
};

export const postHotel = (body: Hotel): Promise<PostHotelResponse> => {
  return Axios.post('/hotel', body);
};
