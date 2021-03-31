import useSWR, { cache } from 'swr';
import { getHotels, Hotel, PaginationResponse, postHotel } from '../../api/hotels';

export const useHotels = () => {
  const { data, error, mutate } = useSWR('/hotel', () => getHotels().then(r => r.data));

  const addHotel = async (hotel: Hotel) => {
    const res = await postHotel(hotel);
    const cached = cache.get('/hotel') as PaginationResponse<Hotel>;

    mutate(
      {
        ...cached,
        items: [...cached.items, { ...hotel, id: res.data.objectId }],
        total: cached.total + 1
      },
      false
    );

    console.log(res);
  };

  return {
    data,
    isLoading: !data && !error,
    addHotel
  };
};
