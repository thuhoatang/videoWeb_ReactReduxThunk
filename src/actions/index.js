import { uniq } from 'lodash';
import youtube from '../apis/youtube';

export const fetchVideo = (term) => async (dispatch) => {
  const response = await youtube.get('/search', { params: { q: term } });
  const {
    data: { items },
  } = response;
  dispatch({
    type: 'FETCH_VIDEO',
    payload: items,
  });
};

export const selectVideo = (video) => (dispatch) => {
  dispatch({
    type: 'VIDEO_SELECTION',
    payload: video,
  });
};
