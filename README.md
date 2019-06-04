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

### 用传统方式把修改过的代码上传到github

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
**注意：这里的header固定定位了，不占标准流了，下面的元素就顶上去了，所以可以给最外层这个大盒子加个padding-top（在App.vue的框住三个区域的div添加一个class="app-container",在下面style中写样式）,同时在后期会发现，下面也有被挡掉的同款问题，所以padding-bottom:50px也加上**

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

  ```css
.mint-swipe-item{
    //这个是交集选择器  
          &:nth-child(1){
              background-color: blueviolet;
          }
          &:nth-child(2){
              background-color: blue;
          }
          &:nth-child(3){
              background-color: cyan;
          }
          img{
              width:100%;
              height: 100%;
          }
      }
  ```
  
  交集选择器和后代选择器的区别：
  
  ```
  <div class="rod">
  
       <p class="roe"></p> 
  
       <p></p>
  
       <p></p>
  
  </div>
  ```
  
  交集选择器：获取的是同级中的某一个p.roe{   }两个选择器之间没有空格
  
  后代选择器:   获取的是父级下的所有子孙 .rod p{ } 两个选择器之间有一个空格

- 获取数据之前，用vue-resource来获取，查看package.json中是否有“vue-resource”，没有的话 npm i vue-resource -S

  然后在main.js中导入一下vue-resource

  ```
  //导入vue-resource
  import VueResource from 'vue-resource'
  //安装vue-resource
  Vue.use(VueResource) 
  ```

- 获取数据

  业务逻辑写在HomeContainer.vue的<script>中

  ```
  export default { //导出对象
      data(){
          return {
              lunbotuList:[]//保存轮播图的数组
          }
      },
      created(){
          this.getLunbotu();
      },
      methods:{
          getLunbotu(){//获取轮播图数据的方法
              this.$http.get("https://www.apiopen.top/novelApi").then(result =>{
                   console.log(result.body);
                  if(result.body.code=200){
                      this.lunbotuList = result.body.data
                  }else{
                      Toast('轮播图加载失败')
                  }
             })
          }
      }
      
  }
  ```

  循环渲染<mt-swipe-item>

  ```
   <mt-swipe-item v-for="item in lunbotuList" :key="item.bid">
      <!-- 注意src，我们要计算表达式，要在普通属性前面加上v-bind（：） -->
      <img :src="item.book_cover" alt="">
   </mt-swipe-item>
  ```

  给图片设置样式

  ```
   .mint-swipe-item{
       img{
                  width:100%;
                  height: 100%;
              }
    }
  ```

***



#### 六宫格制作

- 找mui中的 grid(各自)-default，右键查看源码，拷贝<ul>中的代码，改成自己要的title和个数。

- 发现背景颜色不是白色，发现body的背景不是白色，直接给他一个style，还有的没变成白色的样式，就用它的类来改变。

- 在src中新建images文件夹，用于放 6个小图标。将代码中的span改成<img> ,并给img添加css样式

  

------

####  组件切换的动画效果

- 切换到home页面，home{path:'/',redirect:'/home'}

- 在App.view中，将有动画的部分用<transition></transition>包起来，这里包起来的只有 <router-view>

- 在<style>中设置两组类

  ```scss
  //1.解决页面有滚动条
  .app-container{
  	overflow-x: hidden;
  }
  
  .v-enter{
  	opacity: 0;
  	transform: translateX(100%);
  }
  .v-leave-to{
  	opacity: 0;
  	transform: translateX(-100%);
  	position: absolute;//解决了进入页面向上飘的问题，玄学编程，不知道why
  }
  .v-enter-active,
  .v-leave-active{
  	opacity: 1;
  	transition: all 0.5s ease;
  }
  ```


------

#### 六宫格第一个子组件制作

- 将 a链接 改成<router-link to="/home/newsList">

- 创建对应的组件，在src-components-news下创建 newsList.vue

- 要在 router.js中匹配

  ```
  import NewsList from './components/news/NewsList.vue'
  route:[
  {path：'/home/newslist',component:NewsList}
  ]
  ```

- 在mui中找，有一个media-list.html正是需要的，右键检查，拷贝<ul>, 并把其中的图片改了，内容和格式改成自己想要的。

- 获取数据

  在main.js中全局配置  请求地址的前缀 ，这里使用到了vue-resource，所以要放在 vue-resource安装之后

  ```
  //设置请求的根路径
  Vue.http.options.root='http://vue.studyit.io';
  ```

  

  ```
  import { Toast } from "mint-ui"
  export default { //导出对象
      data(){
          return {
          newsList:[]//新闻列表
          }
      },
      created(){
          this.getNewsList();
      },
      methods:{
          getNewsList(){
          //注意请求地址前面不要带 /  ，vue-resource前面是不带斜线的！！！
          //后面用.then 预先指定成功的回调
              this.$http.get("novelApi").then(result =>{
                   console.log(result.body);
                  if(result.body.status ===0){
                      this.lunbotuList = result.body.data
                  }else{
                      Toast('轮播图加载失败')
                  }
             })
          }
      }
      
  }
  ```

- 渲染数据

  ```
  <ul class="mui-table-view">
  <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.docid">
  					<router-link :to="'/home/newsinfo/' + item.docid">
  						<img class="mui-media-object mui-pull-left" :src="item.picInfo[0].url">
  						<div class="mui-media-body">
  							<h1>{{item.title}}</h1>
  							<p class='mui-ellipsis'>
                                  <span>发表时间：{{item.ptime | dataFormat('YYYY-MM-DD')}}</span>
                                  <span>点击次数：{{item.tcount}}次</span>
  							</p>
  						</div>
  					</router-link>
  				</li>
  				
  
  			</ul>
  ```

  

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