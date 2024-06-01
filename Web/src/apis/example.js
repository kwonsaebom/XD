import { baseAPI } from './customApi';

export const exampleApi = async (params) => {
  try {
    const response = await baseAPI.get(`/example`, params);
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 실패');
    return undefined;
  }
};
