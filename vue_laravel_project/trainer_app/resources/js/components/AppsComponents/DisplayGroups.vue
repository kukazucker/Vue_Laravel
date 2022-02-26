<template>
    <div class="groups">
        <h1 class="header_groups">{{title}}</h1>
        <div class="groups_selector">
           <slot></slot>
        </div>
    </div>
</template>
<script>
export default {

    props: {
        title: String
    }
    
}
</script>
<style>

.groups {
    width: 100%;
    height: 107px;
    background: #a1a2a3;
    text-align: center;
    padding: 10px;
}

.groups_selector {
    display: flex;
    justify-content: center;
    align-items: center;
}

.group_select {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: white;
    position: relative;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.group_select.on {
    background: #4b5563;
    color: white;
}

.header_groups {
    font-size: 25px;
    position: relative;
}
    
</style>