## how to run

1. command1
tbwx_mobile/frontend/app
* http-server  开启一个web服务器 （没使用webpack自带的dev server，感觉麻烦）

2. command2
tbwx_mobile/frontend
* webpack --watch
* 也可以npm start

### deploy
前提： 在目录下的deploy文件下，需要clone最终发布的git地址，生成app***的文件夹

tbwx_mobile/frontend
gulp clean
gulp copy
gulp git


### 分支策略

1. 分发一个dev 分支
以后所有开发基于这个分支
2. master分支作为主分支，当dev分支开发测试成功之后，合并到master分支上
3. master分支merge最新代码之后，发布到服务器上
4. 正常开发中，master分支不更新，只在dev分支上进行代码的修改，测试。
直到开发暂时结束，merge到master分支上。
5. 对于需要冻结或者需要保留的版本，可以发布到product分支上。作为历史备份保留。注意：product分支只保留有重大意义的历史版本。
