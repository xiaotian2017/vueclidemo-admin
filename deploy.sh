# `deploy.sh`

# 当发生错误时中止脚本
set -e

# 清除缓存
# git rm -r --cached -A

# 打包
npm run build

# cd 到构建输出的目录下 
# git init
git add -A
git commit -m 'update commit'

# git remote add origin https://gitee.com/ahuntsun/e-sun-manage.git
# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f 