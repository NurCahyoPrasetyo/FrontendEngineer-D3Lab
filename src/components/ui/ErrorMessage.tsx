"use client";

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({
  message = "Something went wrong.",
}: ErrorMessageProps) {
  return (
    <div style={styles.wrapper}>
      <p style={styles.text}>{message}</p>
    </div>
  );
}

const styles = {
  wrapper: {
    background: "#ffe5e5",
    border: "1px solid #ffaaaa",
    padding: "1rem 1.5rem",
    borderRadius: "8px",
    color: "#a94442",
    margin: "2rem auto",
    textAlign: "center" as const,
    maxWidth: "500px",
  },
  text: {
    fontSize: "16px",
  },
};
