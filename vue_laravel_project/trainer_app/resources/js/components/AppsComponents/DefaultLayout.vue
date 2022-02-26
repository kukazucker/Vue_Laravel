<template>
    <header class="header">
        <div class="auth">
            <div>
                <IdentificationIcon class="logo"/>
            </div>
            <div>
                <h1>Trainer</h1>
            </div>
        </div>
            <router-link :to="{ name: 'Dashboard' }">
                <a href="#" class="color_icon">
                    <HomeIcon class="nav_icon"/>
                    <Button value="Dashboard" style_btn="menu_button"/>
                </a>
            </router-link>
            <router-link :to="{ name: 'Calendar' }">
                <a href="#" class="color_icon">
                    <CalendarIcon class="nav_icon"/>
                    <Button value="Trainings" style_btn="menu_button"/>
                </a>
            </router-link>
            <router-link :to="{ name: 'Users' }">
            <a href="#" class="color_icon">
                <UserGroupIcon class="nav_icon"/>
                <Button value="Users" style_btn="menu_button"/>
            </a>
            </router-link>
            <router-link :to="{ name: 'Announcements' }">
            <a href="#" class="color_icon">
                <SpeakerphoneIcon class="nav_icon"/>
                <Button value="Announcements" style_btn="menu_button"/>
            </a>
            </router-link>
        <div class="header_bottom">
            <img class="photo" src="../assets/maxresdefault.jpg"/> 
            <div style="margin:20px">
                <span>Kuka Zucker</span><br>
                <span class="text"><a href="#">Log Out</a></span>  
            </div>
        </div>
    </header>
    <div class="menu">
      <router-view></router-view>
    </div>
</template>
<script>
import { HomeIcon, CalendarIcon, UserGroupIcon, InboxIcon, SpeakerphoneIcon, IdentificationIcon } from '@heroicons/vue/outline'
import Button from '../AppsComponents/Button.vue';

export default {
  components: { HomeIcon, CalendarIcon, InboxIcon, UserGroupIcon, SpeakerphoneIcon, IdentificationIcon, Button },

  methods: {
      changeColor() {
          const element = document.getElementById('color_icon');

          element.style.background = "#4b5563";
          document.body.background = "#4b5563";

        }
    }
}

</script>

<style>
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        color: black;
    }

    a {
        text-decoration: none;
    }

    .text {
        color: #4b5563;
    }

    .auth {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 15px;
        margin-bottom: 20px;
    }

    .picture {
        width: 25px;
        height: 25px;
        margin-right: 5px;
        color: #4b5563;
    }

    .nav_icon {
        width: 30px;
        height: 30px;
        margin-left: 12px;
        margin-top: 7px;
        color: #4b5563;
        position: absolute;
        z-index: 1;
    }

    .components {
        border: 8px solid #e5e7ea;
        border-radius: 15px;
        margin-top: 30px;
    }

    .menu {
        margin-left: 360px;
        margin-bottom: 60px;
    }

    .header {
        top: 0;
        width: 300px;
        height: 100%;
        position: fixed;
        background: #f3f4f6;
        min-height: 100%;
        border: 2px solid #e5e7ea;
    }

    .photo {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        object-fit: cover;
    }

    .header_bottom {
        position: relative;
        bottom: -10px;
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: right;
        align-items: center;
        padding: 20px;
        border-top: inherit;
        position: absolute;
    }

    .logo {
        position: relative;
        top: 2px;
        width: 40px;
        height: 40px;
    }

    .persons {
        width: 95%;
        height: 300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

.color_icon:hover .nav_icon{
    background: #4b5563;
    color: white;
}
.color_icon:hover button{
    background: #4b5563;
    color: white;
}

</style>