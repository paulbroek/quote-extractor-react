# quote-extractor-react

Extracting quotes from Instagram posts using React Native

## To-do

- [ ] Access recent (picture) files in app
- [ ] Extract text from those quote files, here is [how](https://swairaq.medium.com/live-ocr-in-react-native-ef72e7c55934)
- [ ] ...

## Run expo app on Android Studio virtual machine

Run `npm start` , or `expo start` in terminal, and press `a` for Android device

A lot of errors can appear, some possible fixes:

- Use `./emulator` from `~/Android/Sdk/emulator` and **not** `~/Android/Sdk/tools/emulator`

- Remove lock files in `~/.android/avd/YOUR_DEVICE

```bash
# example
sudo rm  ~/.android/avd/Pixel_3a_API_30.avd/*.lock
```

- ...
