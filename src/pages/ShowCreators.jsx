import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { listCreators, deleteCreator } from "../api/creators";
import ConfirmModal from "../components/ConfirmModal";

export default function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    try {
      setLoading(true);
      const data = await listCreators();
      setCreators(data);
    } catch (e) {
      setError(e.message ?? "Failed to load creators");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleDelete(id) {
    setPendingDelete(id);
  }

  const [pendingDelete, setPendingDelete] = useState(null);
  async function confirmDelete() {
    if (!pendingDelete) return;
    await deleteCreator(pendingDelete);
    setCreators((prev) => prev.filter((c) => c.id !== pendingDelete));
    setPendingDelete(null);
  }
  function cancelDelete() {
    setPendingDelete(null);
  }

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <>
      {creators.length === 0 ? (
        <p className="empty">
          NO CREATORS YET <span className="emoji">🥲</span>
        </p>
      ) : (
        <div className="cards">
          {creators.map((creator) => (
            <Card key={creator.id} creator={creator} onDelete={handleDelete} />
          ))}
        </div>
      )}

      <ConfirmModal
        open={Boolean(pendingDelete)}
        title="WAIT!!!!"
        message={`Are you sure you want to delete this creator???`}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </>
  );
}
