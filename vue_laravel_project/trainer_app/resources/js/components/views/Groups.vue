<template>
    <PageComponent title="Schedule" class_select="components main"> 
            <HeaderLinksGroup />
        <div class="groups">
            <h1 class="header_groups">{{'Group' + ' ' + group_sel}}</h1>
            <div class="groups_selector">
                <router-link  :to="{ name: 'Dashboard' }"><SelectIcon group_id="&#10094;" bind="arrow" type_select="radio" name="group"/></router-link>
            </div>
        </div>
        
       <ListGroup :group="group_sel">
            <DisplayGroups />
       </ListGroup>
       
    </PageComponent>
</template>

<script>
import ListGroup from '../AppsComponents/ListGroup.vue'
import ListPersonal from '../AppsComponents/ListPersonal.vue'
import SelectIcon from '../AppsComponents/SelectIcon.vue'
import PageComponent from '../AppsComponents/PageComponent.vue'
import HeaderLinksGroup from '../AppsComponents/HeaderLinksGroup.vue'
import DisplayGroups from '../AppsComponents/DisplayGroups.vue'


export default {
  components: { ListGroup, ListPersonal, SelectIcon, PageComponent, HeaderLinksGroup, DisplayGroups },

    props: {
        group: {
            type:String,
        }
    },

    setup(props) {

        let group_sel = props.group;

        return {
            group_sel,
        };
    },
    
}
</script>

<style>

    .components.personal {
        position: relative;
        margin-top: 40px;
        width: 49%;
        min-height:280px;
        top: 10px;
    }

</style>