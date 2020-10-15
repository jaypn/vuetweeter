import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignUp.vue";
import LoginPage from "../views/Login.vue";
import HomePage from "../views/home.vue";
import ProfilePage from "../views/profile.vue";
import DiscoverPage from "../views/discover.vue"
import LogoutPage from "../views/logout.vue"



Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup-page",
    component: SignupPage,
    
  },
  {
    path: "/",
    name: "login-page",
    component: LoginPage,
    
  },
  {
    path: "/home",
    name: "home-page",
    component: HomePage,
    
  },
  {
    path: "/profile",
    name: "profile-page",
    component: ProfilePage,
    
  },
  {
    path: "/discover",
    name: "discover-page",
    component: DiscoverPage,
    
  },
  {
    path: "/logout",
    name: "logout-page",
    component: LogoutPage,
    
  },
  
  
  
  
  

  

];

const router = new VueRouter({
  routes
});

export default router;