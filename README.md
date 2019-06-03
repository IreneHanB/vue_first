# 准备做一个 阅读、书籍类 小项目？

## 说在前面（github萌新使用）

把本地项目托管到码云中
在.gitignore中定义一下 忽略文件 node_modules
(在webstorm中有.idea,这是文件夹，里面放了你自己webstorm相关的配置，比如说tab键是空格还是tab键，空格是4个还是两个，这个.idea也没有必要上传上去)
同样还有 .vscode
.git(这个文件夹存了一些版本)

要有readme.md 、LICENSE 开源协议（这里copy了mui的）
可阅读知乎的 “主流开源协议之间有何异同” （https://www.zhihu.com/question/19568896）

### 创建本地的仓储

1.git init 初始化一下  就会生成 .git文件
2.git status 
3.git add . 
3.git commit -m"提交信息"
4.git status 应该有 On branch master nothing to commit，working tree clean
以上步骤只是提交到了本地.git中去，还没有和 远端仓库做任何关联
公钥查看：我的电脑>用户>17500>.ssh>id_rsa.pub
具体查看我的博客园账号（一般网友）写的步骤。

### 用传统方式把修改过的代码上传到码云

1. git add .
2. git commit -m "提交信息"
3. git push

## 概要介绍

我的vue初体验，里面内容不重要，开源的接口失效也是常有的事。

## 详细过程

### 大体布局

- 套用准备好的model，npm i

- App.vue 根组件分为三个部分
  1.顶部Header
  2.中间路由区域router-view
  3.底部Tabber

  当点击路由连接的时候，切换地址栏，地址栏的改变被路由给监听到，路由监听到则会进行路由的匹配，匹配到之后就展示对应的组件，组件放到rouer-view中



- 怎么把Vue.app放到页面中：
  在入口文件中：
  import Vue 并且new一个vue实例
  import app组件 并渲染


```
import Vue from 'vue'
import app from './App.vue'

var vm = new Vue({
  el:'#app',//指定要控制的哪一个元素
  render:c =>(app)//render函数,里面有一个c形参，调用一下，渲染app组件
})
```
****
#### 顶部Header

使用mint-ui组件，打开mint-ui（http://mint-ui.github.io/#!/zh-cn），开始使用，找到header
使用<mt-header>，则要在 main.js 中按需导入Mint-UI中的组件

```
import { Header} from "mint-ui"
Vue.component(Header.name,Header);//手动注册
```
**注意：这里的header固定定位了，不占标准流了，下面的元素就顶上去了，所以可以给最外层这个大盒子加个padding-top（在App.vue的框住三个区域的div添加一个class="app-container",在下面style中写样式）**

****
#### 底部Tabber

哈哈哈因为mint-ui太丑了，所以用mui
找到mui-master文件夹>examples>hello-mui>examples>tabber.html
右键检查

1. 复制 <nav>中的内容

2. 在main.js中导入MUI的样式
   `import './lib/mui/css/mui.css'`

3. 更改图标

   - 查看>examples>hello-mui>examples>icons.html和icons-extra.html

   - 购物车图标用到了icons-extra.css，所以需要 手动将用到的文件放到 lib mui css中，在main.js中导入一下`import'./lib/mui/css/icons-extra.css'`

   - 同时这个css依赖于mui-icons-extra.ttf字体库，所以也把他手动放到lib mui fonts下

4. 把下面的tabbar改成路由链接

   - 检查package.json中有没有 vue-router的包（npm install vue-router）

   - 有的话就可以配置路由了，在main.js导入

     ```
     //4.1导入路由的包
     import VueRouter from 'vue-router'
     //4.2安装路由
     Vue.use(VueRouter)
     //4.3导入自己的router.js路由模块
     import router from './router.js'
     //4.4 把router写在vm实例中，挂载路由对象到VM实例上
     router
     ```

   - 打开App.vue，在底部Tabbar区域中，将 <a>标签改成<router-link>，同时href属性也改成 t0 , to="/home" 

   - 选中路由高亮

     在router.js中，

     ```
     var router = new VueRouter({
         routes:[
         ],
         linkActiveClass:'mui-active'//覆盖默认的路由高亮的类，默认的类叫做router-link-active
     })
     ```

     高亮就完成了！
   
5. 点击tabbar路由链接，展示对应的路由组件

   - 在src中创建 components 文件夹，创建 tabbar文件夹   首页-HomeContainer.vue...

   - .vue基本结构 

     ```
     <template>
         <div>
         	<h1>HomeContainer.vue文件</h1>
         </div>
     </template>
     <script>
     
     </script>
     <style lang="scss" scoped>
     
     </style>
     
     ```

   - 在路由 router.js中做路由链接和组件的对应关系

     - 导入对应的路由组件

       `import HomeContainer from './components/tabbar/HomeContainer.vue'`

     - 配置路由的对应关系

       ```
       var router = new VueRouter({
           routes:[
               // path中没有./home  写成/home ！！！ 一定要和页面上写的对应起来
               {path:'/',redirect:'/home'},
              {path:'/home',component:HomeContainer},
           ],
           linkActiveClass:'mui-active'
       })
       
       ```

   - 在App.vue中放<router-view>

***

#### 中间router-view

​	在App.vue中放<router-view>





### 首页设计步骤

------

#### 轮播图制作

- 找mint-ui中的swipe，在main.js中导入一下

  ```
  import { Header,Swipe,SwipeItem,Button } from "mint-ui"
  Vue.component(Swipe.name,Swipe),
  Vue.component(SwipeItem.name,SwipeItem)//同时注册一下，导入的两个组件
  ```

- 在HomeContainer.vue中写入 <swipe>一系列标签

- 还需要在下面写样式，设置轮播区域的高度

- 给每一个轮播图的图片（item）添加样式

  .mint-swipe-item:nth-child(1){

  }



##制作首页App组件
1.完成Header区域，使用的是Mint-UI中的Header组件
2.制作底部的Tabber区域，使用的是MUI的Tabbar
3.要在中间区域放置一个 router-view 来展示路由匹配到的组件

## 用tabber改为router-link

## 设置路由高亮

##点击tabber中路由链接，展示对应的路由组件

##制作首页轮播图布局
https://www.apiopen.top/novelApi

##加载首页轮播图数据

##加载首页轮播图数据
1.获取数据， 使用vue-resource
2.使用vue-resource的this.$http.get
3.获取到的数据，要保存到data身上
4.使用v-for循环渲染每个item项


##改造 九宫格 区域样式 

##改造新闻资讯路由链接

##新闻资讯 页面 制作
1.绘制页面（MUI 中 media-list）
2.使用vue-resource获取数据  https://www.apiopen.top/journalismApi
3.渲染真实数据

##实现新闻列表 点击跳转到详情
1.把列表中的每一项改造为router-link，同时，在跳转的时候应该提供唯一的ID标识符
2.创建新闻详情的组件页面 NewsInfo.vue
3.在 路由模块 中，将新闻详情的 路由地址和组件页面对应起来

##实现新闻详情页面 的 页面布局 和 渲染

##单独封装一个 comment.vue的评论子组件
1.先创建一个单独的comment.vue组建模板
2.在需要使用comment的组建的页面，先手动 导入comment 组件
  + `import comment from './comment.vue'`
3.在父组件中，使用'components'属性,将刚才导入comment组件，注册为自己的子组件
4.将 注册子组件时候的注册名称， 以标签形式在页面中引用 即可

##获取所有的评论数据 显示到页面中

##实现点击加载更多评论的功能（未实现）
1.为加载更多按钮 ，绑定点击事件 ，在事件中，请求下一页数据
2.点击加载更多，让 pageIndex++ ， 然后重新调用 this.getComments() 方法重新获取最新一页的数据
3.为了防止 新数据 覆盖老数据的情况，我们在 点击加载更多的时候，每当获取到新数据，应该让老数据调用 数组 的concat方法，拼接上新数组

##发表评论
1.把文本框做双向数据绑定
2.为发表按钮绑定一个事件
3.校验评论内容是否为空，如果为空，则Toast 提示用户，评论内容不能为空
4.通过vue-resource 发送一个请求，把评论内容提交给服务器
5.当发表评论OK后，重新刷新列表，以查看最新的评论