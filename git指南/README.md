
## Git 常用指令


1. git init 初始化一个Git仓库
2. git add <filename> 添加文件至缓存区
3. git commit -m <message> 保存更改
4. git status 查看仓库当前的状态
5. git diff 查看修改内容
6. git log 查看历史记录(按q退出)
7. git reset --hard HEAD^ 回退到上个版本
8. git checkout -- file 撤销工作区的修改
9. git reset HEAD<file> 撤销缓存区的修改
10. git rm 删除文件
11. git branch <branchName> 添加分支
12. git checkout <branchName> 切换至分支
13. git merge <branchName> 合并指定分支到当前分支
14. git merge --no-ff <branchName> 禁用Fast Forward模式合并分支
15. git branch -d <branchName> 删除分支
16. git stash 保存工作现场(中途需要切换分支，保存当前工作记录)
17. git stash pop 恢复工作现场
18. git remote add origin git@url 关联远程仓库
19. git push -u origin master 第一次推送
20. git push origin master 推送本地仓库内容至远程仓库
21. git pull 抓取最新提交
22. git clone 克隆本地库
23. git tag <name> 打标签