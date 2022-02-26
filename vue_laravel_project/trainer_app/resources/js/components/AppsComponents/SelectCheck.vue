<template>
    <div class="form_element">
        <td>
            <label for="phone" class="white">Missing:&#42;</label>
        </td>
        <td>
            <div class="group_checkbox">
                <div class="group_yt">
                    <input type="checkbox" v-bind:id="bind" :value="check" v-model="check" true-value="1" false-value="0"/>
                    <label class="label" v-bind:for="bind">&#10003;</label>
                </div>
            </div>
        </td>
    </div>
</template>

<script>
import SelectIcon from './SelectIcon.vue';

export default {

    components: { SelectIcon },

    props: {

        title: {

            type: String
        },

        bind: {

            type: String
        }, 

        checked_item: {

            type: String
        }

    },

    setup(props) {

        let checked;

        if( props.checked_item == 1 ) {
            checked = 'checked';
            alert("asdf")
            
        }

        return {
            checked
        }
    },

    data() {
        return {
      check: 0
    }},
}
</script>

<style>

.edit_form {    
    
    position: relative;
    width: 60%;
    margin: 20px;
    color: inherit;
    font-size: 20px;
    display: flex;
    margin-left: 37%;
}

.label {
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

input[type="checkbox"]:hover + .label {
    
    background: #4b5563;
    color: white;
}

input[type="checkbox"]:checked + .label {
    
    background: #4b5563;
    color: white;
}
    
</style>