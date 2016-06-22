<template>
    <ul class="errors" v-if="field && field.dirty && field.invalid">
        <li v-for="error in field.errors">*&nbsp;{{error.message}}</li>
    </ul>
</template>

<script>
    export default {
        props:{
            field:{
                type:Object
            }
        }
    }
</script>