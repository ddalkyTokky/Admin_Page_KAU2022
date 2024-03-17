const jwt = require('../modules/jwt');
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;
const fs = require("fs");
var users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
const Tasks1 = JSON.parse(fs.readFileSync("./Tasks1.json", "utf8"));

const authUtil = {
    checkToken: async (req, res, next) => {
        var token = req.headers.token;

        //console.log(token)

        // 토큰 없음
        if (!token)
            return res.send("No token")
        // decode
        const decoded = await jwt.verify(token);
        //console.log(decoded)
        // 유효기간 만료
        if (decoded === TOKEN_EXPIRED)
            return res.send("Expired token")
        // 유효하지 않는 토큰
        if (decoded === TOKEN_INVALID)
            return res.send("Invalid token")
        if (decoded.id === undefined)
            return res.send("Undefined token")
        req.id = decoded.id;

        /*
        for(var i=0;i<users.length;i++){
            users[i].new_index = i;
        }
        return res.json(users)
        */
        if (String(req.headers.request_type) === "undefined") {
            //console.log("request_type non-exist");
            return res.status(200).send("Token OK");
        }

        try {
            //console.log(req.headers)
            const return_value = await load_replica(String(req.headers.request_type), req.headers);
            //console.log("DB success");
            return res.json(return_value);
        }
        catch (e) {
            //console.log("DB Fail");
            return res.status(404).send("DB Connection Fail");
        }

        //next();
    }
}

//======================================================================

const { PrismaClient: ReplicaPrismaClient } = require('../prisma/replicaClient/index.js');
const replicaClient = new ReplicaPrismaClient();

//const { PrismaClient: Replica2PrismaClient } = require('../prisma/replica2Client/index.js');
//const replica2Client = new Replica2PrismaClient();

const { PrismaClient: StatisticsPrismaClient } = require('../prisma/statisticsClient/index.js');
const statisticsClient = new StatisticsPrismaClient();

async function load_replica(request_type, headers) {
    if (request_type == 'pilot') {
        const pilotResult = await replicaClient.Accounts.
            findMany({
                select: {
                    id: true,
                    name: true,
                    //phone: true,
                    createdAt: true,
                    profile: true
                }
            })

        for (var i = 0; i < pilotResult.length; i++) {
            try {
                pilotResult[i].profile = pilotResult[i].profile.value;
                delete pilotResult[i].profile.value;
            }
            catch (e) { }

            try {
                pilotResult[i].drone = pilotResult[i].profile.drones;
                delete pilotResult[i].profile.drones;
            }
            catch (e) { }

            try {
                pilotResult[i].career = pilotResult[i].profile.career;
                delete pilotResult[i].profile.career;
            }
            catch (e) { }

            try {
                pilotResult[i].area = pilotResult[i].profile.area;
                delete pilotResult[i].profile.area;
            }
            catch (e) { }

            try {
                pilotResult[i].region = pilotResult[i].profile.region;
                delete pilotResult[i].profile.region;
            }
            catch (e) { }
        }

        //console.log(pilotResult);
        return pilotResult;
    }
    /*
        if (request_type == 'farmer') {
            const farmerResult = await replica2Client.Users.
                findMany({
                })
    
            console.log(farmerResult);
            return farmerResult;
        }
    */
    if (request_type == 'taskgroup') {
        const tgResult = await replicaClient.TaskGroups.
            findMany({
                select: {
                    id: true,
                    name: true,
                    area: true,
                    status: true,
                    AccountId: true,
                    createdAt: true,
                    Accounts: {
                        select: {
                            name: true
                        }
                    },
                    _count: {
                        select: {
                            Tasks: true
                        }
                    },
                    Tasks: {
                        select: {
                            _count: {
                                select: {
                                    TaskDetails: true
                                }
                            }
                        }
                    }
                }
            })

        for (var i = 0; i < tgResult.length; i++) {
            try {
                tgResult[i].AccountName = tgResult[i].Accounts.name;
                delete tgResult[i].Accounts;
            }
            catch (e) { }

            try {
                tgResult[i].TaskCount = tgResult[i]._count.Tasks;
                delete tgResult[i]._count;
            }
            catch (e) { }

            try {
                var sum = 0;
                for (var j = 0; j < tgResult[i].Tasks.length; j++) {
                    sum += tgResult[i].Tasks[j]._count.TaskDetails;
                }
                tgResult[i].TDCount = sum;
                delete tgResult[i].Tasks;
            }
            catch (e) { }
        }

        //console.log(tgResult);
        return tgResult;
    }

    if (request_type == 'task') {
        const taskResult = await replicaClient.Tasks.
            findMany({
                select: {
                    id: true,
                    name: true,
                    area: true,
                    status: true,
                    TaskGroupId: true,
                    AccountId: true,
                    createdAt: true,
                    Accounts: {
                        select: {
                            name: true
                        }
                    },
                    TaskDetails: {
                        select: {
                            address: true
                        }
                    },
                    TaskGroups: {
                        select: {
                            name: true
                        }
                    },
                    _count: {
                        select: {
                            TaskDetails: true,
                            Teams: true
                        }
                    }
                }
            })

        for (var i = 0; i < taskResult.length; i++) {
            try {
                taskResult[i].AccountName = taskResult[i].Accounts.name;
                delete taskResult[i].Accounts;
            }
            catch (e) { }

            try {
                taskResult[i].TGName = taskResult[i].TaskGroups.name;
                delete taskResult[i].TaskGroups;
            }
            catch (e) { }

            try {
                taskResult[i].RepresentAddress = taskResult[i].TaskDetails[0].address;
                delete taskResult[i].TaskDetails;
            }
            catch (e) { }

            try {
                taskResult[i].TDCount = taskResult[i]._count.TaskDetails;
            }
            catch (e) { }

            try {
                taskResult[i].TeamCount = taskResult[i]._count.Teams;
                delete taskResult[i]._count;
            }
            catch (e) { }
        }

        return taskResult;
    }

    if (request_type == 'taskdetail') {
        const tdResult = await replicaClient.TaskDetails.
            findMany({
                select: {
                    id: true,
                    address: true,
                    area: true,
                    status: true,
                    category: true,
                    memo: true,
                    etc: true,
                    AccountId: true,
                    TeamId: true,
                    TaskId: true,
                    createdAt: true,
                    Tasks: {
                        select: {
                            name: true,
                            TaskGroups: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                },
                take: 10000
            })

        for (var i = 0; i < tdResult.length; i++) {
            try {
                tdResult[i].TaskName = tdResult[i].Tasks.name;
            }
            catch (e) { }

            try {
                tdResult[i].TGName = tdResult[i].Tasks.TaskGroups.name;
                delete tdResult[i].Tasks;
            }
            catch (e) { }
        }

        //console.log(tdResult);
        return tdResult;
    }

    if (request_type == 'team') {
        const teamResult = await replicaClient.Teams.
            findMany({
                select: {
                    id: true,
                    name: true,
                    TaskId: true,
                    area: true,
                    AgentId: true,
                    AccountId: true,
                    status: true,
                    createdAt: true,
                    Tasks: {
                        select: {
                            name: true,
                            TaskGroups: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    },
                    _count: {
                        select: {
                            TaskDetails: true
                        }
                    }
                }
            })

        for (var i = 0; i < teamResult.length; i++) {
            try {
                teamResult[i].TaskName = teamResult[i].Tasks.name;
            }
            catch (e) { }

            try {
                teamResult[i].TGName = teamResult[i].Tasks.TaskGroups.name;
                delete teamResult[i].Tasks;
            }
            catch (e) { }

            try {
                teamResult[i].TDCount = teamResult[i]._count.TaskDetails;
                delete teamResult[i]._count;
            }
            catch (e) { }
        }

        //console.log(teamResult);
        return teamResult;
    }

    if (request_type == 'tgchart') {
        const tgStatistics = await statisticsClient.countTG.
            findMany({})

        for (var i = 0; i < tgStatistics.length; i++) {
            try {
                tgStatistics[i].sum = 0;
            }
            catch (e) { }
        }
        if (headers.created == 'true') {
            for (var i = 0; i < tgStatistics.length; i++) {
                try {
                    tgStatistics[i].sum += tgStatistics[i].CREATED;
                }
                catch (e) { }
            }
        }
        if (headers.ready == 'true') {
            for (var i = 0; i < tgStatistics.length; i++) {
                try {
                    tgStatistics[i].sum += tgStatistics[i].READY;
                }
                catch (e) { }
            }
        }
        if (headers.uploaded == 'true') {
            for (var i = 0; i < tgStatistics.length; i++) {
                try {
                    tgStatistics[i].sum += tgStatistics[i].UPLOADED;
                }
                catch (e) { }
            }
        }
        if (headers.generated == 'true') {
            for (var i = 0; i < tgStatistics.length; i++) {
                try {
                    tgStatistics[i].sum += tgStatistics[i].GENERATED;
                }
                catch (e) { }
            }
        }

        //console.log(tgStatistics);
        return tgStatistics;
    }

    if (request_type == 'taskchart') {
        const taskStatistics = await statisticsClient.countTasks.
            findMany({})

        for (var i = 0; i < taskStatistics.length; i++) {
            try {
                taskStatistics[i].sum = 0;
            }
            catch (e) { }
        }
        if (headers.created == 'true') {
            for (var i = 0; i < taskStatistics.length; i++) {
                try {
                    taskStatistics[i].sum += taskStatistics[i].CREATED;
                }
                catch (e) { }
            }
        }
        if (headers.ready == 'true') {
            for (var i = 0; i < taskStatistics.length; i++) {
                try {
                    taskStatistics[i].sum += taskStatistics[i].READY;
                }
                catch (e) { }
            }
        }
        if (headers.assigned == 'true') {
            for (var i = 0; i < taskStatistics.length; i++) {
                try {
                    taskStatistics[i].sum += taskStatistics[i].ASSIGNED;
                }
                catch (e) { }
            }
        }
        if (headers.ing == 'true') {
            for (var i = 0; i < taskStatistics.length; i++) {
                try {
                    taskStatistics[i].sum += taskStatistics[i].ING;
                }
                catch (e) { }
            }
        }
        if (headers.done == 'true') {
            for (var i = 0; i < taskStatistics.length; i++) {
                try {
                    taskStatistics[i].sum += taskStatistics[i].DONE;
                }
                catch (e) { }
            }
        }

        //onsole.log(taskStatistics);
        return taskStatistics;
    }

    if (request_type == 'tdchart') {
        const tdStatistics = await statisticsClient.countTD.
            findMany({})

        for (var i = 0; i < tdStatistics.length; i++) {
            try {
                tdStatistics[i].sum = 0;
            }
            catch (e) { }
        }
        if (headers.done == 'true') {
            for (var i = 0; i < tdStatistics.length; i++) {
                try {
                    tdStatistics[i].sum += tdStatistics[i].DONE;
                }
                catch (e) { }
            }
        }
        if (headers.ready == 'true') {
            for (var i = 0; i < tdStatistics.length; i++) {
                try {
                    tdStatistics[i].sum += tdStatistics[i].READY;
                }
                catch (e) { }
            }
        }
        if (headers.not_found == 'true') {
            for (var i = 0; i < tdStatistics.length; i++) {
                try {
                    tdStatistics[i].sum += tdStatistics[i].NOT_FOUND;
                }
                catch (e) { }
            }
        }
        if (headers.deleted == 'true') {
            for (var i = 0; i < tdStatistics.length; i++) {
                try {
                    tdStatistics[i].sum += tdStatistics[i].DELETED;
                }
                catch (e) { }
            }
        }
        if (headers.ing == 'true') {
            for (var i = 0; i < tdStatistics.length; i++) {
                try {
                    tdStatistics[i].sum += tdStatistics[i].ING;
                }
                catch (e) { }
            }
        }
        //console.log(taskStatistics);
        return tdStatistics;
    }

    if (request_type == 'teamchart') {
        const teamStatistics = await statisticsClient.countT.
            findMany({})

        for (var i = 0; i < teamStatistics.length; i++) {
            try {
                teamStatistics[i].sum = 0;
            }
            catch (e) { }
        }
        if (headers.created == 'true') {
            for (var i = 0; i < teamStatistics.length; i++) {
                try {
                    teamStatistics[i].sum += teamStatistics[i].CREATED;
                }
                catch (e) { }
            }
        }
        if (headers.ing == 'true') {
            for (var i = 0; i < teamStatistics.length; i++) {
                try {
                    teamStatistics[i].sum += teamStatistics[i].ING;
                }
                catch (e) { }
            }
        }
        if (headers.done == 'true') {
            for (var i = 0; i < teamStatistics.length; i++) {
                try {
                    teamStatistics[i].sum += teamStatistics[i].DONE;
                }
                catch (e) { }
            }
        }
        //console.log(taskStatistics);
        return teamStatistics;
    }
}

module.exports = authUtil;