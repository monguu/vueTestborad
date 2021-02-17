<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark" >
      <b-navbar-brand to="/">MonguuCording</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">공지사항</b-nav-item>
          <b-nav-item  to="/borad/open">공개게시판</b-nav-item>
          <b-nav-item href="#" >광고</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped>
</style>