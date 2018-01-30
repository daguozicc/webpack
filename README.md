git全局设置
git config --global user.name '大果子Cc'
git config --global user.email 'yzcxiaozhi@126.com'
创建git仓库
mkdir webpack
cd webpack
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/DaGuoZiCc/webpack.git
git push -u origin master
已有项目？
cd existing_git_repo
git remote add origin https://gitee.com/DaGuoZiCc/webpack.git
git push -u origin master