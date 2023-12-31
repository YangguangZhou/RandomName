# 随机点名器 RandomName

**电教必备**

[Demo](random.jerryz.com.cn)

## 使用方法

### 在线使用

1. 使用Vercel进行部署
   
   [![Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https://github.com/YangguangZhou/Counter)
2. 在创建的仓库中修改 `names.txt` 和 `speaks.txt`（可选），每行一个名字。`names.txt` 中存放姓名，每行一个人名，`speaks.txt`（可选）中存放朗读内容，用于修正浏览器自动朗读读音错误的问题。
3. 更多与Vercel有关设置如绑定个人域名等请参考 [Vercel 文档](https://vercel.com/docs)。

### 本地使用

删除 `index.html` 的 151~161 行，在第 144,145 行手动修改 `allNames` 和 `speakNames`，分别用于存放姓名和朗读内容。形如：
   
```javascript
let allNames = ["张三", "李四", "王五", "赵六", "钱七", "孙八", "周九", "吴十"];
let speakNames = ["张三", "李四", "王五", "赵六", "钱七", "孙八", "周九", "吴十"];
```