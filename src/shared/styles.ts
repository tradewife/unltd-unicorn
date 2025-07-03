export const unicornStyles = {
  container: {
    position: "relative" as const,
    width: "var(--unicorn-width)",
    height: "var(--unicorn-height)",
  },
  errorWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  errorBox: {
    textAlign: "center" as const,
    padding: "1rem",
    borderRadius: "0.5rem",
    backgroundColor: "rgb(254 242 242)",
    color: "rgb(239 68 68)",
  },
  errorTitle: {
    fontWeight: "600",
    marginBottom: "0.25rem",
  },
  errorMessage: {
    fontSize: "0.875rem",
    marginTop: "0.25rem",
  },
};
