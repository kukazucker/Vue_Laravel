<template>
    <PageComponent title="Create User:" class_select="components main">
        <div v-if="errors !== ''">
                {{ errors }}
        </div>
        <div class="edit_form">
            <form @submit.prevent="saveUser">
                <h3>Personal Data:</h3>

                <div class="edit_photo">
                    <img class="photo big" src="../assets/user_img.jpeg"/> 
                </div>

                <InputData @input="form.first_name = $event.target.value"  title="First Name" />
                <InputData @input="form.last_name = $event.target.value"  title="Last Name" />
                <InputData @input="form.email = $event.target.value"  title="Email" />
                <InputData @input="form.birth_day = $event.target.value"  title="Birthday"/>
                <InputData @input="form.phone = $event.target.value"  title="Phone" />
                <InputData @input="form.password = $event.target.value"  title="Password" />
    
                <Button value="Create User" style_btn="post_icon"/>
            </form>
        </div>
    </PageComponent> 
</template>
         

<script>
import { reactive } from 'vue';
import useUsers from '../hooks/useUsers'
import InputData from '../AppsComponents/InputData.vue';
import Button from '../AppsComponents/Button.vue';
import AreaCheckboxes from '../AppsComponents/AreaCheckboxes.vue';
import PageComponent from '../AppsComponents/PageComponent.vue';

export default {
  components: { InputData, Button, AreaCheckboxes, PageComponent },

    setup() {

        const form = reactive({

                "first_name": "",
                "last_name": "",
                "email": "",
                "birth_day": "",
                "phone": "",
                "password": "",
        })

        const { errors, storeUser } = useUsers();

        const saveUser = async () => {

            await storeUser({...form});
        }

        return {
                form,
                errors,
                saveUser
        }
    }
    
}

</script>
<style>

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

