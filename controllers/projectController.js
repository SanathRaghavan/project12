
const projects = require("../modal/projectModel");


exports.addProjectController = async(req,res)=>{
   console.log('inside addProjectController');

   const userId = req.payload

   console.log(userId);
 

   const {title , language , github , website , overview} = req.body
   console.log(title , language , github , website , overview);

   const projectimage = req.file.filename
   console.log(projectimage);

   try{
     const existingProject = await projects.findOne({github})

     if(existingProject){
        res.status(406).json('project Altready exist')
     }else{
        const newProject = new projects({
          title,
          language,
          github,
          website,
          overview,
          projectImge:projectimage,
          userId
        })
        await newProject.save()
        res.status(200).json(newProject)
     }

   }catch (error){
     res.status(401).json(error)
   }
  
}

//get all priject

exports.getAllProjectController = async(req,res)=>{

  const searchKey = req.query.search
  console.log(searchKey);

  const query = {
    language:{
      //remove case sensitive
      $regex:searchKey,$options:'i'
    }
  }

  try{

    const allProject = await projects.find(query)
    res.status(200).json(allProject)
  }catch (error){
    res.status(401).json(error)
  }
}

//get home project

exports.getHomeProjectController = async(req,res)=>{
  try{
    const homeProject = await projects.find().limit(3)
    res.status(200).json(homeProject)
  }catch (error){
    res.status(401).json(error)
  }
}

//get userproject

exports.getUserProjectController = async(req,res)=>{
  const userId = req.payload

  try{
    const userproject = await projects.find({userId})
    res.status(200).json(userproject)
  }catch (error) {
    res.status(401).json(error)

  }
}

//delete project
exports.deleteUserProjectController = async(req,res)=>{
   const {id} = req.params

   try{
    const item = await projects.findByIdAndDelete ({_id:id})
    res.status(200).json('delete successfully')
   }catch (error){
    res.status(401).json(error)
   }
}

//edit project controller
exports.editUserProjectController = async(req,res)=>{
     const {title , language , github , website , overview , projectImg} = req.body
     console.log(title , language , github , website , overview , projectImg);
     
      const projectimage =  req.file?req.file.filename:projectImg
      console.log(projectimage);


      const {id} = req.params
      console.log(id)
      const userId = req.payload
      console.log(userId);
      

      try{
        const existingProject = await projects.findByIdAndUpdate({_id:id},{
          title,
          language,
          github,
          website,
          overview,
          projectImge:projectimage,
          userId
        },{new:true})
        await existingProject.save()
        res.status(200).json(existingProject)
      }catch (error){
        res.status(401).json(error)
      }
}

