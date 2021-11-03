import HomePage from "../containers/HomePage/index";
import AddlistTitle from "../containers/AddTitle/index";
import AddTodo from "../containers/AddTodo/index";

const routes = [
    {
        name: '/',
        component: HomePage,
        title: "home page"
    },
    {
        name: "addTitle",
        component: AddlistTitle,
        title: "title"

    },
    {
        name: "addTodo",
        componemt: AddTodo,
        title: "todo"
    }
]

export default routes;