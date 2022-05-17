const app = Vue.createApp({
  data: function () {
    return {
      variants: [
        { id: 1, name: "Vanilla", price: 150 },
        { id: 2, name: "Chocolate", price: 100 },
        { id: 3, name: "Orange", price: 70 },
        { id: 4, name: "Lemon", price: 30 },
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(variantId) {
      this.cart.push(this.variants.find((variant) => variant.id === variantId));
    },
    removeFromCart(variantId) {
      let postion = this.cart.findIndex((variant) => variant.id === variantId);
      this.cart.splice(postion, 1);
    },
  },

  computed: {
    total() {
      return this.cart.reduce((t, variant) => t + variant.price, 0);
    },
  },
});
