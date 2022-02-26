<template>
    <PageComponent title="Add User:">  

        <div v-if="errors !== ''">
                {{ errors }}
        </div>

        <div class="edit_form">
            <form @submit.prevent="saveGroup">
            <h3>Personal Data:</h3>

            <div class="edit_photo">
                <img class="photo big" src="../assets/user_img.jpeg"/> 
            </div>

            <InputData @input="form.user_id = $event.target.value"  title="User ID" />

            <br><h3>Group Editor:</h3>

            <AreaCheckboxes>
                <SelectIcon @change="form.group = $event.target.value" group_id='1A' type_select="radio" name="group" :check="group_in_props"/>
                <SelectIcon @change="form.group = $event.target.value" group_id='1B' type_select="radio" name="group" :check="group_in_props"/>
                <SelectIcon @change="form.group = $event.target.value" group_id='1C' type_select="radio" name="group" :check="group_in_props"/>
                <SelectIcon @change="form.group = $event.target.value" group_id='2A' type_select="radio" name="group" :check="group_in_props"/>
                <SelectIcon @change="form.group = $event.target.value" group_id='2B' type_select="radio" name="group" :check="group_in_props"/>
                <SelectIcon @change="form.group = $event.target.value" group_id='2C' type_select="radio" name="group" :check="group_in_props"/> 
                <SelectIcon @change="form.group = $event.target.value" group_id='3A' type_select="radio" name="group" :check="group_in_props"/>
                <SelectIcon @change="form.group = $event.target.value" group_id='3B' type_select="radio" name="group" :check="group_in_props"/>
                <SelectIcon @change="form.group = $event.target.value" group_id='3C' type_select="radio" name="group" :check="group_in_props"/>
            </AreaCheckboxes>

            <InputData @input="form.user_level = $event.target.value"  title="Level" />
            <InputData @input="form.invlaid = $event.target.value"  title="Disability&#42;" />
            <InputData @input="form.invlaid = $event.target.value"  title="Accompanied&#42;" />  
            <SelectCheckbox @change="form.missing = $event.target.value" title="Missing" bind="missing"/>

            <Button value="Upload Data" style_btn="post_icon"/>

            </form>
        </div>
    </PageComponent>
</template>
         

<script>
import { reactive } from 'vue';
import useParameters from '../hooks/useParameters'
import SelectIcon from '../AppsComponents/SelectIcon.vue';
import SelectCheckbox from '../AppsComponents/SelectCheck.vue';
import Button from '../AppsComponents/Button.vue';
import AreaCheckboxes from '../AppsComponents/AreaCheckboxes.vue';
import InputData from '../AppsComponents/InputData.vue';
import PageComponent from '../AppsComponents/PageComponent.vue';

export default {

    components: { SelectIcon, Button, InputData,  AreaCheckboxes, SelectCheckbox, PageComponent },

    props: {

        group: {
            type: String,
        }
    },

    setup(props) {

        const group_in_props = props.group;

        const form = reactive({

                "user_id": "",
                "group": group_in_props,
                "user_level": "",
                "invalid": "",
                "accompanied": "",
                "missing": "",
        });

        const { errors, storeGroup } = useParameters();


            const saveGroup = async () => {

                await storeGroup({...form}, group_in_props);
            }


        return {
            form,
            errors,
            group_in_props,
            saveGroup
        }
    },
    data() {
        return {
      checked: ''
    }},
};

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

.edit_photo {
    position: absolute;
    top: 2%;
    left: -50%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #e5e7ea;
    object-fit: cover;
}

.edit_spaces {

    height: 40px;
    width: 300px;
    font-size: 15px;
    margin: 15px;
    background: #e5e7ea;
    padding-left: 10px;
}

/* .edit_spaces:focus {
    border: 2px solid black;
} */

.edit_check {

    height: 40px;
    width: 7px;
    font-size: 15px;
    margin: 15px;
}

.white {

    margin-left: 10px;
    margin-right: 10px;
}

.photo.big {

    width: 100%;
    height: 100%;
    object-fit: cover;

}

.form_element {
    position: relative;
    border: 5px solid #e5e7ea; 
    border-radius: 12px;
    display:flex; 
    justify-content:space-between; 
    align-items:center; 
    margin-top:10px   
}

.container_yt {
    position: relative;
    display: flex;
    flex-wrap: wrap;

}

.group_yt {
    position: relative;
    min-width: 32px;
    height: 32px;
    margin: 15px;
}

.post_btn {
    position: relative;
    border: 5px solid #e5e7ea; 
    border-radius: 12px;
    display:flex; 
    float: right;
    align-items:center; 
    margin-top:10px  

}

.header_elements {

    display: flex;
    justify-content: flex-start;
    justify-items: center;
}
</style>

