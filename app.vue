<template>
    <div class="app">
        <header class="app-header">
            <div class="logo-container">
                <img class="logo" src="./assets/logo.png" alt="logo">
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { getProducts } from '@/api/index';
import { onMounted } from 'vue';


onMounted(async () => {
    try {
        const response = await getProducts(2);
        console.log(response);

    } catch (err) {
        console.error(err);
    }
});

</script>

<style lang="scss">
.app {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.app-header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    background: $gradient;
}
.logo-container {
    height: 90%;
    width: 200px;
    margin-left: 2rem;
}
.logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
