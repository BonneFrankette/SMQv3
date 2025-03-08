## Video Files

Place your video files in this directory. For the hero background video, we recommend:

1. **Format**: WebM or MP4 (H.264 codec)
2. **Resolution**: 1920x1080 or lower depending on file size constraints
3. **Duration**: 30-60 seconds, looped
4. **File size**: Optimized for web (ideally under 10MB)

### Current Videos
- `conferencefm.webm` - Hero section background video

### Usage Instructions
The video is already configured in the Hero component:
```jsx
<source src="/videos/conferencefm.webm" type="video/webm" />
```

### Optimization Tips
For large video files:
- Consider using a video compression tool like HandBrake
- Reduce resolution if necessary
- Lower the bitrate while maintaining acceptable quality
- Consider hosting on a CDN for better performance
