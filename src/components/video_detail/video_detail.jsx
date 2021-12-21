import React from 'react';
import styles from './video_detail.modual.css';

const VideoDetail = ({ video }) => <h1>{video.snippet.title}</h1>;

export default VideoDetail;
