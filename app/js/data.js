import {API} from './api'
import Q from 'q'
import config from './config'

//data fetch

export const ApplyLogic = {
    fetchOne(id, ajax = 0){
        let deferred = Q.defer()
        if(!ajax && Applys.init){
            let one = Applys.data.find(x=>x.id == id)
            if(one) deferred.resolve(Object.assign({}, {apply:one, pairs:[]}))
            else ajax = 1
        }
        if(ajax){
            API.ApplyDetail(id).then(d =>{
                if(d.isSuccess) deferred.resolve(d.data)
                else deferred.reject(d.error)
            }).catch(err=>{
                deferred.reject(err)
            })
        }
        return deferred.promise
    },
    fetchMany(){
        let deferred = Q.defer()
        if(config.useCache &&  Applys.init) deferred.resolve(Applys)
        else {
            API.DealRecords('applys',1).then(d  => {
                if(d.isSuccess){ 
                    Applys.init = 1
                    Applys.data = d.data
                    deferred.resolve(Applys)
                }
                else deferred.reject(d.error)
            }).catch(err => {
                deferred.reject(err)
            })
        }
        return deferred.promise
    }
}

export const OfferLogic = {
    fetchOne(id, ajax = 0){
        let deferred = Q.defer()
        if(!ajax && Offers.init){
            let one = Offers.data.find(x=>x.id == id)
            console.log(one,Offers.data)
            if(one) deferred.resolve(Object.assign({}, {offer: one, pairs : []}))
            else ajax = 1
        }
        if(ajax){
            API.OfferDetail(id).then(d =>{
                if(d.isSuccess) deferred.resolve(d.data)
                else deferred.reject(d.error)
            }).catch(err => {
                deferred.reject(err)
            })
        }
        return deferred.promise
    },
    fetchMany(){
        let deferred = Q.defer()
        if(config.useCache && Offers.init) deferred.resolve(Offers)
        else {
            API.DealRecords('offers',1).then(d  => {
                if(d.isSuccess){ 
                    Offers.init = 1
                    Offers.data = d.data
                    deferred.resolve(Offers)
                }
                else deferred.reject(d.error)
            }).catch(err => {
                deferred.reject(err)
            })
        }
        return deferred.promise
    }
}

export const FailedMatchLogic = {
    fetchMany(){
        let deferred = Q.defer()
        if(config.useCache && FailedMatches.init) deferred.resolve(FailedMatches)
        else {
            API.DealRecords('pairs/failed',1).then(d  => {
                if(d.isSuccess){ 
                    FailedMatches.init = 1
                    FailedMatches.data = d.data
                    deferred.resolve(FailedMatches)
                }
                else deferred.reject(d.error)
            }).catch(err => {
                deferred.reject(err)
            })
        }
        return deferred.promise
    }
}

//on the way
export const TeamLogic = {
    fetchOne(id){
        let deferred = Q.defer()
        let one = Team.data.find(x=>x.id == id)
        if(one) deferred.resolve(one)
        else  throw 'member is not found'
        return deferred.promise
    },
    fetchChildren(id){
        console.log(id)
        let deferred = Q.defer()
        let one = Team.data.find(x=>x.id == id)
        if(!one) throw 'member is not found'
        else {
            if(one.hasChildren) {
                let children = Team.data.filter(x=>x.parent_id == id).map(x=>{
                    return {
                                id: x.id,
                                sex: x.sex,
                                truename: x.truename,
                                mobile: x.mobile,
                                teamCount : x.teamCount
                            }
                })
                deferred.resolve(children)
            } else {
                API.TeamTree(id).then(function(data) {
                    if (data.isSuccess) {
                        let children = data.data.map(x=>{
                            Team.data.push(x)
                            return {
                                id: x.id,
                                sex: x.sex,
                                truename: x.truename,
                                mobile: x.mobile,
                                teamCount : x.teamCount
                            }
                        })
                        one.hasChildren = 1
                        deferred.resolve(children)
                    } else {
                        deferred.reject(data.error)
                    }
                })
            }
        }
        return deferred.promise
    }
}

export const IncomeLogic = {
    fetchMany(type, page){
        let deferred = Q.defer()
        if(config.useCache && type == Incomes.type && page == Incomes.page && Incomes.init) deferred.resolve(Incomes)
        API.IncomeRecords(type, page).then(d=>{
            if(d.isSuccess) {
                Incomes.init = 1
                Incomes.page = page
                Incomes.type = type
                Incomes.data = d.data.rows
                Incomes.total = d.data.count
                deferred.resolve(Incomes)
            } else {
                deferred.reject(d.error)
            }
        }).catch(err=>{
            deferred.reject(err)
        })
        return deferred.promise
    }
}

export const NewsLogic = {
    fetchOne(id){
        let deferred = Q.defer()
        let ajax = 0
        if(News.init){
            let one = News.data.find(x=>x.id == id)
            if(one) deferred.resolve(Object.assign({},one))
            else ajax = 1
        } else {
            ajax = 1
        }
        if(ajax){
            API.NewsSingle(id).then(d=>{
                if(d.isSuccess) deferred.resolve(d.data)
                else deferred.reject(d.error)
            }).catch(err=>{
                deferred.reject(err)
            })
        }
        return deferred.promise
    },
    fetchMany(page){
        let deferred = Q.defer()
        if(config.useCache && page == News.page && News.init) deferred.resolve(News)
        else {
            API.News(page).then(d=>{
                if(d.isSuccess){
                    News.page = page
                    News.init = 1
                    News.total = d.data.count
                    News.data = d.data.rows
                    deferred.resolve(News)
                }
                else deferred.reject(d.error)
            }).catch(err=>{
                deferred.reject(err)
            })
        }
        return deferred.promise
    }
}

export const MessageLogic = {
    fetchOne(id){
        let deferred = Q.defer()
        let ajax = 0
        if(Messages.init){
            let one = Messages.data.find(x=>x.id == id)
            if(one) deferred.resolve(Object.assign({}, one))
            else ajax = 1
        } else {
            ajax = 1
        }
        if(ajax){
            API.MessageSingle(id).then(d=>{
                if(d.isSuccess) deferred.resolve(d.data)
                else deferred.reject(d.error)
            }).catch(err=>{
                deferred.reject(err)
            })
        }
        return deferred.promise
    },
    fetchMany(page){
        let deferred = Q.defer()
        if(config.useCache && page == Messages.page && Messages.init) deferred.resolve(Messages)
        else {
            API.Messages(page).then(d=>{
                if(d.isSuccess){
                    Messages.page = page
                    Messages.init = 1
                    Messages.total = d.data.count
                    Messages.data = d.data.rows
                    deferred.resolve(Messages)
                }
                else deferred.reject(d.error)
            }).catch(err=>{
                deferred.reject(err)
            })
        }
        return deferred.promise
    }
}

export const MemberLogic = {
    sum(){
        if(!Member.init) return 0
        return Member.money + Member.moneyFreeze        
    },
    bonus(){
        if(!Member.init) return 0
        return Member.bonus + Member.bonusFreeze
    },
    total(){
        if(!Member.init) return 0
        return 	Member.money + Member.interest + 
                Member.bonus + Member.moneyFreeze +
                Member.bonusFreeze
    },
    frozen(){
        if(!Member.init) return 0
        return Member.moneyFreeze + Member.bonusFreeze
    },
    available(){
        if(!Member.init) return 0
        return 	Member.money + Member.interest + 
                Member.bonus - Member.moneyApply
    },
    about(){
        let offer = arguments[0] || Member.lastOffer
        if(!Member.init || !Config.pretty || !offer) return 0
        if(offer && offer.fst)
            return offer.money * Config.key6 * Config.key24
        else return 0
    },
    run(){
        if(!Member.init) return
        console.log('---run//member//');
        let self = this
        let o = {
            sum       :  self.sum(),
            bonus     :  self.bonus(),
            total     :  self.total(),
            frozen    :  self.frozen(),
            available :  self.available(),
            about     :  self.about()
        }
        Object.assign(Member.capital, o)
        Member.pretty = 1
    },
    assign: function(...d){
        console.log('---assign//member//');
        if(d.length < 1) return
        d.forEach(x=>{
            Object.assign(Member, x)
        })
        Member.init = 1
    },
    fetch(){
        let self = this
        let deferred = Q.defer()

        if(Member.init && Member.pretty) deferred.resolve(Member)
        else {
             API.IndexData().then(function(data){
                if(data.isSuccess) {

                    let d = data.data
                    console.log('---data//',d)
                    
                    ConfigLogic.assign(d.config)
                    ConfigLogic.run()

                    console.log('---config//',Config)

                    MemberLogic.assign(d.member, { 
                        lastApply : d.lastApply,
                        lastOffer : d.lastOffer, 
                        showNews : d.showNews,
                        teamScope : d.teamScope,
                        moneyApply : d.moneyApply || 0,
                        bonusFreeze : d.bonusFreeze || 0,
                        moneyFreeze : d.moneyFreeze || 0,
                    })

                    MemberLogic.run()

                    Team.data.push(Member)

                    deferred.resolve(Member)
                    
                } else {
                    alert2(data.error.message)
                    console.log(data.error.message)
                    deferred.reject(data.error)
                }
            })
        }

        return deferred.promise
    }
}

export const ConfigLogic = {
    run(){
        if(!Config.init) return
        let cfg = Config.raw
        cfg.forEach(({id,val},i)=>{
            let t = val
            if(/-/.test(t)){
                t = t.split('-')
                t.forEach((v,i) => {
                    if(/\./.test(v)) t[i] = parseFloat(v)
                    else t[i] = parseInt(v)
                })
            } else {
                if(/\./.test(t)) t = parseFloat(t)
                else t = parseInt(t)
            }
            Config['key'+ id] = t
        })
        Config.pretty = 1
    },
    assign(d){
        Config.raw = d
        Config.init = 1
    }
}

//data store
export const Member = {
    init : 0,
    pretty : 0,
    lastApply : {},
    lastOffer : {},
    capital   : {}
}

export const Config = {
    init : 0,
    pretty : 0,
    raw : [],
}

export const News = {
    init : 0,
    pretty : 0,
    page : 1,
    total : 0,
    data : []
}

export const Applys ={
    init : 0,
    pretty : 0,
    data : []
}

export const Offers = {
    init : 0,
    pretty : 0,
    data : []
}

export const Team = {
    init : 0,
    pretty : 0,
    data : [],
}

export const Incomes = {
    init : 0,
    pretty : 0,
    type : 'money',
    page : 1,
    total : 0,
    data : []
}

export const Messages = {
    init : 0,
    pretty : 0,
    page : 1,
    total : 0,
    data : []
}

export const FailedMatches = {
    init : 0,
    pretty : 0,
    data : []
}