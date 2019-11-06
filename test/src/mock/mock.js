import Mock from 'mockjs'

Mock.mock("/list",'get',{
    "list|10":[
        {
            "img":"@image(100x100)",
            "title":"@ctitle",
            "description": '@cparagraph'
        }
    ]
})