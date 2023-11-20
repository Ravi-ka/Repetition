// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  const {title, description, image} = req.body;
  let errors=[];
  let success=[];
  const titleChars = Array.from(title);
  const titleDesc = Array.from(description);

  if(!title){
    errors.push('The title field should not be empty')
  }
  if(titleChars.length < 3){
    errors.push('The title filed should contain at least 3 characters')
  }

  if(!description){
    errors.push('The description field should not be empty')
  }
  if(titleDesc.length < 10){
    errors.push('The description filed should contain at least 10 characters')
  }
  
  try {
      const validUrl = new URL(image);
  } catch (error) {
    errors.push('The image URL provided should be a valid URL')
  }
 if(errors.length > 0){
    res.render('addBlog',{errors:errors,success:false})
 }else{
    success.push('Validation successful!')
 }
 
  //console.log(req.body)

  res.status(201).render("addBlog", { errors: null, success: true });
};
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
