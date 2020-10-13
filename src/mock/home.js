import Mock from 'mockjs'

export default {
    getHomeData:()=>{
        return {
            code:20000,
            data:{
                videoData:[
                    {
                        name:'Spring boot',
                        value:Mock.Random.float(1000,10000,0,2)
                    },
                    {
                        name:'Vue',
                        value:Mock.Random.float(1000,10000,0,2)
                    },
                    {
                        name:'Java',
                        value:Mock.Random.float(1000,10000,0,2)
                    }
                ]
            }
        }
    },
    getTableData:()=>{
        let list=[];
        let book=["vue","wechat","java","redis","springboot"]
        for (let i = 0; i < book.length; i++) {
           list.push(
              Mock.mock({
                  name:book[i],
                  todayBuy:Mock.Random.float(100,1000,0,2),
                  monBuy:Mock.Random.float(100,1000,0,2),
                  totalBuy:Mock.Random.float(100,1000,0,2)                   
              })
           );          
        }
        //折线图模拟数据
        let listOrder=[]
        for (let i = 0; i < 6; i++) {
            listOrder.push(Mock.mock( {
                vue:Mock.Random.float(100,1000,0,2),
                wechat:Mock.Random.float(100,1000,0,2),
                java:Mock.Random.float(100,1000,0,2),
                redis:Mock.Random.float(100,1000,0,2),
                springboot:Mock.Random.float(100,1000,0,2)
            }));
        }

        //柱状图数据
        let listBar=[
            {
                name: 'Forest',
                type: 'bar',
                barGap: 0,
                data: [320, 332, 301, 334, 390]
            },
            {
                name: 'Steppe',
                type: 'bar',
                data: [220, 182, 191, 234, 290]
            },
            {
                name: 'Desert',
                type: 'bar',
                data: [150, 232, 201, 154, 190]
            },
            {
                name: 'Wetland',
                type: 'bar',
                data: [98, 77, 101, 99, 40]
            }
        ];

        //饼图数据

        return {
            code:20000,
            tableData:list,
            orderData:{
                data:listOrder,
                date:['1月','2月','3月','4月','5月']
            },
            barData:listBar,
            pieData:{}
        }
    }
}