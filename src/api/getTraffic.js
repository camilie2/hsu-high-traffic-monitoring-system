import axios from 'axios';

export const getTraffic = async () => {
  try {
    const response = await axios.get(
        'https://jig7n1qynd.execute-api.ap-northeast-2.amazonaws.com/traffic-stage-1/traffic',
      );
      return response.data;
  } catch (error) {
    console.error('Error', error.message);
    throw error;
  }
};
