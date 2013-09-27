## server-monitor with NodeJS ##

 
> Author : leton     
> Mail : leton2008@gmail.com
 
 
# 起因 #

 
 我最初接触NodeJS的第一个产品想法就是能够搭建一个服务器监控系统。      
 NodeJS的OS和Process核心模块已经提供了一些基本的信息供使用，目前这一版本正式基于这些模块来完成的。   
 后期可能会需要加入C++编写的Addons来完成其它信息的采集。     
 
 
# 功能 #

 
* 每个监控系统都是一个web系统，可以直接通过网页访问查看系统当前状态
* 每个监控可以提供API访问接口，通过这些API信息接口也可以获得当前监控系统的信息  
* 每个监控系统也可以注册加入其它监控系统，这些信息的获取将通过API获取的方式实现 
 
 
 
 
# 使用 #

 
     npm install os-monitor
     node app.js
 
 
# 授权 #
 -------------
 
 Based on MIT License.