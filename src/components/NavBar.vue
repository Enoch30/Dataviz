<template>
  <mdb-navbar color="indigo" dark>
    <mdb-navbar-brand href="https://mdbootstrap.com/">
      DataViz
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav class='pl-5'>
        <mdb-nav-item href="#" active>Dashboard</mdb-nav-item>
        <mdb-nav-item href="#">Data Editor</mdb-nav-item>
        <mdb-nav-item href="#">Smart Search</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem} from 'mdbvue';
  export default {
    name: 'NavBar',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .view {
    background: url("https://mdbootstrap.com/img/Photos/Others/img (42).jpg")no-repeat center center;
    background-size: cover;
    height: 100%;
  }

  .navbar .dropdown-menu a:hover {
    color: inherit !important;
  }
</style>
