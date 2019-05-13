<template>
<div class="home-slider">
    <Swipe :auto="2000" :speed="1000">
        <SwipeItem class="slider1"><img src="../assets/images/bjd1.jpg" alt=""></SwipeItem>
        <SwipeItem class="slider2"><img src="../assets/images/bjd2.jpg" alt=""></SwipeItem>
        <SwipeItem class="slider3"><img src="../assets/images/bjd.webp" alt=""></SwipeItem>
    </Swipe>
</div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';

export default {
    components:{
        Swipe,
        SwipeItem
    }
}
</script>

<style>
@import url(../assets/css/slider.css);
</style>
