function PageWrapper({ children }) {
  return (
    <div className="page-wrapper">
      <main className="page-container">{children}</main>
    </div>
  );
}

export default PageWrapper;
