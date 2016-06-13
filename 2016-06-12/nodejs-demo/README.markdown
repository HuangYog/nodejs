一.安装 express (Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，
它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。)
    1.npm install -g express-generator@4  #全局安装-g
    2.express -V # 检查express的版本
    3.express -h  # 检查看express的帮助命令
    4.express -e nodejs-demo  # 创建项目
    5.cd nodejs-demo && npm install # 进入项目目录，下载依赖库，构建项目
    6.npm start # 启动项目 

二.目录结构
    1.bin, 存放启动项目的脚本文件
    2.node_modules, 存放所有的项目依赖库。
    3.public，静态文件(css,js,img)
    4.routes，路由文件(MVC中的C,controller)
    5.views，页面文件(Ejs模板)
    6.package.json，项目依赖配置及开发者信息
    7.app.js，应用核心配置文件

三. package.json项目配置
    package.json用于项目依赖配置及开发者信息，
    scripts属性是用于定义操作命令的，可以非常方便的增加启动命令，
    比如默认的start，用npm start代表执行node ./bin/www命令

四. app.js核心文件
    app.js已加上注释，查看app.js 文件。
    我们看到在app.js中，原来调用connect库的部分都被其他的库所代替，serve-favicon、morgan、cookie-parser、body-parser，默认项目中，只用到了最基本的几个库，还没有其他需要替换的库，在本文最后有详细列出。
    另外，原来用于项目启动代码也被移到./bin/www的文件，www文件也是一个node的脚本，用于分离配置和启动程序。
    详细请查看./bin/www文件。

五. Bootstrap界面框架
    直接使用Bootcss社区提供的CDN源加载Bootstrap，详细请查看./views/下面的header.ejs、index.ejs、footer.ejs
    把页表和页底的代码分离后，让index.ejs页面的核心代码更少，更容易维护。

六. 路由功能
    路由功能，是Express4以后全面改版的功能。在应用程序加载隐含路由中间件，不用担心在中间件被装载相对于路由器中间件的顺序。定义路由的方式是不变的，路由系统中增加2个新的功能。
        - app.route()函数，创建可链接的途径处理程序的路由路径。
        - express.Router类，创建模块化安装路径的处理程序。
