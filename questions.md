# vuex Computed property "XXX" was assigned to but it has no setter

Computed property "XXX" was assigned to but it has no setter

> 001 中留了个小坑，有同学问，按照你的方法后，问啥报错了？ -> . ->   虽然不影响使用，报错也不行呀。

### 分析原因：

```
1.组件中v-model=“XXX”，而XXX是vuex state中的某个变量
2.vuex中是单项流，v-model是vue中的双向绑定，
但是在computed中只通过get获取参数值，没有set无法改变参数值
```

\#解决方法：

#### 方法1

> 将v-model 改为  :value

#### 方法2

在computed里面添加：

```
computed:{
    ...mapState({
   	<!-- cpShow:'cpShow' -->
    }),
    <!-- 上面这种获取只有get没有set，修改为下面方式 -->
    cpShow:{
   	 get() {
   		 return this.$store.state.cpShow;
   	 },
   	 set(val) {
   		 this.$store.state.cpShow = val
   	 }
    }
}
```

# Error in nextTick: “RangeError: Maximum call stack size exceeded”：如何解决？？？

### nextTick错误:“RangeError:最大调用[堆栈](https://so.csdn.net/so/search?q=堆栈&spm=1001.2101.3001.7020)大小超过”

![在这里插入图片描述](https://img-blog.csdnimg.cn/f160be80831c4afcacd14a10e30761c5.png)
刚刚写项目中遇到了这个问题，然后百度了一番，
发现这几个我都没有问题
第一：我没有使用递归
第二：也没有return 无结束，一直循环
第三：路由拦截也没有出错

最后终于找到了，问题就是（组件中的name名不要和组件名相同！！！！）我真的一整个大无语啊。。。
![在这里插入图片描述](https://img-blog.csdnimg.cn/9fa92cbefe0e44f88e6f58120ad568f5.png)
