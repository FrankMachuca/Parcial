<template>
    <main>
        <div style="margin-bottom:10px">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="/images/pepeHappy2.jpg" width="75" height="75"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link exact-active-class="active" to="/" class="nav-link active" aria-current="page">Inicio</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link exact-active-class="active" to="/monedas" class="nav-link">Monedas</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link exact-active-class="active" to="/paises" class="nav-link">Paises</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link exact-active-class="active" to="/paises-monedas" class="nav-link">Paises y sus Monedas</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </main>
</template>
