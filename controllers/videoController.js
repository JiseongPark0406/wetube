import Video from "../models/video";

export const main = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "home", videos });
};
export const watch = async (req, res) => {
  const id = req.params.id;
  const video = await Video.findById(id)
  if(!video){
    return res.render("404", {pageTitle:"Video not Found",});
  }
  return res.render("watch", { pageTitle: video.title, video: video });
};
export const getEdit = async (req, res) => {
  const id = req.params.id;
  const video = await Video.findById(id);
  if(!video){
    return res.render("404", {pageTitle:"Video not Found",});
    }
      return res.render("edit", { pageTitle: video.title, video });

};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.exists({_id:id})
  const {title, description, hashtags} = req.body

  if(!video){
    return res.render("404", {pageTitle:"Video not Found",});
    }
    await Video.findByIdAndUpdate(id, {
    title : title,
    description : description,
    hashtags: Video.formatHashtags(hashtags)
    });
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      // 좌측 variable === schema
      // 우측 variable === request.body (위에서 정의한)
      title: title,
      description: description,
      hashtags: Video.formatHashtags(hashtags),
    })
    return res.redirect("/")
  } 
  catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
