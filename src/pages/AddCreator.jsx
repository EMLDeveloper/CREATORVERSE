import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCreator } from "../api/creators";

const initialForm = {
  name: "",
  url: "",
  description: "",
  image_url: "",
  youtube: "",
  twitter: "",
  instagram: "",
};

export default function AddCreator() {
  const [form, setForm] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    try {
      if (!form.name || !form.url || !form.description) {
        alert("Name, URL and description are required");
        return;
      }
      await createCreator(form);
      navigate("/");
    } catch (err) {
      alert(err.message || "Could not create creator");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Name
        <input name="name" value={form.name} onChange={handleChange} required />
      </label>

      <label>
        Image
        <p className="help">
          Provide a link to an image of your creator. Be sure to include the
          http://
        </p>
        <input
          name="image_url"
          value={form.image_url}
          onChange={handleChange}
          placeholder="https://..."
        />
      </label>

      <label>
        Description
        <p className="help">
          Provide a description of the creator. Who are they? What makes them
          interesting?
        </p>
        <textarea
          name="description"
          rows={6}
          value={form.description}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Channel/Page URL
        <input
          name="url"
          type="url"
          value={form.url}
          onChange={handleChange}
          placeholder="https://example.com/@creator"
          required
        />
      </label>

      <h3 className="section-title">Social Media Links</h3>
      <p className="help">
        Provide at least one of the creator's social media links.
      </p>

      <label className="platform-label">
        <span className="icon">▶</span> YouTube
        <p className="help">The creator's YouTube handle (without the @)</p>
        <input
          name="youtube"
          value={form.youtube}
          onChange={handleChange}
          placeholder="TheCreator"
        />
      </label>

      <label className="platform-label">
        <span className="icon">🐦</span> Twitter
        <p className="help">The creator's Twitter handle (without the @)</p>
        <input
          name="twitter"
          value={form.twitter}
          onChange={handleChange}
          placeholder="thecreator"
        />
      </label>

      <label className="platform-label">
        <span className="icon">📸</span> Instagram
        <p className="help">The creator's Instagram handle (without the @)</p>
        <input
          name="instagram"
          value={form.instagram}
          onChange={handleChange}
          placeholder="thecreator"
        />
      </label>

      <button type="submit" disabled={saving}>
        {saving ? "Saving..." : "Submit"}
      </button>
    </form>
  );
}
