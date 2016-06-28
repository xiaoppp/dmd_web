<template>
    <div style="text-align:center;color:#fff;padding:16px;">
        <h2 style="color:#fff;font-size:20px;">Loading...</h2>
    </div>
</template>

<script>
    import * as D from '../js/data'
    export default {
        route:{
            data(transition){
                let p = this.$parent
                D.MemberLogic.fetch().then(function(d){
                    console.log('.................//', d)
                    p.$set('nickname',D.Member.nickname)
                    p.$set('level',D.Member.level)
                    p.$set('believe',D.Member.believe)
                    p.$set('sex',D.Member.sex)
                    transition.redirect('/index')
                }).catch(function(err){
                })
            }
        }
    }
</script>