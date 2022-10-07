<script setup>
    import { ref } from 'vue'
    const drawer = ref(false)
</script>
<template>
    <div>
        <q-layout view="lHr Lpr fFf">
        <q-drawer
          v-model="drawer"
          show-if-above
          :width="200"
          :breakpoint="400"
        >
          <q-scroll-area class="q-scroll-area">
            <q-list padding>
              <q-item clickable v-ripple :to="{ name: 'vacancies' }" active-class="active-class" exact>
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>
                <q-item-section>
                    vacancies
                </q-item-section>
              </q-item>
  
              <q-item  clickable v-ripple active-class="active-class" exact>
                <q-item-section avatar>
                  <q-icon name="star" />
                </q-item-section>
  
                <q-item-section>
                  Star
                </q-item-section>
              </q-item>
  
              <q-item clickable v-ripple active-class="active-class" exact>
                <q-item-section avatar>
                  <q-icon name="send" />
                </q-item-section>
  
                <q-item-section>
                  Send
                </q-item-section>
              </q-item>
  
              <q-item clickable v-ripple active-class="active-class" exact>
                <q-item-section avatar>
                  <q-icon name="drafts" />
                </q-item-section>
  
                <q-item-section>
                  Drafts
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
  
          <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
            <div class="absolute-bottom  bg-transparent">
              <q-avatar size="56px" class="q-mb-sm">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              <div class="text-weight-bold">Razvan Stoenescu</div>
              <div>@rstoenescu</div>
            </div>
          </q-img>
        </q-drawer>
  
        <q-page-container>
            <!-- <button @click="drawer = !drawer">{{drawer?'close':'open'}}</button> -->
            <!-- <q-btn color="primary" icon="arrow" :label="drawer?'close':'open'" @click="drawer = !drawer" /> -->
          <q-page>
            <RouterView/>
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
  </template>
  

<style scoped>
    .q-layout-container{
        height: 100vh;
    }
    .q-scroll-area{
        height: calc(100% - 150px);
        margin-top: 150px;
        border-right: 1px solid #ddd;
    }
    .active-class{
        color:white;
        background-color: blue;
    }
</style>