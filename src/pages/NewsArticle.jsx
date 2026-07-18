import { useParams, Link, useLocation } from "react-router-dom";
import { NEWS } from "./data/articles";
import Seo from "./components/Seo";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
  FaLink,
} from "react-icons/fa";
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
  const encodedShareUrl = encodeURIComponent(shareUrl);
  const shareTitle = encodeURIComponent(article.title);

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

              <div className="article-body">{article.content}</div>
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
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href={`https://t.me/share/url?url=${encodedShareUrl}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Telegram"
                  >
                    <FaTelegramPlane />
                  </a>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
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
    </>
  );
}
