import axios from 'axios';

const KEY = 'AIzaSyBTDjooSCsXWjd6opWYoXYA6TCFwvMeKIU'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 20,
        type: 'video',
        key: KEY

    }

}) 