<template>
    <div style="text-align:center;color:#fff;padding:16px;">
        <h2>Loading...</h2>
    </div>
</template>

<script>
    import * as $D from '../js/data'
    export default {
        route:{
            data(transition){
                $D.MemberLogic.fetch().then(function(d){
                    console.log('.................//',d)
                    transition.redirect('/index')
                }).catch(function(err){
                })
            }
        }
    }
</script>