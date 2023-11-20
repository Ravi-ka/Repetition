import { blogs } from "../models/blog.model.js";

export const renderBlogs = (req, res) => {
  res.render('blogs',({blogs}))
};
export const renderBlogForm = (req, res) => {
  return res.render('addBlogForm')
};
export const addBlog = (req, res) => {
  console.log(req.body)
  const newBlog = req.body;
  blogs.push(newBlog);
  return res.status(201).render('blogs',{blogs})
};
