<template>
  <div class="mi-boton-container">
    <button @click="handleClick" class="btn-estilizado">
      ¡Haz clic aquí!
    </button>
  </div>
</template>

<script setup>
const handleClick = () => {
  alert('¡Hola! Has hecho clic en el componente personalizado.');
};
</script>

<style scoped>
.mi-boton-container {
  margin: 20px 0;
}
.btn-estilizado {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}
.btn-estilizado:hover {
  background-color: #35495e;
}
</style>