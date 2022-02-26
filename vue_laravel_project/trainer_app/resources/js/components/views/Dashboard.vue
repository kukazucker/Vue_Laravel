<template>
    <PageComponent title="Schedule" class_select="components main"> 
        <DisplayGroups title="Groups">
            <router-link  :to="{ name: 'Groups', params: { group: '1A' } }">
                <SelectIcon group_id="1A" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'Groups', params: { group: '1B' } }">
                <SelectIcon group_id="1B" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'Groups', params: { group: '1C' } }">
                <SelectIcon group_id="1C" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'Groups', params: { group: '2A' } }">
                <SelectIcon group_id="2A" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'Groups', params: { group: '2B' } }">
                <SelectIcon group_id="2B" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'Groups', params: { group: '2C' } }">
                <SelectIcon group_id="2C" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'Groups', params: { group: '3A' } }">
                <SelectIcon group_id="3A" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'Groups', params: { group: '3B' } }">
                <SelectIcon group_id="3B" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'Groups', params: { group: '3C' } }">
                <SelectIcon group_id="3C" type_select="radio" />
            </router-link>
        </DisplayGroups>
       <div class="text_select"><h3>Select the group above</h3></div>
    </PageComponent>

    <PageComponent title="Personal" class_select="components schedule">
        <list-personal></list-personal>
    </PageComponent>

</template>

<script>
import DisplayGroups from '../AppsComponents/DisplayGroups.vue'
import ListGroup from '../AppsComponents/ListGroup.vue'
import ListPersonal from '../AppsComponents/ListPersonal.vue'
import PageComponent from '../AppsComponents/PageComponent.vue'
import SelectIcon from '../AppsComponents/SelectIcon.vue'


export default {
  components: { ListGroup, ListPersonal, SelectIcon, PageComponent, DisplayGroups },

    props: {
        group: {
            type:String,
        }
    },  
}
</script>

<style>

.text_select {

    position: relative;
    left: 40%;
    width: 400px;
    height: 40px;
    margin: 30px;
}

</style>