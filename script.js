const RootComponent = {
  data() {
    return {
      name: "",
      card: "",
      cvc: "",
      expiryDate: "",
      Showbutton: "Green",
      hasBeenSubmitted: false,
    };
  },

  methods: {
    doSubmit() {
      this.hasBeenSubmitted = true;
    },
  },

  computed: {
    cardValidity() {
      if (this.card.length === 16) {
        return "Green";
      }
      return "Red";
    },

    cvcValidity() {
      if (this.cvc.length === 3) {
        return "Green";
      }
      return "Red";
    },

    cardExpiryDate() {
      const now = new Date();
      const expDate = new Date(this.expiryDate);
      if (expDate > now) {
        return "Green";
      }
      return "Red";
    },
  },

  template: `
  <div> 
<div class="container">
  <h1> Payment Form </h1><br/>
  <form v-if="!hasBeenSubmitted" @submit.prevent="doSubmit" >

    <label for="name">Full Name </label>
    <input type="text" v-model="name" id=name @Keyup.alt.enter="name = 'Inaam Hojeij'" />

    <br><br><label for="card">Card Number </label>
    <input type="text" v-model="card" id=card :class="cardValidity" @Keyup.alt.enter="card = '1234567891234567'" />

    <br><br><label for="cvc">CVC </label>
    <input type="text" v-model="cvc" id=cvc :class="cvcValidity" @Keyup.alt.enter="cvc = '123'" />

    <br><br><label for="expiryDate">Expiry date </label>
    <input type="date" v-model="expiryDate" id=expiryDate :class="cardExpiryDate" @Keyup.alt.enter="expiryDate = '2025-04-03'"/>

    <div v-if= "cardValidity == 'Green' && cvcValidity == 'Green' && cardExpiryDate =='Green'" >
    <button v-show="Showbutton"> Submit form  </button>
    </div>
  </form>
  <div v-else>
    <p>Drop da money bruh!</p>
  </div>
  </div>
  </div>
  `,
};
Vue.createApp(RootComponent).mount("#root");
