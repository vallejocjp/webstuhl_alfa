<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    
    const showModal = ref(false)
    const usuario = ref('')
    const password = ref('')
    const isPwd = ref(true)
    
    const router = useRouter()

    const LoginMethod = () => {
      
        if (usuario.value == 'admin' && password.value == 'admin') return router.push({name: 'admin'})
    }
     
    </script>

<template>
    <div class="q-pa-md q-gutter-sm">
      <q-btn @click="showModal = true" class="q-mr-lg" color="primary"  no-caps label="Iniciar sesión"/>
  
      <q-dialog
      v-model="showModal"
      full-width
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">Iniciar sesión</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            <q-input outlined v-model="usuario" label="Usuario" />
        </q-card-section>

        <q-card-section class="q-pt-none">
            <q-input label="Contraseña" outlined v-model="password" :type="isPwd ? 'password' : 'text'">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
        </q-card-section>

        <q-card-actions align="center" class="bg-white q-mb-md">
          <q-btn label="Enviar" color="primary" @click="LoginMethod" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div>
  </template>
  
 
  