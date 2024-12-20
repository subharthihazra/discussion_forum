import { Post } from "../model/Posts.js";
// import { analyzeComment } from "./postController.js";

export const likePost = async (req, res) => {
  const { postId } = req.params;
  const userId = req.cookies.userId;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    const likeIndex = post.likes.findIndex((like) => like.userId === userId);
    if (likeIndex !== -1) {
      post.likes.splice(likeIndex, 1);
      await post.save();
      res.status(200).json({ message: "Post disliked", post });
    } else {
      post.likes.push({
        userId,
        createdAt: new Date(),
      });
      await post.save();
      res.status(200).json({ message: "Post liked successfully", post });
    }
  } catch (error) {
    console.error("Error toggling like:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const addComment = async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;
  const userId = req.cookies.userId;

  if (!content || !userId) {
    res.status(400).json({ message: "Content and userId are required" });
    return;
  }

  try {
    // const scores = await analyzeComment(content);
    // if (
    //   scores.toxicityScore > 0.5 ||
    //   scores.severeToxicityScore > 0.3 ||
    //   scores.insultScore > 0.4 ||
    //   scores.threatScore > 0.1 ||
    //   scores.profanityScore > 0.4
    // ) {
    //   return res.json({ message: "Your comment is considered inappropriate." });
    // }
    
    const post = await Post.findById(postId);
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    const newComment = {
      content: content,
      userId: userId,
      createdAt: new Date(),
    };

    post.comments.push(newComment);

    await post.save();

    res.status(201).json({ message: "Comment added successfully", post });
    return;
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Server error", error });
    return;
  }
};
