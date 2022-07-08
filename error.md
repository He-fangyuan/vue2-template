# Vue.use(VueI18n)报错问题Uncaught TypeError: Cannot read properties of undefined(reading 'install')

我的vue版本和i18n版本如下



![img](https://upload-images.jianshu.io/upload_images/14620593-9121e81d56782e6e.png?imageMogr2/auto-orient/strip|imageView2/2/w/266/format/webp)

项目启动之后 报错了

![img](https://upload-images.jianshu.io/upload_images/14620593-d3e44a7be0c514b6.png?imageMogr2/auto-orient/strip|imageView2/2/w/590/format/webp)
我的解决办法是把i18n的版本 改为了 8.26.7 ，再启动项目就可以了

```css
npm install vue-i18n@8.26.7 -S
```

![img](https://upload-images.jianshu.io/upload_images/14620593-e807383502cd6040.png?imageMogr2/auto-orient/strip|imageView2/2/w/589/format/webp)