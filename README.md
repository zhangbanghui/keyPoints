# 个人学习知识点小结

### 注： 本项目仅仅是总结了一些个人学习及工作中所认为的重点，如果您能看到是我的荣幸，谢谢！


## Git 常用指令
### git init 初始化一个Git仓库
### git add <filename> 添加文件至缓存区
### git commit -m <message> 保存更改
### git status 查看仓库当前的状态
### git diff 查看修改内容
### git log 查看历史记录(按q退出)
### git reset --hard HEAD^ 回退到上个版本
### git checkout -- file 撤销工作区的修改
### git reset HEAD<file> 撤销缓存区的修改
### git rm 删除文件
### git branch <branchName> 添加分支
### git checkout <branchName> 切换至分支
### git merge <branchName> 合并指定分支到当前分支
### git merge --no-ff <branchName> 禁用Fast Forward模式合并分支
### git branch -d <branchName> 删除分支
### git stash 保存工作现场(中途需要切换分支，保存当前工作记录)
### git stash pop 恢复工作现场
### git remote add origin git@url 关联远程仓库
### git push -u origin master 第一次推送
### git push origin master 推送本地仓库内容至远程仓库
### git pull 抓取最新提交
### git clone 克隆本地库
### git tag <name> 打标签


## 目录结构

## CSS
1. 表单标签总结
2. 传统响应式布局
3. 呼吸灯效果
4. 两侧伸展特效
5. 浏览器的重绘和回流
6. 模仿思否搜索栏
7. 设置滚动条样式
8. 伪类选择器
9. 文本溢出text-overflow
10. 选择器总结
11. 折角
12. 自定义input样式
13. css3制作Loading
14. css制作水波纹
15. css中的BFC
16. flex布局
17. meta标签总结
18. overflow作用总结
19. flex常用属性
20. a标签中的 download 属性

## JavaScript
1. iframe 标签使用注意项
2. 多种刷新页面的方法
3. 获取任意元素宽高总结
4. 获取 radio 所选值
5. 截取字符串常用的方法
6. 判断复选框是否被选中
7. 判断页面加载进度并显示进度条
8. 深拷贝和浅拷贝
9. 深入闭包
10. 使用 contentWindow 获取 iframe 内容
11. 手写 jsonp
12. 条件注释判断浏览器版本
13. 页面重定向的方法
14. 正则表达式常用方法
15. 重点-数组常用方法
16. 重点-字符串常用方法
17. callee 的使用
18. ES6 的结构赋值
19. for-in 循环
20. for-of 循环
21. hasOwnProperty 的使用
22. input 时间格式化
23. js的垃圾回收机制
24. Object.seal() 的使用
25. 关于 for 循环中的 setTimeout
26. 滚动条始终在最下端
27. 获取鼠标位置方法总结
28. 监听变量改变
29. js 脚本的异步加载
30. 内置对象 Object 的常用方法
31. 判断对象是否包含某属性
32. 判断数据类型
33. 实现分页加载功能
34. 事件循环机制
35. 事件委托
36. 元素 ajax
37. 原型和原型链
38. 继承
39. eavl() 函数
40. getComputedStyle 获取元素样式
41. in 运算符
42. set 和 get 
43. this 指向问题
44. url 中的 hash
45. js 其他类型转布尔类型