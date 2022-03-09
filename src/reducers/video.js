const initState = {
  videos: [],
  selectedVideo: null,
};

const videoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_VIDEO':
      return {
        ...state,
        videos: action.payload,
      };

    case 'VIDEO_SELECTION':
      return {
        ...state,
        selectedVideo: action.payload,
      };

    default:
      return state;
  }
};

export default videoReducer;
