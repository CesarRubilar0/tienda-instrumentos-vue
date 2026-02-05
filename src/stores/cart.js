import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  // 1. EL ESTADO: Aquí se guardan los datos
  state: () => ({
    items: [], // Aquí irán los instrumentos que el usuario agregue
  }),

  // 2. GETTERS: Cálculos automáticos (como el total)
  getters: {
    totalPagar: (state) => {
      return state.items.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
    },
    cantidadArticulos: (state) => {
      return state.items.reduce((total, producto) => total + producto.cantidad, 0)
    },
  },

  // 3. ACCIONES: Funciones para cambiar los datos
  actions: {
    agregarAlCarrito(instrumento) {
      const existe = this.items.find((item) => item.id === instrumento.id)

      if (existe) {
        existe.cantidad++
      } else {
        this.items.push({ ...instrumento, cantidad: 1 })
      }
    },
    eliminarDelCarrito(id) {
      this.items = this.items.filter((item) => item.id !== id)
    },
    limpiarCarrito() {
      this.items = []
    },
  },
})
