// ================================================================
// HNT植物大战僵尸 · 图鉴数据 —— 僵尸
// 维护说明：直接编辑下方数组即可，页面会自动读取。
// 字段含义：
//   id          唯一标识（不要重复）
//   name        名称
//   emoji       备用表情（图片加载失败时显示）
//   image       图片路径（相对 index.html）
//   health      生命值
//   speed       移动速度
//   damage      伤害
//   special     能力标签
//   description 详细介绍
// ================================================================
window.PVZ_ZOMBIES = [
    {
        id: 'normal',
        name: '普通僵尸',
        emoji: '🌱',
        image: 'common/zombie/普通僵尸moving.png',
        health: 200,
        speed: '10px/2.5s',
        damage: 100,
        special: '普通',
        description: '最基础的僵尸。移动速度是每2.5秒向前移动10个像素，攻击伤害是每秒100点伤害。'
    },
    {
        id: 'cone',
        name: '路障僵尸',
        emoji: '🌱',
        image: 'common/zombie/路障僵尸moving.png',
        health: 200,
        speed: '10px/2.5s',
        damage: 100,
        special: '路障',
        description: '路障僵尸头上的路障提供额外防御，更耐打。路障提供共计420点第一类防御值，每140点切换破损状态。'
    },
    {
        id: 'bucket',
        name: '铁桶僵尸',
        emoji: '🌱',
        image: 'common/zombie/铁桶僵尸moving.png',
        health: 200,
        speed: '10px/2.5s',
        damage: 100,
        special: '铁桶',
        description: '铁桶僵尸防御较高，是前期的棘手敌人。铁桶提供共计1200点第一类防御值，每400点切换破损状态。'
    },
    {
        id: 'door',
        name: '钢门僵尸',
        emoji: '🌱',
        image: 'common/zombie/钢门僵尸moving.png',
        health: 200,
        speed: '10px/2.5s',
        damage: 100,
        special: '钢门',
        description: '钢门提供共计1200点第二类防御值，每400点切换破损状态，第二类防具免疫寒冰子弹的减速。'
    },
    {
        id: 'bucketdoor',
        name: '铁桶钢门僵尸',
        emoji: '🌱',
        image: 'common/zombie/铁桶钢门僵尸.png',
        health: 200,
        speed: '10px/2.5s',
        damage: 100,
        special: '钢门',
        description: '铁桶提供共计1200点第一类防御值，每400点切换破损状态。钢门提供共计1200点第二类防御值，每400点切换破损状态，第二类防具免疫寒冰子弹的减速。'
    },
    {
        id: 'flag',
        name: '旗帜僵尸',
        emoji: '🌱',
        image: 'common/zombie/旗帜僵尸moving.png',
        health: 300,
        speed: '12px/2.5s',
        damage: 100,
        special: '旗帜',
        description: '每次僵尸来袭都走在最前面的僵尸。与原版不同的是，它相比于普通僵尸更加耐打，且移动速度略微快于普通僵尸。'
    },
    {
        id: 'pole',
        name: '撑杆跳僵尸',
        emoji: '🌱',
        image: 'common/zombie/撑杆跳僵尸moving.png',
        health: 300,
        speed: '20px/1s',
        damage: 100,
        special: '跳跃',
        description: '撑杆跳僵尸可跳过第一个障碍物，突破防线，前期非常棘手。相比于原版，这个版本的撑杆跳僵尸血量更厚，在跳跃前速度更快。跳跃前移动速度为20像素每1秒，跳跃后移动速度为12像素每2.5秒。跳跃可以被高坚果所阻挡。'
    },
    {
        id: 'newspaper',
        name: '报纸僵尸',
        emoji: '🌱',
        image: 'common/zombie/报纸僵尸moving.png',
        health: 200,
        speed: '10px/2.5s',
        damage: 100,
        special: '超速',
        description: '读报僵尸被攻击后会愤怒，速度大幅提升（10像素每2.5秒 → 20像素每1.5秒）。报纸提供共计180点第二类防御值，每60点切换破损状态。'
    },
    {
        id: 'bucketnewspaper',
        name: '铁桶报纸僵尸',
        emoji: '🌱',
        image: 'common/zombie/铁桶报纸僵尸.png',
        health: 200,
        speed: '10px/2.5s',
        damage: 100,
        special: '超速',
        description: '读报僵尸被攻击后会愤怒，速度大幅提升（10像素每2.5秒 → 20像素每1.5秒）。铁桶提供共计1200点第一类防御值，每400点切换破损状态。报纸提供共计180点第二类防御值，每60点切换破损状态。'
    },
    {
        id: 'football',
        name: '橄榄球僵尸',
        emoji: '🌱',
        image: 'common/zombie/橄榄球僵尸moving.png',
        health: 200,
        speed: '20px/1.5s',
        damage: 100,
        special: '超速 · 防御',
        description: '橄榄球僵尸速度极快，且防御较高，能迅速突破防线。橄榄头盔提供共计1560点第一类防御值，每520点切换破损状态。'
    },
    {
        id: 'blackfootball',
        name: '黑橄榄球僵尸',
        emoji: '🌱',
        image: 'common/zombie/黑橄榄僵尸moving.png',
        health: 200,
        speed: '22px/1.5s',
        damage: 150,
        special: '超速 · 防御',
        description: '橄榄球僵尸Pro，橄榄头盔提供共计3360点第一类防御值，每1120点切换破损状态。'
    },
    {
        id: 'blackdoorfootball',
        name: '钢门黑橄榄球僵尸',
        emoji: '🌱',
        image: 'common/zombie/钢门黑橄榄球僵尸.png',
        health: 200,
        speed: '22px/1.5s',
        damage: 150,
        special: '超速 · 防御',
        description: '橄榄球僵尸ProMax，橄榄头盔提供共计3360点第一类防御值，每1120点切换破损状态。钢门提供共计1200点第二类防御值，每400点切换破损状态，第二类防具免疫寒冰子弹的减速。'
    },
    {
        id: 'dancer',
        name: '舞王僵尸',
        emoji: '🌱',
        image: 'common/zombie/舞王僵尸.png',
        health: 200,
        speed: '10px/2.5s',
        damage: 100,
        special: '召唤',
        description: '舞王僵尸会召唤4个舞伴僵尸，若附近舞伴僵尸数量小于2个，那么就会再召唤4个舞伴僵尸。'
    },
    {
        id: 'buckupDancer',
        name: '舞伴僵尸',
        emoji: '🌱',
        image: 'common/zombie/舞伴僵尸.png',
        health: 200,
        speed: '10px/2.5s',
        damage: 100,
        special: '被召唤',
        description: '一般只会被舞王僵尸召唤出来。'
    },
    {
        id: 'giant',
        name: '巨人僵尸',
        emoji: '🌱',
        image: 'common/zombie/巨人僵尸moving.png',
        health: 3000,
        speed: '10px/2.5s',
        damage: 9999,
        special: '坦克',
        description: '巨人僵尸拥有极高的生命值和破坏力，需集中火力攻击。在半血时扔出小鬼僵尸，并变成受伤形态。'
    },
    {
        id: 'redeyesgiant',
        name: '红眼巨人僵尸',
        emoji: '🌱',
        image: 'common/zombie/红眼巨人moving.png',
        health: 7200,
        speed: '12px/2.5s',
        damage: 9999,
        special: '坦克',
        description: '巨人僵尸Pro，3600血量时变回白眼，1800血量时投掷小鬼僵尸并切换受伤状态。'
    },
    {
        id: 'jackinbox',
        name: '小丑僵尸',
        emoji: '🌱',
        image: 'common/zombie/小丑僵尸moving.png',
        health: 500,
        speed: '16px/2.5s',
        damage: 100,
        special: '玩具匣',
        description: '玩具匣每5秒检测一次爆炸，每次有0.1概率引爆，若走到最后一格，则100%引爆。可以使用磁力菇吸取玩具匣。'
    },
    {
        id: 'imp',
        name: '小鬼僵尸',
        emoji: '🌱',
        image: 'common/zombie/小鬼僵尸moving.png',
        health: 200,
        speed: '10px/2.5s',
        damage: 100,
        special: '超人',
        description: '小鬼僵尸一般不会自己上场，而是被巨人僵尸扔出去。'
    },
    {
        id: 'duckytube',
        name: '泳圈僵尸',
        emoji: '🌱',
        image: 'common/zombie/泳圈僵尸moving.png',
        health: 200,
        speed: '10px/2.5s',
        damage: 100,
        special: '泳圈',
        description: '鸭子泳圈提供了浮力，使僵尸能够在水面移动。'
    },
    {
        id: 'duckytubeCone',
        name: '泳圈路障僵尸',
        emoji: '🌱',
        image: 'common/zombie/泳圈路障僵尸moving.png',
        health: 200,
        speed: '10px/2.5s',
        damage: 100,
        special: '泳圈',
        description: '鸭子泳圈提供了浮力，使僵尸能够在水面移动。路障提供共计420点第一类防御值，每140点切换破损状态。'
    },
    {
        id: 'duckytubeBucket',
        name: '泳圈铁桶僵尸',
        emoji: '🌱',
        image: 'common/zombie/泳圈铁桶僵尸moving.png',
        health: 200,
        speed: '10px/2.5s',
        damage: 100,
        special: '泳圈',
        description: '鸭子泳圈提供了浮力，使僵尸能够在水面移动。铁桶提供共计1200点第一类防御值，每400点切换破损状态。'
    },
    {
        id: 'DolphinRiderZombie',
        name: '海豚僵尸',
        emoji: '🌱',
        image: 'common/zombie/海豚僵尸移动.png',
        health: 300,
        speed: '20px/1s',
        damage: 100,
        special: '跳跃',
        description: '可跳过第一个障碍物，突破防线。相比于原版，本版本血量更厚，在跳跃前速度更快。跳跃前移动速度为20像素每1秒，跳跃后移动速度为12像素每2.5秒。跳跃可以被高坚果所阻挡。'
    },
    {
        id: 'scholarZombie',
        name: '学者僵尸',
        emoji: '🌱',
        image: 'common/zombie/scholarZombieShock.png',
        health: 1200,
        speed: '15px/1s',
        damage: 200,
        special: '超速 · 高伤',
        description: '源自95版二爷，贴图使用融合版贴图，第二类防具书本提供总计600点防御，每200点切换破损状态，书本掉落后暴走，速度提升到35px/1s，伤害达到200hp/0.5s'
    },
    {
        id: 'zomboni',
        name: '冰车僵尸',
        emoji: '🌱',
        image: 'common/zombie/冰车僵尸moving.png',
        health: 1800,
        speed: '6px/1s',
        damage: 9999,
        special: '碾压',
        description: '移动时碾压植物并生成冰道，冰道无法种植植物，需要120s消失，或使用火爆辣椒清除'
    },
    {
        id: 'yetiZombie',
        name: '雪人僵尸',
        emoji: '🌱',
        image: 'common/zombie/雪人僵尸.png',
        health: 900,
        speed: '10px/2.5s',
        damage: 100,
        special: '逃跑',
        description: '最多移动4格，达到4格或血量小于一半时会逃跑。击败奖励20银币。逃跑速度为25px/2s。仅在僵尸来袭时，有5%几率生成。'
    },
    {
        id: 'diggerZombie',
        name: '矿工僵尸',
        emoji: '🌱',
        image: 'common/zombie/矿工僵尸.png',
        health: 200,
        speed: '10px/2.5s',
        damage: 100,
        special: '遁地',
        description: '一路挖到最后一排，出土后反向行走。可用吸铁植物（磁力菇、吸金磁）吸取矿镐，矿工僵尸可提前出土，提前出土为正向行走。'
    },
    {
        id: 'balloonZombie',
        name: '气球僵尸',
        emoji: '🌱',
        image: 'common/zombie/气球僵尸.png',
        health: 200,
        speed: '10px/2.5s',
        damage: 100,
        special: '飞天',
        description: '飞天时，地面植物看不到气球僵尸，故无法发起攻击。使用仙人掌或猫尾草的尖刺扎破气球。可使用三叶草吹飞气球僵尸。'
    },
];
