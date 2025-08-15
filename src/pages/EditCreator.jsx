import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCreatorById, updateCreator, deleteCreator } from "../api/creators";
import ConfirmModal from "../components/ConfirmModal";

export default function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await getCreatorById(id);
      setForm({
        name: data.name || "",
        url: data.url || "",
        description: data.description || "",
        image_url: data.image_url || "",
        youtube: data.youtube || "",
        twitter: data.twitter || "",
        instagram: data.instagram || "",
      });
    }
    load();
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    try {
      await updateCreator(id, form);
      navigate(`/view/${id}`);
    } catch (err) {
      alert(err.message || "Could not update creator");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    setOpenModal(true);
  }

  const [openModal, setOpenModal] = useState(false);
  async function confirmDelete() {
    await deleteCreator(id);
    navigate("/");
  }
  function cancelDelete() {
    setOpenModal(false);
  }

  if (!form) return <p>Loading...</p>;

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Channel/Page URL
          <input name="url" value={form.url} onChange={handleChange} required />
        </label>
        <label>
          Image URL
          <input
            name="image_url"
            value={form.image_url}
            onChange={handleChange}
          />
        </label>
        <label>
          Description
          <textarea
            name="description"
            rows={6}
            value={form.description}
            onChange={handleChange}
            required
          />
        </label>

        <h3>Socials</h3>
        <label>
          YouTube
          <input name="youtube" value={form.youtube} onChange={handleChange} />
        </label>
        <label>
          Twitter
          <input name="twitter" value={form.twitter} onChange={handleChange} />
        </label>
        <label>
          Instagram
          <input
            name="instagram"
            value={form.instagram}
            onChange={handleChange}
          />
        </label>

        <div className="row">
          <button type="submit" disabled={saving}>
            {saving ? "Saving..." : "Save"}
          </button>
          <button type="button" onClick={handleDelete} className="danger">
            Delete
          </button>
        </div>
      </form>
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
