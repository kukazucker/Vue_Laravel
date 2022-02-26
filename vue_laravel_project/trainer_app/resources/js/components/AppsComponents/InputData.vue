<template>
    <div class="form_element">
        <div>
            <label class="white">{{ title + ':' }}</label>
        </div>
        <div>
            <input type="text" v-bind:value="value" class="edit_spaces" v-bind:placeholder="title"/><br>
        </div>
    </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {

    props: {

        placeholder: {

            type: String,
        }, 

        title: {

            type: String
        },

        value: {

            type: String
        }

    }
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
    
</style>