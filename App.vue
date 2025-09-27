<template>
  <header>
    <h1>Ice Cream for a Cause</h1>
    <h2>Raising Funds for Lions Club</h2>
  </header>

  <main>
    <section id="intro">
      <p>Join us for a delicious scoop of ice cream and support a great cause! All proceeds go to the Lions Club to help our community.</p>
    </section>

    <section id="flavors">
      <h3>Our Flavors</h3>
      <ul>
        <li>Vanilla</li>
        <li>Chocolate</li>
        <li>Strawberry</li>
        <li>Mint Chocolate Chip</li>
        <li>Others</li>
      </ul>
    </section>

    <section id="cta">
      <button id="donate-btn" @click="donate">Donate Now</button>
    </section>
  </main>

  <footer>
    <p>Contact us: contact@lionsclub.org</p>
  </footer>
</template>

<script>
export default {
  name: 'App',
  methods: {
    donate() {
      alert('Thank you for your donation!');
    }
  }
}
</script>

<style>
body {
  font-family: sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background: #fdf6e3; /* Cream */
  color: #586e75; /* Dark Teal */
}

header {
  background: #008080; /* Teal */
  color: #fdf6e3; /* Cream */
  padding: 1rem 0;
  text-align: center;
}

main {
  padding: 1rem;
  max-width: 800px;
  margin: auto;
}

section {
  background: #fff;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 5px;
}

#cta {
  text-align: center;
}

#donate-btn {
  background: #b58900; /* Gold */
  color: #fdf6e3; /* Cream */
  border: 0;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
}

footer {
  text-align: center;
  padding: 1rem 0;
  background: #008080; /* Teal */
  color: #fdf6e3; /* Cream */
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>