<script setup>

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
        <div class="header">
            <div class="menu-circle"></div>
            <div class="header-menu">
                <a class="menu-link is-active" href="#">Toutes les contacts</a>
            </div>
            <div class="search-bar">
                <input type="text" placeholder="Rechercher ...">
            </div>
            <div class="header-profile">
                <div class="notification">
                    <span class="notification-number">3</span>
                    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                    </svg>
                </div>
                <svg viewBox="0 0 512 512" fill="currentColor">
                    <path d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z" />
                </svg>
                <img class="profile-img" src="/img/user.png" alt="user">
            </div>
        </div>
        <div class="wrapper">
            <div class="left-side">
                <div class="side-wrapper">
                    <div class="side-menu">
                        <a href="#">
                            <svg viewBox="0 0 512 512">
                                <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0" data-original="#bfc9d1" />
                                </g>
                                <path xmlns="http://www.w3.org/2000/svg" d="M192 192h128v128H192zm0 0" fill="currentColor" data-original="#82b1ff" />
                                <path xmlns="http://www.w3.org/2000/svg" d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0" fill="currentColor" data-original="#bfc9d1" />
                            </svg>
                            Contacts
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 488.932 488.932" fill="currentColor">
                                <path d="M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z" />
                            </svg>
                            <b>Discussions</b>
                            <span class="notification-number updates">3</span>
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 512 512" fill="currentColor">
                                <path d="M352 0H64C28.704 0 0 28.704 0 64v320a16.02 16.02 0 009.216 14.496A16.232 16.232 0 0016 400c3.68 0 7.328-1.248 10.24-3.712L117.792 320H352c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64z" />
                                <path d="M464 128h-16v128c0 52.928-43.072 96-96 96H129.376L128 353.152V400c0 26.464 21.536 48 48 48h234.368l75.616 60.512A16.158 16.158 0 00496 512c2.336 0 4.704-.544 6.944-1.6A15.968 15.968 0 00512 496V176c0-26.464-21.536-48-48-48z" />
                            </svg>
                            Messages
                        </a>
                    </div>
                </div>

            </div>
            <div class="main-container">
                <div class="main-header">
                    <div class="content-section adobe-product button-wrapper">
                        <button class="content-button status-button open" style="position: absolute">
                            Messages
                        </button>

                    </div>
                    <div class="header-menu">
                        <a class="main-header-link is-active" href="#">Tous les messages</a>
                    </div>
                </div>
                <div class="content-wrapper">
                    <div class="content-wrapper-header">
                        <div class="content-wrapper-context">
                            <h3 class="img-content">
                                <svg viewBox="0 0 512 512" fill="currentColor">
                                    <path d="M0 331v112.295a14.996 14.996 0 007.559 13.023L106 512V391L0 331zM136 391v121l105-60V331zM271 331v121l105 60V391zM406 391v121l98.441-55.682A14.995 14.995 0 00512 443.296V331l-106 60zM391 241l-115.754 57.876L391 365.026l116.754-66.15zM262.709 1.583a15.006 15.006 0 00-13.418 0L140.246 57.876 256 124.026l115.754-66.151L262.709 1.583zM136 90v124.955l105 52.5V150zM121 241L4.246 298.876 121 365.026l115.754-66.15zM271 150v117.455l105-52.5V90z" />
                                </svg>
                                Application de Chat Vue Js / Feather Js
                            </h3>
                            <div class="content-text">Un projet Web Avancé réalisé en groupe par les <b>étudiants en Master 1 IFRI UAC 2023-2024</b> sous la supervision de <b>Ing. Eric ADJE</b>.</div>
                        </div>
                        <img class="content-wrapper-img" src="/img/logoifri.png" alt="Logo">
                    </div>
                    <div class="content-section">
                        <div class="content-section-title">
                            Veuillez cliquer sur le bouton du menu
                            <a href="/home" class="content-button status-button" style="background-color: var(--dropdown-bg); text-decoration: none;">Home</a>
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