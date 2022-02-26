<template>
    <div class="header_links">
        <router-link :to="{ name: 'Dashboard' }">
            <button class="big_icon">Add user</button>
        </router-link>
    </div>
</template>
<script>
export default {

    // props: {
    //     group_select: String,
    // }
    
}
</script>
<style>

.header_links {
    position: absolute; 
    top: 5px;
    right: 0px
}



</style>