import { uniq } from "lodash";
import youtube from "../apis/youtube";

export const fetchVideo = () => {
    return  {
        type: 'FETCH_VIDEO'
    }
}