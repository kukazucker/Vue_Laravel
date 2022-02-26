<template>
    <div v-bind:class="class_select">
        <div>
            <h1 class="component_name">{{ title + extratitle}}</h1>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {

    props: {

        title: {

            type: String
        },

        class_select: {
            
            type: String
        },

        extra_title: {

            type: String
        }
    },

    setup(props) {

        let extratitle = props.extra_title;

        if( extratitle == undefined ) {

            extratitle = '';
        }

        return {
            extratitle,
        }
    }
    
}
</script>

<style>

.components.schedule {
    position: relative;
    width: 95%;
    min-height: 250px;  
}

.components.personal {
    position: relative;
    margin-top: 40px;
    width: 49%;
    min-height:280px;
    top: 10px;
}

.components.main {
    position: relative;
    width: 95%;
    min-height: 300px;  
}

.components.info {
    position: relative;
    width: 90%;
    margin-left: 5%;
    margin-bottom: 5%;
    min-height: 90px;
}

.components.calendar {
    position: relative;
    width: 90%;
    margin-left: 5%;
    margin-bottom: 5%;
    min-height: 90px;
}

.component_name {
    position: relative;
    width: 100%;
    height: 50px;
    background: #e5e7ea;
    padding-left: 30px;
    font-size: 30px;
    padding-top: 3px;
    font-weight: bold;
    color: #33363a;
    border: 2px solid #a1a2a3;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
    
</style>