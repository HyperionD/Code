import bar from "../component/bar.vue";
import foo from "../component/foo.vue";
import notfound from "../component/notfound.vue";
import home from "../component/home.vue";

export default [
    {
        path: "/",
        component: home,
        children: [
            {
                path: "/foo",
                component: foo
            },
            {
                path: "/bar",
                component: bar
            },
        ]
    },    
    {
        path: "*",
        component: notfound
    }
];
