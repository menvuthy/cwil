import { useParams, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { NEWS } from "./data/articles";
import Seo from "./components/Seo";
import { FaLink } from "react-icons/fa";
import {
  FacebookShareButton,
  LinkedinShareButton,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";
import "./style/NewsArticle.css";

export default function NewsArticle() {
  const { slug } = useParams();
  const { pathname } = useLocation();

  const article = NEWS.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="article-not-found">
        <h2>Article Not Found</h2>
        <Link to="/news">← Back to News</Link>
      </div>
    );
  }

  const shareUrl = `https://cwil.vercel.app${pathname}`;

  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <Seo
        title={article.title}
        description={article.summary}
        image={new URL(article.image, "https://cwil.vercel.app").href}
        path={`/News/${article.slug}`}
      />
      <div className="articles-page">
        {/* HERO */}
        <section
          className="articles-hero"
          style={{
            backgroundImage: `url(${article.image})`,
          }}
        >
          <div className="articles-hero-overlay">
            <span className="articles-hero-tag">{article.category}</span>

            <h2>{article.title}</h2>

            <p>
              {article.date}
              {" • "}
              {article.author}
              {" • "}
              {article.readTime}
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="article-section">
          <div className="container article-layout">
            <article className="article-content">
              <div className="article-summary">{article.summary}</div>
              <div className="article-body">
                {Array.isArray(article.content)
                  ? article.content.map((block, index) => {
                      if (block.type === "paragraph") {
                        return <p key={index}>{block.text}</p>;
                      }

                      if (block.type === "image") {
                        return (
                          <figure key={index} className="article-figure">
                            <img
                              src={block.src}
                              alt={block.caption || ""}
                              onClick={() => openFullscreen(block.src)}
                            />

                            <figcaption>{block.caption}</figcaption>
                          </figure>
                        );
                      }

                      return null;
                    })
                  : article.content}
              </div>
            </article>

            <aside className="article-sidebar">
              <div className="article-card">
                <h3>Article Details</h3>

                <div className="meta-item">
                  <strong>Category</strong>
                  <span>{article.category}</span>
                </div>

                <div className="meta-item">
                  <strong>Date</strong>
                  <span>{article.date}</span>
                </div>

                <div className="meta-item">
                  <strong>Author</strong>
                  <span>{article.author}</span>
                </div>

                <div className="meta-item">
                  <strong>Read Time</strong>
                  <span>{article.readTime}</span>
                </div>
              </div>

              <div className="article-card">
                <h3>Share</h3>

                <div className="article-share">
                  <FacebookShareButton url={shareUrl} quote={article.title}>
                    <FacebookIcon size={36} round />
                  </FacebookShareButton>

                  <LinkedinShareButton url={shareUrl} title={article.title}>
                    <LinkedinIcon size={36} round />
                  </LinkedinShareButton>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(shareUrl);
                      alert("Link copied!");
                    }}
                    aria-label="Copy Link"
                  >
                    <FaLink />
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>

      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <img
            src={fullscreenImage}
            alt="Full Screen"
            className="fullscreen-image"
          />
        </div>
      )}
    </>
  );
}
