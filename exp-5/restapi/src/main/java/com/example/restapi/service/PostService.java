package com.example.restapi.service;

import com.example.restapi.model.Post;
import com.example.restapi.repository.PostRepository;
import org.springframework.stereotype.Service;
import com.example.restapi.exception.PostNotFoundException;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Optional;

@Service
public class PostService {
    private static final Logger logger =
            LoggerFactory.getLogger(PostService.class);
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    // Create a post
    public Post createPost(Post post) {

        logger.info("Creating new post: {}", post.getTitle());

        return postRepository.save(post);
    }

    // Get all posts
    public List<Post> getAllPosts() {

        logger.info("Fetching all posts");

        return postRepository.findAll();
    }

    // Get post by ID
    public Post getPostById(Long id) {

        logger.info("Fetching post with ID: {}", id);

        return postRepository.findById(id)
                .orElseThrow(() ->
                        new PostNotFoundException(
                                "Post with ID " + id + " was not found"
                        )
                );
    }

    // Update a post
    public Post updatePost(Long id, Post post) {

        logger.info("Updating post with ID: {}", id);

        Post existingPost = postRepository.findById(id)
                .orElseThrow(() ->
                        new PostNotFoundException(
                                "Post with ID " + id + " was not found"
                        )
                );

        existingPost.setTitle(post.getTitle());
        existingPost.setContent(post.getContent());

        return postRepository.save(existingPost);
    }

    // Delete a post
    public void deletePost(Long id) {

        logger.info("Deleting post with ID: {}", id);

        postRepository.deleteById(id);
    }
}