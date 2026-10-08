// ================================================================
// HNT植物大战僵尸 · 图鉴数据 —— 游戏资讯
// 维护说明：直接编辑下方数组即可，页面会自动读取。
// 字段含义：
//   id      唯一标识（不要重复）
//   title   标题
//   date    日期
//   content 正文内容（支持 HTML）
//   link    原文链接（可为空字符串）
// ================================================================
window.PVZ_GUIDES = [
    {
        id: 'guide1',
        title: '游戏激活教程',
        date: '2026-09-20',
        content: `
            <p>在激活之前最好看一下，点击下方“阅读原文”查看。</p>
        `,
        link: 'post/activateGuide.html'
    },
    {
        id: 'guide2',
        title: '游戏激活',
        date: '2026-09-20',
        content: `
            <p>激活完整游戏，只用一次激活，永久解锁“我是僵尸”模式及后续所有收费内容。</p>
            <p>点击下方“阅读原文”进入激活页面，最好看一下激活教程。</p>
        `,
        link: 'tools/activate.html?game=com.hazenotea.pvz.watch'
    },
    {
        id: 'guide3',
        title: '僵尸移动速度计算',
        date: '2026-08-10',
        content: `
            <p>僵尸移动速度单位是px/s，即像素每秒，如10px/2.5s的意思就是每2.5秒，僵尸向前移动10个像素。游戏内一个格子的宽度为55像素。</p>
        `,
        link: ''
    },
    {
        id: 'guide4',
        title: '各版本的链接',
        date: '2026-03-10',
        content: `
            <p>这是植物大战僵尸各版本的米坛社区链接：<a href="https://www.bandbbs.cn/resources/7132/" target="_blank">重制版链接</a>、
            <a href="https://www.bandbbs.cn/resources/5969/" target="_blank">米环9兼容版链接</a>、
            <a href="https://www.bandbbs.cn/resources/5701/" target="_blank">米环9pro兼容版链接</a>、
            <a href="https://www.bandbbs.cn/resources/5629/" target="_blank">正常版链接</a></p>
        `,
        link: ''
    },
    {
        id: 'guide5',
        title: '赞助作者',
        date: '2026-03-17',
        content: `
            <p>游戏制作不易，觉得好玩可以赞助一下作者😍</p>
            <p><a href="https://ifdian.net/a/HazeNoTea" target="_blank">爱发电链接</a></p>
        `,
        link: ''
    },
    {
        id: 'guide6',
        title: '游戏QQ群聊',
        date: '2026-05-10',
        content: `
            <p>0号群:1060211457（经常满）</p>
            <p>1号群:1101713503（经常满）</p>
            <p>2号群:1129080018</p>
            <p>进群答案：表盘自定义工具、AstroBox、米坛社区、爱发电（任选一个，意思相近即可）</p>
        `,
        link: ''
    },
    {
        id: 'guide7',
        title: '作者的B站',
        date: '2026-08-15',
        content: `
            <p>来B站支持作者</p>
        `,
        link: 'https://space.bilibili.com/364345419'
    },
    {
        id: 'guide8',
        title: '僵尸生成配置工具',
        date: '2026-07-10',
        content: `
            <p>作者自用的关卡僵尸生成配置工具</p>
            <p>作者制作关卡用的，一般人没什么用</p>
        `,
        link: 'tools/僵尸配置器.html'
    },
    {
        id: 'guide9',
        title: '免责声明',
        date: '2026-03-10',
        content: `
            <p>本游戏的版权声明...</p>
            <p>点击阅读原文查看</p>
        `,
        link: 'post/免责声明.html'
    },
];
