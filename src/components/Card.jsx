import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ creator, onDelete }) {
  const { id, name, description, image_url, url, youtube, twitter, instagram } =
    creator;

  const youtubeUrl = youtube
    ? youtube.startsWith("http")
      ? youtube
      : `https://youtube.com/@${youtube.replace(/^@/, "")}`
    : null;
  const twitterUrl = twitter
    ? twitter.startsWith("http")
      ? twitter
      : `https://twitter.com/${twitter.replace(/^@/, "")}`
    : null;
  const instagramUrl = instagram
    ? instagram.startsWith("http")
      ? instagram
      : `https://instagram.com/${instagram.replace(/^@/, "")}`
    : null;

  return (
    <div className="card">
      {image_url && <img src={image_url} alt={name} className="card-img" />}
      <div className="card-content">
        <div className="card-header">
          <h2 className="card-title">
            <Link to={`/view/${id}`}>{name}</Link>
          </h2>
          <div className="actions-icons">
            <Link
              to={`/view/${id}`}
              className="icon-btn"
              aria-label="View details"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5zm0 12.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
                ></path>
                <circle cx="12" cy="12" r="2.5" fill="currentColor"></circle>
              </svg>
            </Link>
            <Link to={`/edit/${id}`} className="icon-btn" aria-label="Edit">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm18.71-11.04a1.003 1.003 0 0 0 0-1.42l-2.5-2.5a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.99-1.66z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="socials">
          {youtubeUrl ? (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19 3.3 12 3.3 12 3.3s-7 0-9.1.5C1.7 4.1.8 5 0 6.2.5 8.3.5 12 .5 12s0 3.7.5 5.8c.3 1.2 1.2 2.1 2.4 2.4 2.1.5 9.1.5 9.1.5s7 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4.5-2.1.5-5.8.5-5.8s0-3.7-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z"
                ></path>
              </svg>
            </a>
          ) : (
            <span className="social-icon disabled" aria-hidden>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19 3.3 12 3.3 12 3.3s-7 0-9.1.5C1.7 4.1.8 5 0 6.2.5 8.3.5 12 .5 12s0 3.7.5 5.8c.3 1.2 1.2 2.1 2.4 2.4 2.1.5 9.1.5 9.1.5s7 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4.5-2.1.5-5.8.5-5.8s0-3.7-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z"
                ></path>
              </svg>
            </span>
          )}
          {twitterUrl ? (
            <a
              href={twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="Twitter"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.27 4.27 0 0 0-7.27 3.89A12.12 12.12 0 0 1 3.15 4.6a4.26 4.26 0 0 0 1.32 5.69 4.24 4.24 0 0 1-1.93-.54v.06a4.27 4.27 0 0 0 3.43 4.19 4.3 4.3 0 0 1-1.92.07 4.28 4.28 0 0 0 3.99 2.96A8.56 8.56 0 0 1 2 19.54a12.07 12.07 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.65 8.65 0 0 0 24 5.1a8.49 8.49 0 0 1-2.54.7z"
                ></path>
              </svg>
            </a>
          ) : (
            <span className="social-icon disabled" aria-hidden>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.27 4.27 0 0 0-7.27 3.89A12.12 12.12 0 0 1 3.15 4.6a4.26 4.26 0 0 0 1.32 5.69 4.24 4.24 0 0 1-1.93-.54v.06a4.27 4.27 0 0 0 3.43 4.19 4.3 4.3 0 0 1-1.92.07 4.28 4.28 0 0 0 3.99 2.96A8.56 8.56 0 0 1 2 19.54a12.07 12.07 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.65 8.65 0 0 0 24 5.1a8.49 8.49 0 0 1-2.54.7z"
                ></path>
              </svg>
            </span>
          )}
          {instagramUrl ? (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-0.9 1.4-.4.4-.8.7-1.4.9-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0 2.2c-3.1 0-3.5 0-4.7.1-1 .1-1.5.2-1.8.4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.3-.3.8-.4 1.8-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.5.4 1.8.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.2.8.3 1.8.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.5-.2 1.8-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.3.3-.8.4-1.8.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.5-.4-1.8-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.3-.2-.8-.3-1.8-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2.2a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6zm5-2.7a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z"
                ></path>
              </svg>
            </a>
          ) : (
            <span className="social-icon disabled" aria-hidden>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-0.9 1.4-.4.4-.8.7-1.4.9-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0 2.2c-3.1 0-3.5 0-4.7.1-1 .1-1.5.2-1.8.4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.3-.3.8-.4 1.8-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.5.4 1.8.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.2.8.3 1.8.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.5-.2 1.8-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.3.3-.8.4-1.8.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.5-.4-1.8-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.3-.2-.8-.3-1.8-.4-1.2-.1-1.6-.1-4.7-.1z"
                ></path>
              </svg>
            </span>
          )}
        </div>

        <p className="card-description">{description}</p>

        <div className="actions">
          <a href={url} target="_blank" rel="noreferrer" className="visit">
            Visit channel
          </a>
          <button className="card-btn" onClick={() => onDelete?.(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
