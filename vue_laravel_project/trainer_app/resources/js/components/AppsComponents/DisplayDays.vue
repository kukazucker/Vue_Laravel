<template>
    <div class="calendar">
        <div class="day_selector">
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


.calendar {
    width: 100%;
    height: 70px;
    background: #a1a2a3;
    text-align: center;
    padding: 5px;
}

.day_selector {
    position: relative;
    margin-left: 35%;
    display: flex;
    justify-content: right;
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