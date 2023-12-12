// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  console.log(req.body);
  const { title, description, image } = req.body;
  let errors = [];
  if (!title || title.trim() == "") {
    errors.push("The title field should not be empty");
  }
  if (title.length <= 3) {
    errors.push("The title field should contain at least 3 characters");
  }
  if (!description || description.trim() == "") {
    errors.push("The description field should not be empty");
  }
  if (description.length <= 10) {
    errors.push("The description field should contain at least 10 characters");
  }
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  if (!urlRegex.test(image)) {
    errors.push("The image URL provided should be a valid URL");
  }
  //console.log(validUrl);
  if (errors.length >= 1) {
    return res.render("addBlog", { errors: errors, success: false });
  }
  console.log(errors);
  res.status(201).render("addBlog", { errors: null, success: true });
};
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
