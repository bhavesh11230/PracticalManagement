import PracticalModel from "../model/Practical.js"


export const createPractical = async (req, res) => 
{
  const { subjectId, title, description, createdBy } = req.body;

  try {
    const practicalobj = new PracticalModel({
      subjectId,
      title,
      description,
      createdBy,
    });
    const savedpracticalObj = await practicalobj.save();
      console.log(savedpracticalObj);
      res.json({
        savedpracticalObj,
        message: "Subject created successfully"
      });
  
    } catch (error) {
        console.log(error);
        
      res.json({
        error: "Error occured",
      });
  
    }
  };


  export const getAllPractical = async (req, res) => {
    try {
      const getpractical = await PracticalModel.find();
      res.status(200).json({
        success: true,
        data: getpractical,
      });
    } catch (error) {
      console.error('Error fetching practical data:', error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch practical data",
        error: error.message,
      });
    }
  };