eas build --platform android --local --output ./a.aab
rm -rf *.apks *.apk *.pb
java -jar ./bundletool.jar build-apks --mode=universal --bundle=a.aab --output=a.apks
unzip *.apks
now=`date +"%d_%m"`
mv universal.apk ${now}.apk
rm -rf *.apks *.pb
