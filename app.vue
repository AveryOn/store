<template>
    <div class="app">
        Hello
    </div>
</template>

<script setup lang="ts">
import { getDataAmazon } from '@/api/index';
import { onMounted } from 'vue';


onMounted(async () => {
    try {
        const response = await getDataAmazon();
        console.log(response);
        
    } catch (err) {
        console.error(err);
    }
});

</script>

<style lang="scss">
.app {
    color: $base-color;
}
</style>
