# Default starter for Gridsome

This is the project you get when you run `gridsome create new-project`.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to install default starter
2. `cd my-gridsome-site` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌


### 处理首页模版

```js
npm install bootstrap
npm install @fortawesome/fontawesome-free

// main.js

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import './assets/index.css'

// assets index.css
@import url("https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800");

// 把对应的 clean-blog.css拿过来
```

![image](https://img-blog.csdnimg.cn/20200905221932317.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpbmF0XzM1MzQ5NDkz,size_16,color_FFFFFF,t_70#pic_center)

### 其他页面找到对应的页面即可

### 使用本地md文件管理文章内容
- https://www.gridsome.cn/docs/fetching-data/

npm install @gridsome/source-filesystem

```js
// gridsome-config.js 配置
plugins: [
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: './content/blog/**/*.md',
      typeName: 'BlogPost'
    }
  }   
]
```

- yarn add @gridsome/transformer-remark


### Strapi介绍 CMS 
- 是一个通用的管理系统
- 自定义内容结构
- 简单的内容管理，可视化面板
- 对开发友好的api 
- 内置支持角色管理
- 支持插件系统，扩展功能
- 等等

- https://strapi.io/

- 注册

### Strapi 基本使用

快速开始

- yarn create strapi-app my-project --quickstart
- npx create-strapi-app my-project --quickstart

如果安装失败需要删除node_modules 手动安装

- 成功之后自动打开了一个页面

初次使用需要注册管理员用户，

面板功能 当中 logo 回到首页
- 个人资料
- 简体中文
- 集合类型 collection types
- 插件- 内容生成器

### 使用Strapi接口
- 有了结合, 以及集合中的数据，那么如何在外部来获取到应用的数据呢
- Content API
- 因为strapi 内置了角色权限管理的功能，所以我们需要开放对应的权限，需要授权就能访问，

https://strapi.io/documentation/v3.x/content-api/api-endpoints.html#endpoints

### 访问受保护的API
```js
import axios from 'axios';

const token = 'YOUR_TOKEN_HERE';

// Request API.
axios
  .get('http://localhost:1337/posts', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(response => {
    // Handle success.
    console.log('Data: ', response.data);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
```


### 把本地服务连接远程strapi
- 设置环境变量
https://www.gridsome.cn/docs/environment-variables/

在根目录下创建 `.env.development` 文件
```js
GRIDSOME_API_URL=http://139.224.75.201:1337
```
更改gridsome.config.js配置中的 apiURL

```js
Vue.mixin({
  data() {
    return {
      GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
    }
  }
})

apiURL: process.env.GRIDSOME_API_URL

```

替换各个文件的Img URL

![image](https://cdn.nlark.com/yuque/0/2020/png/382369/1599990196461-fe79837a-e885-48f2-8e30-7c980b34c1d9.png)


### Gridsome案例-部署Gridsome应用

https://vercel.com/

推荐使用 Vercel

注意: 这里的qq邮箱不能登录，所以我们需要将邮箱替换成163.com

导入你的静态项目
![image](https://cdn.nlark.com/yuque/0/2020/png/382369/1599992924517-42fe9001-716b-41b6-8d2c-20d2515044d5.png)

如果你的打包命令不是npm run build 需要 重新设置
我这里是yarn build， 所以更改

![image](https://cdn.nlark.com/yuque/0/2020/png/382369/1599994525291-2e2905b0-7935-452a-a238-3b21a31bdb01.png) 


### 部署成功

![image](https://cdn.nlark.com/yuque/0/2020/png/382369/1599994189131-ac871947-78c9-44ee-be06-f6a55dee2ef1.png)

![image](https://cdn.nlark.com/yuque/0/2020/png/382369/1599994117184-b8814768-a4ba-4a4a-81a0-856eb8b1f227.png)

https://blog-frontend-woad.vercel.app/


### 数据自动更新

我们可以找到部署日志，去重新部署，不过每次都要这样未免也太麻烦了，这里推荐一个懒人技巧

![image](https://cdn.nlark.com/yuque/0/2020/png/382369/1600004606968-0228bbf5-e9fd-4780-92fa-0a20ab3defa7.png)

- 当Strapi 数据更新了的时候，让Strapi 去告诉 vercel 去重新部署，我数据更新了，你要给我重新部署！

那么如何做呢

![image](https://cdn.nlark.com/yuque/0/2020/png/382369/1600004986637-c561a719-b89d-4bb3-831f-16caab95f4bc.png)

首先找到项目 blog-backend / Settings / Git Integration / Deploy Hooks

创建一个钩子

![image](https://cdn.nlark.com/yuque/0/2020/png/382369/1600005145303-dadd9780-e718-4bef-a49e-6b7aee78bd42.png)

创建完成之后我们会得到一个连接 直接复制
![image](https://cdn.nlark.com/yuque/0/2020/png/382369/1600005188749-e16c9624-d4d1-490d-8146-1d0630e5fc84.png)

接下来我们去strapi 后台 找到设置选项

当你进行数据操作的时候，然后去请求这个webhooks，那么 vercel 就会触发重新构建

![image](https://cdn.nlark.com/yuque/0/2020/png/382369/1600005514790-b3ba7233-a7f2-462c-a621-9f437f283337.png)

![image](https://cdn.nlark.com/yuque/0/2020/png/382369/1600005659998-122693cf-21c5-4115-a52c-57831c2c8109.png)

触发更新了

![image](https://cdn.nlark.com/yuque/0/2020/png/382369/1600007964049-680caa56-714c-4c3a-b011-d577985e31d0.png)

这里error 是因为我url 没上传 ，导致出错

![image](https://cdn.nlark.com/yuque/0/2020/png/382369/1600008331683-f1340302-38c2-4616-a785-01594c845116.png)

重新上传，部署成功！

![image](https://cdn.nlark.com/yuque/0/2020/png/382369/1600008227634-6d2ba11d-2ad0-42c6-8809-edd3b5c8fee1.png)