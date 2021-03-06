import React from 'react';
import { Link } from 'gatsby';

const PostLink = ({ post }) => (
  <article class="card ">
    <Link to={'/uehaj-blog' + post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img
          src={post.frontmatter.thumbnail}
          alt={post.frontmatter.title + '- Featured Shot'}
        />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={'/uehaj-blog' + post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div class="post-meta">{post.frontmatter.date}</div>
    </header>
  </article>
);
export default PostLink;
