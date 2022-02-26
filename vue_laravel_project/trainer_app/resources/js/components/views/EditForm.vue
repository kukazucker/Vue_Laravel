<template>
    <PageComponent title="Edit User" class_select="components main">
        <div class="edit_form">
            <form @submit.prevent="saveUser">

            <h3>Personal Data:</h3>

            <div class="edit_photo">
                <img class="photo big" src="../assets/user_img.jpeg"/> 
            </div>

            <InputData @input="user.first_name = $event.target.value" :value="user.first_name" title="First Name" />
            <InputData @input="user.last_name = $event.target.value" :value="user.last_name" title="Last Name" />
            <InputData @input="user.email = $event.target.value" :value="user.email" title="Email" />
            <InputData @input="user.phone = $event.target.value" :value="user.phone" title="Phone" />
            <InputData @input="user.birth_day = $event.target.value" :value="user.birth_day" title="Birthday" />

            <div v-if="user_param != ''">
                <br><h3>Group Editor:</h3>
                <div v-for="note in user_param" :key="note.id">
                    <area-checkboxes>
                        <SelectIcon @change="note.group = $event.target.value" group_id='1A' type_select="checkbox" :check="note.group" is_disabled="true" />
                        <SelectIcon @change="note.group = $event.target.value" group_id='1B' type_select="checkbox" :check="note.group" is_disabled="true" />
                        <SelectIcon @change="note.group = $event.target.value" group_id='1C' type_select="checkbox" :check="note.group" is_disabled="true" />
                        <SelectIcon @change="note.group = $event.target.value" group_id='2A' type_select="checkbox" :check="note.group" is_disabled="true" />
                        <SelectIcon @change="note.group = $event.target.value" group_id='2B' type_select="checkbox" :check="note.group" is_disabled="true" />
                        <SelectIcon @change="note.group = $event.target.value" group_id='2C' type_select="checkbox" :check="note.group" is_disabled="true" /> 
                        <SelectIcon @change="note.group = $event.target.value" group_id='3A' type_select="checkbox" :check="note.group" is_disabled="true" />
                        <SelectIcon @change="note.group = $event.target.value" group_id='3B' type_select="checkbox" :check="note.group" is_disabled="true" />
                        <SelectIcon @change="note.group = $event.target.value" group_id='3C' type_select="checkbox" :check="note.group" is_disabled="true" />
                    </area-checkboxes>       
                </div>
            </div>
            
            <Button value="Update Data" style_btn="post_icon"/>
            </form>
        </div>
    </PageComponent>                                                                               
</template>
<script>
import { onMounted } from 'vue';
import useUsers from '../hooks/useUsers'
import useParameters from '../hooks/useParameters'
import SelectIcon from '../AppsComponents/SelectIcon.vue';
import Button from '../AppsComponents/Button.vue';
import InputData from '../AppsComponents/InputData.vue';
import AreaCheckboxes from '../AppsComponents/AreaCheckboxes.vue';
import SelectCheckbox from '../AppsComponents/SelectCheck.vue';
import PageComponent from '../AppsComponents/PageComponent.vue';

export default {
  components: { SelectIcon, Button, InputData, SelectCheckbox, AreaCheckboxes, PageComponent },

    props: {
        id: {
            required: true,
            type: String,
        }
    },

    setup(props) {

        const { user, getUser, updateUser } = useUsers();
        onMounted( getUser( props.id ) );

        const { user_param, getUserGroup } = useParameters();
        onMounted( getUserGroup( props.id ) );

        const saveUser = async () => {
            await updateUser(props.id);
        }

        return {
            user,
            user_param,
            saveUser,
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