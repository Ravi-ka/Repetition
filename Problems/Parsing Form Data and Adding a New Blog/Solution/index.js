import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";

import { renderBlogForm,addBlog,renderBlogs } from "./src/controllers/blog.controller.js";

const app = express();
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);

app.get('/',renderBlogs)
app.get('/createblog',renderBlogForm)
app.post('/addblog',addBlog)

export default app;
