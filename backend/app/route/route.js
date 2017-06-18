import db from "../views/dbView/db.vue";
import home from "../views/layout/home.vue";

export default [
    {
        path: "/db",
        component: db
    },
    {
        path: "/",
        component: home
    }
]