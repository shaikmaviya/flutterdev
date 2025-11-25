# Profile Video Setup

## Instructions

Add your profile video to this folder with the name:
```
profile.mp4
```

### Steps:

1. **Record or select your video**
   - Professional introduction video (15-30 seconds recommended)
   - Clear lighting and good audio
   - Vertical or square format works best
   - Show yourself coding, speaking, or presenting

2. **Video Requirements**:
   - **Format**: MP4 (H.264 codec) - best compatibility
   - **Alternative**: WebM format for better compression
   - **Resolution**: 720p to 1080p (1280x720 or 1920x1080)
   - **Aspect Ratio**: 1:1 (square) or 9:16 (vertical) recommended
   - **File Size**: Keep under 5MB for fast loading
   - **Duration**: 10-30 seconds (loops automatically)
   - **Quality**: High quality but optimized for web

3. **Rename the file** to `profile.mp4`

4. **Copy it to this folder**:
   - Full path: `c:\Users\black\OneDrive\Desktop\Android developer Portfolio\assets\videos\profile.mp4`

5. **Optional**: Add WebM version for better compression
   - Name it `profile.webm`
   - The browser will automatically choose the best format

### Video Optimization Tips:

**Compress Your Video:**
- Use HandBrake (free tool): https://handbrake.fr/
- Use online tools like CloudConvert: https://cloudconvert.com/
- Target bitrate: 1-2 Mbps for good quality at small size

**Recommended Settings:**
- Codec: H.264
- Container: MP4
- Frame Rate: 30fps
- Audio: AAC, 128kbps (or remove audio if not needed)
- Resolution: 720p (1280x720) for balance of quality and size

**Quick Compression with HandBrake:**
1. Open video in HandBrake
2. Select "Web" preset
3. Set dimensions to 720p
4. Adjust quality slider to 22-24
5. Save as profile.mp4

### Video Features:

✅ **Auto-play** - Starts playing automatically when page loads
✅ **Muted** - Plays without sound (better user experience)
✅ **Loop** - Continuously repeats
✅ **Hover effect** - Scales up and adds blue border on hover
✅ **Responsive** - Adapts to different screen sizes

### File Structure:
```
assets/
  └── videos/
      ├── profile.mp4   (Your video goes here)
      ├── profile.webm  (Optional: WebM version)
      └── README.md     (This file)
```

### Alternative: Use Image Instead

If you prefer an image instead of video, uncomment this line in `index.html`:
```html
<img src="assets/images/profile.jpg" alt="Maviya Shaik" class="profile-pic">
```

And comment out the video element.

---

**Current Setup**: The portfolio displays `profile.mp4` with auto-play and loop

If video doesn't load, ensure:
- File name is exactly `profile.mp4`
- File is in the correct folder
- File size is reasonable (under 10MB)
- Video codec is H.264 (most compatible)
