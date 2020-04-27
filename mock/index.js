const Mock = require('mockjs');
const delay = require('mocker-api/utils/delay')

const request = {
    'GET /api/catelist': (req, res) => {
        res.json({
            status: 0,
            data: [
                [
                    {
                        to: "meishi/",
                        name: "美食",
                        img: "12337.png"
                    },
                    {
                        to: "dianying/",
                        name: "电影",
                        img: "48113.png"
                    },
                    {
                        to: "jiudian/",
                        name: "酒店",
                        img: "98989.png"
                    },
                    {
                        to: "xuixianyule/",
                        name: "休闲娱乐",
                        img: "06915.png"
                    },
                    {
                        to: "waimai/",
                        name: "外卖",
                        img: "29491.png"
                    },
                    {
                        to: "huoguo/",
                        name: "火锅",
                        img: "93176.png"
                    },
                    {
                        to: "liren/",
                        name: "丽人",
                        img: "26875.png"
                    },
                    {
                        to: "dujiachuxing/",
                        name: "度假出行",
                        img: "13385.png"
                    },
                    {
                        to: "zuliaoanmo/",
                        name: "足疗按摩",
                        img: "20401.png"
                    },
                    {
                        to: "zhoubianyou/",
                        name: "周边游",
                        img: "21773.png"
                    },
                ],
                [
                    {
                        to: "jingdian/",
                        name: "景点",
                        img: "15005.png"
                    },
                    {
                        to: "ktv/",
                        name: "KTV",
                        img: "81081.png"
                    },
                    {
                        to: "gouwu/",
                        name: "购物",
                        img: "62603.png"
                    },
                    {
                        to: "shenghuofuwu/",
                        name: "生活服务",
                        img: "80794.png"
                    },
                    {
                        to: "jianshenyundong/",
                        name: "健身运动",
                        img: "14491.png"
                    },
                    {
                        to: "meifa/",
                        name: "美发",
                        img: "15682.png"
                    },
                    {
                        to: "qinzi/",
                        name: "亲子",
                        img: "01730.png"
                    },
                    {
                        to: "xiaochikuaican/",
                        name: "小吃快餐",
                        img: "00011.png"
                    },
                    {
                        to: "zizhucan/",
                        name: "自助餐",
                        img: "68440.png"
                    },
                    {
                        to: "jiuba/",
                        name: "酒吧",
                        img: "53965.png"
                    },
                ],
                [
                    {
                        to: "ribencai/",
                        name: "日本菜",
                        img: "65687.png"
                    },
                    {
                        to: "spa/",
                        name: "SPA",
                        img: "30810.png"
                    },
                    {
                        to: "jiehun/",
                        name: "结婚",
                        img: "74048.png"
                    },
                    {
                        to: "xuexipeixun/",
                        name: "学习培训",
                        img: "94334.png"
                    },
                    {
                        to: "xican/",
                        name: "西餐",
                        img: "12337.png"
                    },
                    {
                        to: "huochejipiao/",
                        name: "火车机票",
                        img: "76043.png"
                    },
                    {
                        to: "shaokao/",
                        name: "烧烤",
                        img: "37354.png"
                    },
                    {
                        to: "jiazhuang/",
                        name: "家装",
                        img: "15113.png"
                    },
                    {
                        to: "chongwu/",
                        name: "宠物",
                        img: "32725.png"
                    },
                    {
                        to: "all/",
                        name: "全部分类",
                        img: "96364.png"
                    }
                ]
            ]
        })
    },
    'GET /api/homead': (req, res) => {
        res.json({
            status: 0,
            data: [
                {
                    title: '暑假5折',
                    img: '37796.png',
                    link: 'http://www.igeekhome.com/lessonlist'
                },
                {
                    title: '特价出国',
                    img: '29318.png',
                    link: 'http://www.igeekhome.com/lessonlist'
                },
                {
                    title: '亮亮车',
                    img: '72127.png',
                    link: 'http://www.igeekhome.com/lessonlist'
                },
                {
                    title: '学钢琴',
                    img: '59466.png',
                    link: 'http://www.igeekhome.com/lessonlist'
                },
                {
                    title: '电影',
                    img: '29553.png',
                    link: 'http://www.igeekhome.com/lessonlist'
                },
                {
                    title: '旅游热线',
                    img: '02222.png',
                    link: 'http://www.igeekhome.com/lessonlist'
                }
            ]
        })
    },
    'GET /api/homelist/:city/:page': (req, res) => {
        res.json({
            status: 0,
            hasMore: true,
            data: [
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png',
                    title: '汉堡大大',
                    subTitle: '叫我汉堡大大，还你多彩口味',
                    price: '28',
                    distance: '120m',
                    number: '389',
                    id: Math.random().toString().slice(2)
                },
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png',
                    title: '无锡开源饭店',
                    subTitle: '[望京]自助晚餐',
                    price: '98',
                    distance: '140m',
                    number: '689',
                    id: Math.random().toString().slice(2)
                },
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201652952-1050532278.png',
                    title: '服装定制',
                    subTitle: '原价xx元，现价xx元，可修改一次',
                    price: '1980',
                    distance: '160',
                    number: '106',
                    id: Math.random().toString().slice(2)
                },
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201700186-1351787273.png',
                    title: '婚纱摄影',
                    subTitle: '免费试穿，拍照留念',
                    price: '2899',
                    distance: '160',
                    number: '58',
                    id: Math.random().toString().slice(2)
                },
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201708124-1116595594.png',
                    title: '麻辣串串烧',
                    subTitle: '双人免费套餐等你抢购',
                    price: '0',
                    distance: '160',
                    number: '1426',
                    id: Math.random().toString().slice(2)
                }
            ]
        })
    },
    'GET /api/search/:page/:city/:category/:keywords?': (req, res) => {
        res.json({
            status: 0,
            hasMore: true,
            data: [
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145742279-606202974.jpg',
                    title: '河束人家',
                    subTitle: '南锣鼓巷店',
                    price: '150',
                    distance: '120m',
                    mumber: '389',
                    id: Math.random().toString().slice(2)
                },
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145750123-1745839503.jpg',
                    title: '漫漫火锅',
                    subTitle: '[王府井]自助火锅',
                    price: '113',
                    distance: '140m',
                    mumber: '689',
                    id: Math.random().toString().slice(2)
                },
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145755545-1770557408.jpg',
                    title: '北方涮肉',
                    subTitle: '什刹海店',
                    price: '92',
                    distance: '160',
                    mumber: '106',
                    id: Math.random().toString().slice(2)
                },
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145800732-576947550.jpg',
                    title: '姓高火锅',
                    subTitle: '知春里店',
                    price: '90',
                    distance: '160',
                    mumber: '58',
                    id: Math.random().toString().slice(2)
                },
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145806201-1193851669.jpg',
                    title: '八重牛府',
                    subTitle: '最好吃的牛丸',
                    price: '85',
                    distance: '160',
                    mumber: '1426',
                    id: Math.random().toString().slice(2)
                },
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022150855185-1659375763.jpg',
                    title: '蜀乡涮锅',
                    subTitle: '[王府井]自助火锅',
                    price: '113',
                    distance: '140m',
                    mumber: '689',
                    id: Math.random().toString().slice(2)
                },
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145800732-576947550.jpg',
                    title: '满楼福火锅',
                    subTitle: '知春路店',
                    price: '90',
                    distance: '160',
                    mumber: '58',
                    id: Math.random().toString().slice(2)
                }
            ]
        })
    },
    'GET /api/detail/info/:id': (req, res) => {
        res.json({
            stats: 0,
            data: {
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png',
                title: '天下第一锅',
                star: 4,
                price: '88',
                subTitle: '重庆 & 四川 麻辣火锅',
                desc: '营业时间 11:00 - 21:00 <br> 电话订购 11:00 - 19:00 <br> 网络订购 11:00 - 19:00'
            }
        })
    },
    'GET /api/detail/comment/:id': (req, res) => {
        res.json({
            status: 0,
            data: [
                {
                    username: '133****3355',
                    comment: '非常好吃，棒棒的，下次再来',
                    star: 5
                },
                {
                    username: '135****3452',
                    comment: '羊肉够分量，不错',
                    star: 4
                },
                {
                    username: '137****1242',
                    comment: '有自助的水果，非常喜欢',
                    star: 4
                },
                {
                    username: '131****3980',
                    comment: '桌子环境有点糟糕，不喜欢',
                    star: 2
                },
                {
                    username: '135****3565',
                    comment: '基本还可以，中规中矩吧，虽然没有啥惊喜',
                    star: 3
                },
                {
                    username: '130****9879',
                    comment: '感觉很棒，服务员态度非常好',
                    star: 5
                },
                {
                    username: '186****7570',
                    comment: '要是能多给开点发票就好了，哈哈啊',
                    star: 4
                }
            ]
        })
    }
}
module.exports = delay(request, 1000)