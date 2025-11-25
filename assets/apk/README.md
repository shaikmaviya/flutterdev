# APK Files Directory

## Instructions

Place your **Ishq Reply** APK file in this directory with the name:
```
ishq-reply.apk
```

### Steps to Add Your APK:

1. **Locate your APK file** - Find your compiled Ishq Reply APK file
   - Usually located in: `your_flutter_project/build/app/outputs/flutter-apk/app-release.apk`

2. **Rename the file** to `ishq-reply.apk`

3. **Copy it to this folder**:
   - Full path: `c:\Users\black\OneDrive\Desktop\Android developer Portfolio\assets\apk\ishq-reply.apk`

4. The download link on your portfolio will now work automatically!

### File Structure:
```
assets/
  └── apk/
      ├── ishq-reply.apk  (Your APK file goes here)
      └── README.md       (This file)
```

### APK Size Recommendations:
- Keep APK size under 50MB for better download experience
- Consider using app bundles (.aab) for Google Play Store
- For direct APK distribution, optimize your app size

### Alternative Options:

If you prefer to host the APK elsewhere:
1. **Google Drive**: Upload APK and get shareable link
2. **Dropbox**: Upload and share direct download link
3. **Firebase Storage**: Host APK on Firebase
4. **GitHub Releases**: Create a release with APK attachment

Then update the link in `index.html`:
```html
<a href="YOUR_APK_LINK_HERE" class="project-link" download>
```

---

**Note**: Make sure your APK is signed before distribution!
