import React from "react";

export default function ConfirmModal({
  open,
  title = "WAIT!!!",
  message,
  confirmText = "YES! TOTALLY SURE",
  cancelText = "NAH, NEVER MIND",
  onConfirm,
  onCancel,
}) {
  if (!open) return null;
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-panel">
        <div className="modal-title">⚠️ {title} ⚠️</div>
        {message && <div className="modal-message">{message}</div>}
        <div className="modal-actions">
          <button className="btn-lg btn-secondary" onClick={onCancel}>
            {cancelText}
          </button>
          <button className="btn-lg btn-primary" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
