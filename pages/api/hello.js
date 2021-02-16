export default function handler(req, res) {
  //res.status(200).json({text: "Hello"});
  res.redirect(302, "/posts/ssg-ssr");
}