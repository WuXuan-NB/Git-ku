import Mock from 'mockjs'

let data=Mock.mock({
    "attention|30":[
        {
            "img":"@image(110x100)",
            "title":"@ctitle",
            "description": '@cparagraph',
            "comment|1000-9999": 1000,
            "favor|1000-9999": 1000,
            time: '@datetime',
            "id|+1":1
        }
    ],
    "recommend|30":[
        {
            "img":"@image(110x100)",
            "title":"@ctitle",
            "description": '@cparagraph',
            "comment|1000-9999": 1000,
            "favor|1000-9999": 1000,
            time: '@datetime',
            "id|+1":1
        }
    ],
    "hot|30":[
        {
            "img":"@image(110x100)",
            "title":"@ctitle",
            "description": '@cparagraph',
            "comment|1000-9999": 1000,
            "favor|1000-9999": 1000,
            time: '@datetime',
            "id|+1":1
        }
    ]
})
console.log(data);

// 拦截关注，推荐还有热门请求列表
Mock.mock(/\/api\/list/, 'get', function(options){
    console.log('options...', options);
    // 处理请求的数据类型
    let query = options.url.split('?')[1].split('&'),
        queryObj = {};
    query.forEach(item=>{
        let arr = item.split('=')
        queryObj[arr[0]] = arr[1];
    })
    let {type, page, pageSize} = queryObj;
    // console.log('data...', data, type);
    return data[type].slice(pageSize*(page-1), pageSize*page);
})


