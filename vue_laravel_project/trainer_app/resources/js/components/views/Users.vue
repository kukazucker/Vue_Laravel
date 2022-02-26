<template>
        <PageComponent title="Users" class_select="components main">
            <HeaderLinksUsers />
            <ListUsers>
                <DisplayUsers />
            </ListUsers>
        </PageComponent>
</template>

<script>
import ListUsers from '../AppsComponents/ListUsers.vue'
import { PlusIcon } from '@heroicons/vue/outline'
import PageComponent from '../AppsComponents/PageComponent.vue'
import HeaderLinksUsers from '../AppsComponents/HeaderLinksUsers.vue'
import DisplayUsers from '../AppsComponents/DisplayUsers.vue'

export default {

  components: { ListUsers, PlusIcon, PageComponent, HeaderLinksUsers, DisplayUsers },
}
</script>

<style>

    .big_icon {
        position: relative;
        float: right;
        min-width: 75px;
        height: 35px;
        font-size: 15px;
        color: #4b5563;
        background: inherit;
        margin-right: 15px;
        margin-top: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #4b5563;
        border-radius: 5px;
        cursor: pointer;
    }

</style>