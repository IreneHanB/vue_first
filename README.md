##准备做一个 阅读、书籍类 小项目

##用传统方式把修改过的代码上传到码云
1. git add .
2. git commit -m "提交信息"
3. git push

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