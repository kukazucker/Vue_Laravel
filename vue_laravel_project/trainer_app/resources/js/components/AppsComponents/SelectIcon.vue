<template>
   <div class="group_yt">
        <input v-bind:type="type_select" v-bind:id="group_id" v-bind:name="name" v-bind:value="group_id" v-bind:checked="checked" v-bind:disabled="is_disabled" />
        <label class="label_yt" v-bind:for="group_id">{{ group_id }}</label>
    </div>
</template>
<script>
export default {
    props: { 

        group_id: String, 
        type_select: String,
        bind: String,
        name: String,
        check: String,
        is_disabled: String
    },

    setup(props) {

        let checked;

        if( props.group_id == props.check ) {
            checked = 'checked'
        }

        return {
            checked
        }
    }
    
}
</script>
<style>

input[type="checkbox"],
input[type="radio"]   {

    display: none;
}

.label_yt {
    position: relative;
    cursor: pointer;
    background-color: #e5e7ea;
    color: black;
    background-position: center;
    background-size: contain;
    width: 32px;
    height: 32px;
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}


input[type="checkbox"]:checked + .label_yt {
    
    background: #4b5563;
    color: white;
}

input[type="radio"]:checked + .label_yt {
    
    background: #4b5563;
    color: white;
}

input[type="radio"]:hover + .label_yt {

    background: #4b5563;
    color: white;

}

.label_yt::after {

    border: 2px solid #4b5563;
    width: 29px;
    height: 29px;
    position: absolute;
    border-radius: 50%;
}


.menu_button {

    font-size: 20px;
    display: flex;
    background-color: #e5e7ea;
    padding: 10px;
    margin: 5px;
    padding-left: 40px;
    height: 45px;
    width: 96%;
    border-radius: 6px;
    position: relative;
    margin-right: 50px;
    cursor: pointer;
    color: #4b5563;
    border: none;
}

</style>