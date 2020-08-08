
export const getCats = (catId)=>{
    
    switch (catId) {
        case "1":
            return gaoyong.catsL;
        case "2":
            return daequan.catsL;
        case "3":
            return rexiao.catsL;
        case "4":
            return pinpai.catsL;
        case "5":
            return haoquan.catsL;
            default:
            return;
    }}

const pinpai = {catsL : [
    {
        catName : "综合",
        catValue : 3786
    },
    {
        catName : "女装",
        catValue : 3788
    },
    {
        catName : "家居家装",
        catValue : 3792
    },{
        catName : "数码家电",
        catValue : 3793
    },{
        catName : "鞋包配饰",
        catValue : 3796
    },{
        catName : "美妆个护",
        catValue : 3794
    },{
        catName : "男装",
        catValue : 3790
    },{
        catName : "内衣",
        catValue : 3787
    },{
        catName : "母婴",
        catValue : 3789
    },{
        catName : "食品",
        catValue : 3791
    },{
        catName : "运动户外",
        catValue : 3795
    }]
}

const haoquan = {catsL : [
    {
        catName : "综合",
        catValue : 3756
    },
    {
        catName : "女装",
        catValue : 3767
    },
    {
        catName : "家居家装",
        catValue : 3758
    },{
        catName : "数码家电",
        catValue : 3759
    },{
        catName : "鞋包配饰",
        catValue : 3762
    },{
        catName : "美妆个护",
        catValue : 3763
    },{
        catName : "男装",
        catValue : 3764
    },{
        catName : "内衣",
        catValue : 3765
    },{
        catName : "母婴",
        catValue : 3760
    },{
        catName : "食品",
        catValue : 3761
    },{
        catName : "运动户外",
        catValue : 3766
    }]
}

const gaoyong = {catsL : [
    {
        catName : "综合",
        catValue : 13366
    },
    {
        catName : "女装",
        catValue : 13367
    },
    {
        catName : "家居家装",
        catValue : 13368
    },{
        catName : "数码家电",
        catValue : 13369
    },{
        catName : "鞋包配饰",
        catValue : 13370
    },{
        catName : "美妆个护",
        catValue : 13371
    },{
        catName : "男装",
        catValue : 13372
    },{
        catName : "内衣",
        catValue : 13373
    },{
        catName : "母婴",
        catValue : 13374
    },{
        catName : "食品",
        catValue : 13375
    },{
        catName : "运动户外",
        catValue : 13376
    }]
}

const daequan = {catsL : [
    {
        catName : "综合",
        catValue : 27446
    },
    {
        catName : "女装",
        catValue : 27448
    },
    {
        catName : "食品",
        catValue : 27451
    },{
        catName : "美妆个护",
        catValue : 27453
    },{
        catName : "家居家装",
        catValue : 27798
    },{
        catName : "母婴",
        catValue : 27454
    }]
}

const rexiao = {catsL : [
    {
        catName : "综合",
        catValue : 28026
    },
    {
        catName : "大服饰",
        catValue : 28029
    },
    {
        catName : "大快消",
        catValue : 28027
    },{
        catName : "电器美家",
        catValue : 28028
    }]
}