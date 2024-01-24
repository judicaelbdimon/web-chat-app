<script setup>

import { useRouter } from 'vue-router';

const router = useRouter()

const goTemplate = () => {
    router.push({name:'template'})
}
</script>

<template>

<html lang="fr" >

<head>
	<meta charset="UTF-8">
	<title>TP Web Avancé Master 1 IFRI réalisé en groupe</title>
	<link rel="stylesheet" href="/css/normalize.min.css">
	<link rel="stylesheet" href="/css/style.css">
</head>
<body>

    <div class="video-bg">
        <video width="320" height="240" autoplay loop muted>
            <source src="/video/mac.mp4" type="video/mp4">
            Votre navigateur ne prend pas en charge la balise video.
        </video>
    </div>
    <div class="dark-light">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
    </div>
    <div class="app">
        
        <div class="wrapper">
            
            <div class="main-container">
                
                <div class="content-wrapper">
                    <div class="content-wrapper-header">
                        <div class="content-wrapper-context">
                            <h3 class="img-content">
                                <svg viewBox="0 0 512 512" fill="currentColor">
                                    <path d="M0 331v112.295a14.996 14.996 0 007.559 13.023L106 512V391L0 331zM136 391v121l105-60V331zM271 331v121l105 60V391zM406 391v121l98.441-55.682A14.995 14.995 0 00512 443.296V331l-106 60zM391 241l-115.754 57.876L391 365.026l116.754-66.15zM262.709 1.583a15.006 15.006 0 00-13.418 0L140.246 57.876 256 124.026l115.754-66.151L262.709 1.583zM136 90v124.955l105 52.5V150zM121 241L4.246 298.876 121 365.026l115.754-66.15zM271 150v117.455l105-52.5V90z" />
                                </svg>
                               Bienvenue sur notre Application de Chat Vue Js / Feather Js
                            </h3>
                            <div class="content-text">Un projet Web Avancé réalisé en groupe par les <b>étudiants en Master 1 IFRI UAC 2023-2024</b> sous la supervision de <b>Ing. Eric ADJE</b>.</div>
                        </div>
                        <img class="content-wrapper-img" src="/img/logoifri.png" alt="Logo">
                    </div>
                    <div class="content-section">
                        <div class="content-section-title">
                            Pour commencer, veuillez sélectionner un template
                        </div>
                        <div class="apps-card">
                            <div class="app-card" @click="goTemplate">
                                <span>
                                    Classic
                                </span>
                            </div>
                            <div class="app-card" @click="goTemplate">
                                <span>
                                    Economie de Données
                                </span>
                            </div>
                            <div class="app-card" @click="goTemplate">
                                <span>
                                    Ultra Economie de Données 
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="overlay-app"></div>
    </div>
    
    <!-- partial -->
    <!-- <script src='/js/jquery.min.js'></script> -->
    <!-- <script  src="/js/script.js"></script> -->

</body>
</html>

</template>

<style scoped>

</style>