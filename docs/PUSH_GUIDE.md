# 更新与推送到 GitHub

在项目文件夹打开 PowerShell，执行：

```powershell
git status
git pull --rebase origin main
node scripts/validate-data.mjs
node --experimental-strip-types --test tests/*.test.mjs
git add data/conferences.json
git commit -m "Update conference information"
git push origin main
```

示例假设修改尚未提交：pull 前若有未提交修改，先提交自己的修改再 pull --rebase；不要覆盖未知修改。git add 后填本次实际修改的文件，不要上传密钥、.env、node_modules 或 work 目录。若显示 nothing to commit，直接检查 git status，无需制造提交。

推送后进入仓库 Actions，等待 Check and publish 的 build 与 deploy 均成功，再刷新网站。Push 成功不等于部署已完成。

2026-10-30 诊断：Codex受限执行时 git ls-remote 报 getaddrinfo() thread failed to start；正常网络权限下可读取远端 main。这属于当前执行环境网络限制，不证明GitHub账号或认证失效。读取公开仓库成功也不等于已验证写权限，写权限以实际push结果为准。

如本机 PowerShell 也无法推送，先运行 git ls-remote origin refs/heads/main；网络超时检查本机网络/代理。出现 Authentication failed 时通过Git Credential Manager的浏览器登录完成认证，不能使用GitHub账户密码作为HTTPS Git密码，也不要把Token写入仓库地址或发到聊天。也可用GitHub Desktop添加当前本地仓库并登录后点击Push origin。
