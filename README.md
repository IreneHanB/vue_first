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

我的vue初体验

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

### 六宫格第一个子组件制作

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
  					<a :to="'/home/newsinfo/' + item.docid">
  						<img class="mui-media-object mui-pull-left" :src="item.picInfo[0].url">
  						<div class="mui-media-body">
  							<h1>{{item.title}}</h1>
  							<p class='mui-ellipsis'>
                                  <span>发表时间：{{item.ptime | dataFormat('YYYY-MM-DD')}}</span>
                                  <span>点击次数：{{item.tcount}}次</span>
  							</p>
  						</div>
  					</a>
  				</li>
  				
  
  			</ul>
  ```

  

------

#### 全局过滤器——设置用到的时间

因为在newslist、newsinfo和其他子组件中也用到了时间，所以在main.js中设置全局过滤器

```
npm i moment -S

//导入格式化时间的插件
import moment from 'moment'

//定义全局的过滤器
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})
```



***

#### 新闻列表跳转到新闻详情的路由

- 将NewsList.vue中的a标签放在router-link

  ```
  <router-link :to="'/home/newsinfo/'+item.id"
  ```

- 在router.js

  ```
  import Newsinfo from './components/news/Newsinfo.vue'
  {path:'/home/newsinfo/:docid',component:Newsinfo}
  ```

- 在Newsinfo.vue中 通过$route.params.id来获取id

  ```
  export default{
  	data(){
  		reurn{
  		//将URL地址中传过来的id值，挂载在data上，方便以后调用
  		id:this.$route.params.id
  		}
  	}
  }
  ```

- 在Newsinfo.vue中弄好布局和样式

- 获取渲染数据，同时修改每项要拿到的数据，如 newsinfo.title, {{newsinfo.add_time|dataFormat}}

  ```
  created(){
  	this.getNewsInfo()
  },
  methods:{
  	getNewsInfo(){
  		this.$http.get('api/getnew/'+this.id).then(result =>{
              if(result.body.status=0){
  				this.newsinfo = result.body.message[0];
              }else{
  				Toast('获取失败')
              }
  		})
  	}
  }
  ```

- 查看每个newlist的info，设置样式，让图片 width：100%，并删除scoped（玄学编程，删了就好了）???

  scoped删除容易造成全局污染，但是这里的样式都在 newsinfo-container这个类下面。

#### 评论内容部分

因为多处用到了这个评论，所以把它抽离为一个单独的组件

- 在components文件夹里新建一个文件夹 subcomponents ，创建一个单独的comment.vue组件模板

- 手动在newsinfo.vue中导入comment组件，并在父组件中，使用‘components’属性，将导入的组件注册为自己的子组件

  ```
  import comment from '../subcomponents/comment.vue'
  export default{
  	compoments:{
  		//用来注册子组件的节点
  		'comment-box':comment
  	}
  }
  ```

  

- 将注册子组件时候的注册名称,以标签形式在页面中引用 即可。

  ```
  <comment-box :id="this.id"></comment-box>//父组件向子组件传值，传简单数据，数据绑定就行
  ```

- 在comment.vue中进行样式和内容的布局，使用mint-ui的button按钮

- 获取数据

  ```
  data(){
  	return{
  		pageIndex:1
  		comments:[]
  	}
  }，
  created(){
  	this.getComments()
  },
  method:{
  	getComments(){
  		this.$http.get('api/getcomments/'+this.id+"?pageindex"+this.pageIndex).then({
  		if(result.body.status ===0){
  			this.comments=this.comments.concat(result.body.message);//数组拼接
  		}else{
  			Toast('评论加载失败')
  		}
  	})
  	}
  	
  }
  ```

- 渲染数据

  ```
  v-for="(item,index) in comments" :key:"item.add_time"
  
  {{item.content === 'undefined'?'此用户很懒'：item.content}}
  ```

- 点击加载更多 ，则加载出更多评论

  - 为加载更多绑定按钮，绑定点击事件，在事件中，请求下一页数据

    ```
    <mt-button type="danger" @click="getMore"></mt-button>
    
    getMore(){
        this.pageIndex++;
        this.getComments();
    }
    ```

    

  - 点击加载更多，让pageIndex++，然后重新调用this.getComments()方法重新获取新一页的数据，为了防止 新数据覆盖老数据，要用数组的拼接。

#### 评论发表部分

- 把文本框做双向数据绑定

  - 在comment.vue中

    ```
    <mt-button type="primary" size="large" @click="postComment"> 发表评论</mt-button>
    ```

    ```
    postComment(){
    	//校验是否为空
    	if(this.mag.trim().length===0){
    		return Toast('评论内容不能为空')
    	}
                //发表评论
                //参数1：请求的url地址
                //参数2：提交给服务器的数据对象{content：this.msg},msg.trim()可以清楚空格
                //参数3：定义提交时候，表单中数据的样式{}
                this.$http.post('api/postcomment'+this.$router.params.id,{content:this.msg.trim()}).then(function(){
    				if(result.body.status === 0){
                        //1.拼接出一个评论对象
                        var cmt={user_name:"不要匿名",add_time:Date.now(),content:this.msg.trim()}
                    }
                    this.comments.unshift(cmt);
                    this.msg="";
                })
            }
    ```

    在main.js中全局设置post时候表单数据格式的组织形式

- 为发表按钮绑定一个事件

- 校验评论内容是否为空，如果为空，则Toast提示用户，评论内容不能为空

- 通过vue-resource发送一个请求，把评论内容提交给服务器

- 当发表评论ok后，重新刷新列表，以查看最新的评论。

  - 如果调用getComments方法 重新刷新评论列表的话，可能只能得到 最后一页的评论，前几页的评论获取不到，所以换一种思路：

    当评论成功后，在客户端，手动拼接出一个最新的评论对象，然后 调用 数组的unshift 方法，把最新的评论，追加到data中 comments的开头，这样，就能实现刷新评论列表的需求。



### 图片列表

#### 改造首页图片按钮为路由链接，并显示对应组件页面

​	创建>photo文件夹>PhotoList.vue，在router.js中，导入对应组件，配置路由关系

#### 可滚动的顶部滑动条

寻找mui中的tab-top-webview-main.html，拷贝需要的代码，运行发现这一部分设置了全屏显示的类mui-fullscreen，所以把它删了

#### 滑动条需要初始化后才可以正常使用

通过检查官方文档，发现这是JS组件，需要被初始化一下

- 在lib>mui>js>导入mui.js

  ```
  并且在PhotoList.vue
  import mui from '../../lib/mui/js/mui.mui.js'
  ```

  

- 调用官方提供的方法 去初始化

  ```
  mui('.mui-scroll-wrapper').scroll({
  	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
  ```

- 我们在初始化滑动条的时候，导入了 mui.js，但是，控制台报错了。

  错误如下：Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them

  经过我们合理的推测，觉得，可能是mui.js中用到了“caller”,"callee"和“arguments”在、这些东西，但是webpack打包好的bundle.js中，默认是启用严格模式的，所以这两者冲突了；

  解决方案：

  1.把mui中的非严格模式的代码改掉，但是不现实；

  2.把webpack打包时候的严格模式禁用掉。

  npm install babel-plugin-transform-remove-strict-mode -D

  在.babelrc下添加"transform-remove-strict-mode"

- 刚进入图片分享页面的时候，滑动条无法正常工作，分析发现，如果要初始化 滑动条，必须要等DOM 元素加载完毕，所以把初始化 滚动条的代码，搬到了mounted 生命周期函数中。

- 当滑动条调试完成后，发现tabbar无法正常工作了，这时候，我们需要把每个tabbar按钮的样式中‘mui-tab-item’重新改一下名字

- 渲染分类列表，并设置选中后高亮

  ```
  <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cates" :key="item.bid">
  							{{item.bookname}}
  						</a>
  ```

  

#### 制作图片列表区域

- 找到mint-ui中懒加载lazy-load组件，根据lazy-load的使用文档，在main.js中导入组件，把样式和内容都copy到PhotoList.vue中

- 根据分类id，获取图片列表，获取的方法getPhotoListByCateId(cateId)要调用两次

  ```
  created(){
  		this.getAllCategory();
  		this.getPhotoListByCateId(0);//默认进入页面就请求 所有图片列表的数据
  	},
  ```

  ```
  <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cates" :key="item.bid" @click="getPhotoListByCateId(item.id)">
  ```

- 美化列表，写样式

- 到这一步还没有实现懒加载，但是懒加载的实现 不能按需导入了

  ```
  import MintUI from 'mint-ui'
  Vue.use(MintUI)
  import 'mint-ui/lib/style.css'
  ```

  

#### 制作图片详情页面

- 实现详情页面的数据，并添加样式

  ```
  id:this.$route.params.id //从路由中获取到的图片id
  ```

  ```
  getPhotoInfo(){
  	//获取图片详情
  	this.$http.get('api/getimageInfo'+this.id).then(result=>{
  	...
  	})
  }
  ```

- 导入评论组件

  ```
  // 1. 导入评论子组件
  import comment from "../subcomponents/comment.vue";
  
  
  
  components: {
      // 注册 评论子组件
      "cmt-box": comment
    }
  ```

- 缩略图制作

  使用vue-preview插件(https://github.com/LS1231/vue-preview)

  把需要的内容copy一下

***

### 商品购买

#### 商品列表

- 设置路由链接

- 设置goodlist的样式

  ```
  	display: flex;
      flex-direction: column;//改成列为主轴
      justify-content: space-between;//向（这里是上下）两边贴近
  ```

- 商品详情制作

  在网页中，有两种跳转方式：

  1.使用a标签 的形式叫做 标签跳转

  router-link 就属于标签跳转

  2.使用window.location.href的形式，叫做编程式导航(https://router.vuejs.org/zh/guide/essentials/navigation.html)

  @click=" goDetail(item.id) "

  ```
   goDetail(id){
              //使用JS的形式进行路由导航
              this.$router.push('/home/goodsinfo')
              
              各种方式：
              // 字符串
              this.$router.push('/home/goodsinfo'+id)
  
              // 对象
              this.$router.push({ path: '/home/goodsinfo'+id })
  
              // 命名的路由
              this.$router.push({ name: 'goodsinfo', params: { id }})//这个同时要在路由中定义name
          }
  ```

  

  **注意：区分this.$route和this.$router**

  其中：this.$toute是路由参数对象，所有路由中的参数，params,query都属于它

  其中：this.$router是一个路由导航对象，用它可以方便的使用JS代码，实现路由的前进、后退、跳转到新的URL地址

#### 商品详情

- 找到mui中的card.html，copy一下

- 将轮播图抽离为单独组件

  - 新建subcomponent>swiper.vue，然后写好 template 和style  ，不需要业务逻辑，因为是 谁需要就给谁来传数据，但是要接收一下传进来的数据

    ```
    <template>
        <div>
            <!-- 谁使用此轮播图，谁来传递lunbotulist -->
            <!-- 这里 应该是 父组件向子组件传值 -->
            <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.bid">
                <!-- 我们要计算表达式，要在普通属性前面加上v-bind（：） -->
                <img :src="item.book_cover" alt="">
            </mt-swipe-item>
            </mt-swipe>
        </div>
    </template>
    <script>
    export default {
        props:['lunbotuList']//接受传过来的lunbotulist
    }
    </script>
    <style lang="scss" scoped>
    .mint-swipe{
    ...
    }
    </style>
    
    ```

  - 然后，在HomeContaine.vue中 使用，并把数据传进去

    ```
    		<!-- 轮播图区域 -->
            <swiper :lunbotuList="lunbotuList"></swiper>
            
            import swiper from '../subcomponents/swiper.vue'
            
            components:{
            swiper
        }
        
    ```

  - 轮播图不好看的问题

    ```
    <!-- 分析：为什么 商品评论中的 轮播图那么丑： -->
      <!-- 1. 首页中的图片，它的宽和高，都是 使用了 100% 的宽度 -->
      <!-- 2. 在商品详情页面中，轮播图的 图片，如果也使用 宽高 为 100%的话，页面不好看 -->
      <!-- 3. 商品详情页面中的轮播图，期望 高度是 100%， 但是 宽度为 自适应 -->
      <!-- 4. 经过分析，得到 问题的原因： 首页中的轮播图 和 详情中的轮播图，分歧点是 宽度到底是 100% 还是 自适应 -->
      <!-- 5. 既然这两个 轮播图，其它方面都是没有冲突的，只是 宽度有分歧， 那么，我们可以定义一个 属性，让 使用轮播图的 调用者，手动指定 是否为 100% 的宽度 -->
    ```

  - 商品购买区域，制作大致的样子，购买数量找到 mui 中的numbox.html，把它封装为一个单独的组件subcomponents>goodsinfo_number.vue

    然后将numbox.html中有用的代码放进去

    在goodlist中 导入一下，添加组件，在html中写上标签

  - 但是数量增加 暂时还不能用， 查看文档(http://dev.dcloud.net.cn/mui/ui/#numbox)，然后在 goodsinfo_number 导入js文件，初始化一下组件

    ```
    import mui from "../../lib/mui/js/mui.min.js";
    
    
    mounted() {
        // 初始化数字选择框组件
        mui(".mui-numbox").numbox();
        console.log(this.max);
      },
    ```

  - 使用编程式导航跳转到 各自的页面，然后新建组件，在router中注册一下

    ```
    goDesc(){
                //点击使用编程式导航跳转到 图文介绍页面
                this.$router.push({
                    name:'goodsdesc'
                    
                });
            },
            goComment(){
                this.$router.push({
                    name:'goodscomment'
                    
                });
            }
    ```

    

  

  



***

### 尝试在手机上项目的预览和测试

- 保证手机和开发项目的电脑处于同一个wifi环境中，也就是说 手机可以访问到电脑的IP
- 打开自己的中package.json文件，在dev脚本中，添加一个--host指令，把当前电脑的wifi ip地址，设置为--host的指令值
  - 如何查看自己电脑所处的wifi的IP呢？在cmd终端中运行   ipconfig   即可查看
  - 只要保证手机和电脑连的是同一个wifi就可以在手机上查看效果。

- 在手机上测试后，发现 图片列表 的分类点击出不来的情况（这里我没有接口，所以没有实现），可以把  @click改成 @tap 但是这个只能在mui中使用

