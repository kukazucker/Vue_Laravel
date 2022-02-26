<template>
  <button type="submit" v-bind:class="style_btn">{{ value }}</button>
</template>
<script>
export default {
    props: {

        value: String,
        style_btn: String,

    }
 
}
</script>
<style>

.small_icon {
    position: relative;
    float: right;
    min-width: 75px;
    height: 35px;
    font-size: 15px;
    color: #4b5563;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #4b5563;
    border-radius: 5px;
    cursor: pointer;
}

.post_icon {
    position: relative;
    float: right;
    min-width: 105px;
    height: 45px;
    font-size: 20px;
    color: #4b5563;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #4b5563;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 8px;
    padding: 4px;
}

.menu_button {

    font-size: 20px;
    display: flex;
    background-color: #f3f4f6;
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

button:hover {
    
    background: #4b5563;
    color: white;
}
 
</style>