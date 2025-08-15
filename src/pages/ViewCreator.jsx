import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCreatorById, deleteCreator } from "../api/creators";
import ConfirmModal from "../components/ConfirmModal";

export default function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const data = await getCreatorById(id);
        setCreator(data);
      } catch (e) {
        setError(e.message || "Could not load creator");
      }
    }
    load();
  }, [id]);

  if (error) return <p role="alert">{error}</p>;
  if (!creator) return <p>Loading...</p>;

  const youtubeUrl = creator.youtube
    ? creator.youtube.startsWith("http")
      ? creator.youtube
      : `https://youtube.com/@${creator.youtube.replace(/^@/, "")}`
    : null;
  const twitterUrl = creator.twitter
    ? creator.twitter.startsWith("http")
      ? creator.twitter
      : `https://twitter.com/${creator.twitter.replace(/^@/, "")}`
    : null;
  const instagramUrl = creator.instagram
    ? creator.instagram.startsWith("http")
      ? creator.instagram
      : `https://instagram.com/${creator.instagram.replace(/^@/, "")}`
    : null;

  const toHandle = (value) => {
    if (!value) return "";
    if (value.startsWith("http")) {
      try {
        const p = new URL(value).pathname.replace(/\/+$/, "");
        const last = p.split("/").filter(Boolean).pop() || "";
        const clean = last.replace(/^@/, "");
        return `@${clean}`;
      } catch {
        // fall through to basic cleanup
      }
    }
    return `@${value.replace(/^@/, "")}`;
  };
  const youtubeHandle = toHandle(creator.youtube);
  const twitterHandle = toHandle(creator.twitter);
  const instagramHandle = toHandle(creator.instagram);

  async function handleDelete() {
    setOpenModal(true);
  }
  async function confirmDelete() {
    await deleteCreator(id);
    navigate("/");
  }
  function cancelDelete() {
    setOpenModal(false);
  }

  return (
    <>
      <div className="detail">
        {creator.image_url && (
          <img
            src={creator.image_url}
            alt={creator.name}
            className="detail-img"
          />
        )}
        <div>
          <h1 className="detail-title">{creator.name}</h1>
          <p className="detail-description">{creator.description}</p>

          <div className="detail-socials">
            {youtubeUrl && (
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="detail-social"
              >
                <span className="icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19 3.3 12 3.3 12 3.3s-7 0-9.1.5C1.7 4.1.8 5 0 6.2.5 8.3.5 12 .5 12s0 3.7.5 5.8c.3 1.2 1.2 2.1 2.4 2.4 2.1.5 9.1.5 9.1.5s7 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4.5-2.1.5-5.8.5-5.8s0-3.7-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z"
                    ></path>
                  </svg>
                </span>
                <span className="handle">{youtubeHandle}</span>
              </a>
            )}
            {twitterUrl && (
              <a
                href={twitterUrl}
                target="_blank"
                rel="noreferrer"
                className="detail-social"
              >
                <span className="icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.27 4.27 0 0 0-7.27 3.89A12.12 12.12 0 0 1 3.15 4.6a4.26 4.26 0 0 0 1.32 5.69 4.24 4.24 0 0 1-1.93-.54v.06a4.27 4.27 0 0 0 3.43 4.19 4.3 4.3 0 0 1-1.92.07 4.28 4.28 0 0 0 3.99 2.96A8.56 8.56 0 0 1 2 19.54a12.07 12.07 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.65 8.65 0 0 0 24 5.1a8.49 8.49 0 0 1-2.54.7z"
                    ></path>
                  </svg>
                </span>
                <span className="handle">{twitterHandle}</span>
              </a>
            )}
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="detail-social"
              >
                <span className="icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"
                    />
                  </svg>
                </span>
                <span className="handle">{instagramHandle}</span>
              </a>
            )}
          </div>

          <div className="detail-actions">
            <Link to={`/edit/${creator.id}`}>
              <button className="headerBtn">Edit</button>
            </Link>
            <button className="danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <ConfirmModal
        open={openModal}
        title="WAIT!!!!"
        message={`Are you sure you want to delete this creator???`}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </>
  );
}
