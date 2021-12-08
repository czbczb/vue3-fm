<template>
    <div class="layout">
        <aside class="layout-side">
            <div>logo</div>
            <div>menu</div>
        </aside>
        <section class="layout-section">
            <header>header</header>
            <main>
                <router-view></router-view>
            </main>
            <footer>footer</footer>
        </section>
    </div>
</template>

<script setup>

</script>

<style scoped>
.layout{
    display: flex;
    height: 100vh;
    justify-content: start;
}
.layout-side{
    width: 200px;
    border: 1px solid #ccc;
}
.layout-section {
    flex: 1;
}
</style>
