const { PrismaClient: ReplicaClient } = require('./prisma/replicaClient/index.js');
const replicaClient = new ReplicaClient();

const { PrismaClient: StatisticsClient } = require('./prisma/statisticsClient/index.js');
const statisticsClient = new StatisticsClient();

const _ = require('lodash');


/*async function TGstatistics() {
    const startdate = new Date(2021,5,22);
    startdate.toDateString()
    console.log(startdate)

    //현재 날짜
    const today = new Date();
    today.toDateString();
    console.log(today)
    const getDates = await replicaClient.taskGroups.findMany({
        select: {
            createdAt: true,
        },
        orderBy: {
            createdAt: 'asc',
    
        },
    })
    
    for (let i = 0; i < getDates.length; i++){
        getDates[i].createdAt = JSON.stringify(getDates[i].createdAt).substring(1,11)
        //console.log(getDates[i].createdAt)
    }
    const uniqDates = _.uniqBy(getDates, 'createdAt');
    console.log(uniqDates)
    
    const countstatus = await replicaClient.taskGroups.findMany({
        select: {
            createdAt: true,
            status: true,
        },
        where: {
            createdAt: {
                lt: today,
                gte: startdate,
                
            },
            //status: 'ING',
        },
        orderBy: {
            createdAt: 'asc',
    
        },
    })
    
    
    
    for (let i = 0; i < countstatus.length; i++){
        countstatus[i].createdAt = JSON.stringify(countstatus[i].createdAt).substring(1,11)
        //console.log(getDates[i].createdAt)
    }
    console.log(countstatus)
    
    const UPLOADED = Array.from({length: uniqDates.length}, () => 0);
    const GENERATED = Array.from({length: uniqDates.length}, () => 0);
    const READY = Array.from({length: uniqDates.length}, () => 0);
    const CREATED = Array.from({length: uniqDates.length}, () => 0);
    
    let j =0;
    for (let i = 0; i < countstatus.length; i++) {
        if (countstatus[i].createdAt == uniqDates[j].createdAt) {
            if (countstatus[i].status == 'UPLOADED') {
                UPLOADED[j] = UPLOADED[j] + 1;
                console.log(countstatus[i])
                console.log(UPLOADED[j])
            }
            if (countstatus[i].status == 'READY') {
                READY[j] = READY[j] + 1;
                console.log(countstatus[i])
                console.log(READY[j])
                
            }
            if (countstatus[i].status == 'GENERATED') {
                GENERATED[j] = GENERATED[j] + 1;
                console.log(countstatus[i])
                console.log(GENERATED[j])
                
            }
            if (countstatus[i].status == 'CREATED') {
                CREATED[j] = CREATED[j] + 1;
                console.log(countstatus[i])
                console.log(CREATED[j])
                
            }
        }
        else {
            j = j + 1;
            if (countstatus[i].status == 'UPLOADED') {
                UPLOADED[j] = UPLOADED[j] + 1;
                console.log(countstatus[i])
                console.log(UPLOADED[j])
            }
            if (countstatus[i].status == 'READY') {
                READY[j] = READY[j] + 1;
                console.log(countstatus[i])
                console.log(READY[j])
                
            }
            if (countstatus[i].status == 'GENERATED') {
                GENERATED[j] = GENERATED[j] + 1;
                console.log(countstatus[i])
                console.log(GENERATED[j])
                
            }
            if (countstatus[i].status == 'CREATED') {
                CREATED[j] = CREATED[j] + 1;
                console.log(countstatus[i])
                console.log(CREATED[j])
                
            }
        }
    }
    
    console.log(UPLOADED)
    
    
    for (let i = 0; i < uniqDates.length; i++) {
        const insertdates = await statisticsClient.countTG.create({
            data: {
                createdAt:  uniqDates[i].createdAt,
                CREATED: CREATED[i],
                READY: READY[i],
                UPLOADED: UPLOADED[i],
                GENERATED: GENERATED[i],
                
            },
        })
    
    }

}

TGstatistics();*/

/*async function TDstatistics() {
    //Tasks createdAt의 가장 이른 날짜로 기준 설정 2021-07-03
    const startdate = new Date(2021,6,3);
    startdate.toDateString()
    console.log(startdate)

    //현재 날짜
    const today = new Date();
    today.toDateString();
    console.log(today)

    const getDates = await replicaClient.taskDetails.findMany({
        select: {
            createdAt: true,
        },
        orderBy: {
            createdAt: 'asc',
        },
    })

    for (let i = 0; i < getDates.length; i++){
        getDates[i].createdAt = JSON.stringify(getDates[i].createdAt).substring(1,11)
    }
    const uniqDates = _.uniqBy(getDates, 'createdAt');
    console.log(uniqDates)

    const countstatus = await replicaClient.taskDetails.findMany({
        select: {
            createdAt: true,
            status: true,
        },
        where: {
            createdAt: {
                lt: today,
                gte: startdate,
            },
        },
        orderBy: {
            createdAt: 'asc',
        },
    })

    for (let i = 0; i < countstatus.length; i++){
        countstatus[i].createdAt = JSON.stringify(countstatus[i].createdAt).substring(1,11)
    }
    console.log(countstatus)

    const DONE = Array.from({length: uniqDates.length}, () => 0);
    const NOT_FOUND = Array.from({length: uniqDates.length}, () => 0);
    const READY = Array.from({length: uniqDates.length}, () => 0);
    const DELETED = Array.from({length: uniqDates.length}, () => 0);
    const ING = Array.from({length: uniqDates.length}, () => 0);

    let j =0;
    for (let i = 0; i < countstatus.length; i++) {
        if (countstatus[i].createdAt == uniqDates[j].createdAt) {
            if (countstatus[i].status == 'DONE') {
                DONE[j] = DONE[j] + 1;
                console.log(countstatus[i])
                console.log(DONE[j])
            }
            if (countstatus[i].status == 'READY') {
                READY[j] = READY[j] + 1;
                console.log(countstatus[i])
                console.log(READY[j])
            
            }
            if (countstatus[i].status == 'NOT_FOUND') {
                NOT_FOUND[j] = NOT_FOUND[j] + 1;
                console.log(countstatus[i])
                console.log(NOT_FOUND[j])
            
            }
            if (countstatus[i].status == 'DELETED') {
                DELETED[j] = DELETED[j] + 1;
                console.log(countstatus[i])
                console.log(DELETED[j])
            
            }
            if (countstatus[i].status == 'ING') {
                ING[j] = ING[j] + 1;
                console.log(countstatus[i])
                console.log(ING[j])
            
            }
        }
        else {
            j = j + 1;
            if (countstatus[i].status == 'DONE') {
                DONE[j] = DONE[j] + 1;
                console.log(countstatus[i])
                console.log(DONE[j])
            }
            if (countstatus[i].status == 'READY') {
                READY[j] = READY[j] + 1;
                console.log(countstatus[i])
                console.log(READY[j])
            
            }
            if (countstatus[i].status == 'NOT_FOUND') {
                NOT_FOUND[j] = NOT_FOUND[j] + 1;
                console.log(countstatus[i])
                console.log(NOT_FOUND[j])
            
            }
            if (countstatus[i].status == 'DELETED') {
                DELETED[j] = DELETED[j] + 1;
                console.log(countstatus[i])
                console.log(DELETED[j])
            
            }
            if (countstatus[i].status == 'ING') {
                ING[j] = ING[j] + 1;
                console.log(countstatus[i])
                console.log(ING[j])
            
            }
        }
    }

    console.log(READY)


    for (let i = 0; i < uniqDates.length; i++) {
        const insertdates = await statisticsClient.countTD.create({
            data: {
                createdAt:  uniqDates[i].createdAt,
                ING: ING[i],
                READY: READY[i],
                DONE: DONE[i],
                NOT_FOUND: NOT_FOUND[i],
                DELETED: DELETED[i],
            },
        })

    }
}

TDstatistics()*/

/*async function Taskstatistics() {
    const startdate = new Date(2021,6,3);
    startdate.toDateString()
    console.log(startdate)
    
    //현재 날짜
    const today = new Date();
    today.toDateString();
    console.log(today)
    
    const getDates = await replicaClient.tasks.findMany({
        select: {
            createdAt: true,
        },
        orderBy: {
            createdAt: 'asc',
    
        },
    })
    
    
    
    for (let i = 0; i < getDates.length; i++){
        getDates[i].createdAt = JSON.stringify(getDates[i].createdAt).substring(1,11)
        //console.log(getDates[i].createdAt)
    }
    const uniqDates = _.uniqBy(getDates, 'createdAt');
    console.log(uniqDates)
    
    
    const countstatus = await replicaClient.tasks.findMany({
        select: {
            createdAt: true,
            status: true,
        },
        where: {
            createdAt: {
                lt: today,
                gte: startdate,
                
            },
            //status: 'ING',
        },
        orderBy: {
            createdAt: 'asc',
    
        },
    })
    
    for (let i = 0; i < countstatus.length; i++){
        countstatus[i].createdAt = JSON.stringify(countstatus[i].createdAt).substring(1,11)
        //console.log(getDates[i].createdAt)
    }
    
    
    const ING = Array.from({length: uniqDates.length}, () => 0);
    const DONE = Array.from({length: uniqDates.length}, () => 0);
    const READY = Array.from({length: uniqDates.length}, () => 0);
    const ASSIGNED = Array.from({length: uniqDates.length}, () => 0);
    const CREATED = Array.from({length: uniqDates.length}, () => 0);
    
    
    
    console.log(countstatus)
    let j =0;
    for (let i = 0; i < countstatus.length; i++) {
        if (countstatus[i].createdAt == uniqDates[j].createdAt) {
            if (countstatus[i].status == 'ING') {
                ING[j] = ING[j] + 1;
                console.log(ING[j])
            }
            if (countstatus[i].status == 'READY') {
                READY[j] = READY[j] + 1;
                console.log(READY[j])
            }
            if (countstatus[i].status == 'DONE') {
                DONE[j] = DONE[j] + 1;
                console.log(DONE[j])
            }
            if (countstatus[i].status == 'ASSIGNED') {
                ASSIGNED[j] = ASSIGNED[j] + 1;
                console.log(ASSIGNED[j])
            }
            if (countstatus[i].status == 'CREATED') {
                CREATED[j] = CREATED[j] + 1;
                console.log(CREATED[j])
            }
        }
        else {
            j = j + 1;
            if (countstatus[i].status == 'ING') {
                ING[j] = ING[j] + 1;
                console.log(ING[j])
            }
            if (countstatus[i].status == 'READY') {
                READY[j] = READY[j] + 1;
                console.log(READY[j])
            }
            if (countstatus[i].status == 'DONE') {
                DONE[j] = DONE[j] + 1;
                console.log(DONE[j])
            }
            if (countstatus[i].status == 'ASSIGNED') {
                ASSIGNED[j] = ASSIGNED[j] + 1;
                console.log(ASSIGNED[j])
            }
            if (countstatus[i].status == 'CREATED') {
                CREATED[j] = CREATED[j] + 1;
                console.log(CREATED[j])
            }
        }
    }
    
    for (let i = 0; i < uniqDates.length; i++) {
        const insertdates = await statisticsClient.countTasks.create({
            data: {
                createdAt:  uniqDates[i].createdAt,
                CREATED: CREATED[i],
                READY: READY[i],
                DONE: DONE[i],
                ASSIGNED: ASSIGNED[i],
                ING: ING[i],
            },
        })
    
    }
  }

  Taskstatistics()*/

  async function Tstatistics() {
    const startdate = new Date(2021,5,28);
    startdate.toDateString()
    console.log(startdate)
    
    //현재 날짜
    const today = new Date();
    today.toDateString();
    console.log(today)
    
    const getDates = await replicaClient.teams.findMany({
        select: {
            createdAt: true,
        },
        orderBy: {
            createdAt: 'asc',
    
        },
    })
    
    for (let i = 0; i < getDates.length; i++){
        getDates[i].createdAt = JSON.stringify(getDates[i].createdAt).substring(1,11)
        //console.log(getDates[i].createdAt)
    }
    const uniqDates = _.uniqBy(getDates, 'createdAt');
    console.log(uniqDates)
    
    const countstatus = await replicaClient.teams.findMany({
        select: {
            createdAt: true,
            status: true,
        },
        where: {
            createdAt: {
                lt: today,
                gte: startdate,
                
            },
            //status: 'ING',
        },
        orderBy: {
            createdAt: 'asc',
    
        },
    })
    
    
    
    for (let i = 0; i < countstatus.length; i++){
        countstatus[i].createdAt = JSON.stringify(countstatus[i].createdAt).substring(1,11)
        //console.log(getDates[i].createdAt)
    }
    console.log(countstatus)
    
    const CREATED = Array.from({length: uniqDates.length}, () => 0);
    const ING = Array.from({length: uniqDates.length}, () => 0);
    const DONE = Array.from({length: uniqDates.length}, () => 0);
    
    let j =0;
    for (let i = 0; i < countstatus.length; i++) {
        if (countstatus[i].createdAt == uniqDates[j].createdAt) {
            if (countstatus[i].status == 'ING') {
                ING[j] = ING[j] + 1;
                console.log(countstatus[i])
                console.log(ING[j])
            }
            if (countstatus[i].status == 'DONE') {
                DONE[j] = DONE[j] + 1;
                console.log(countstatus[i])
                console.log(DONE[j])
                
            }
            if (countstatus[i].status == 'CREATED') {
                CREATED[j] = CREATED[j] + 1;
                console.log(countstatus[i])
                console.log(CREATED[j])
                
            }
        }
        else {
            j = j + 1;
            if (countstatus[i].status == 'ING') {
                ING[j] = ING[j] + 1;
                console.log(countstatus[i])
                console.log(ING[j])
            }
            if (countstatus[i].status == 'DONE') {
                DONE[j] = DONE[j] + 1;
                console.log(countstatus[i])
                console.log(DONE[j])
                
            }
            if (countstatus[i].status == 'CREATED') {
                CREATED[j] = CREATED[j] + 1;
                console.log(countstatus[i])
                console.log(CREATED[j])
                
            }
        }
    }
    
    console.log(DONE)
    
    
    for (let i = 0; i < uniqDates.length; i++) {
        const insertdates = await statisticsClient.countT.create({
            data: {
                createdAt:  uniqDates[i].createdAt,
                CREATED: CREATED[i],
                ING: ING[i],
                DONE: DONE[i],
            },
        })
    
    }
  }

  Tstatistics()