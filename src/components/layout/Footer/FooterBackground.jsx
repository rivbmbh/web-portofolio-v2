const FooterBackground = () => {
  return (
    <>
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src="assets/img/footer-bg (4).webp"
          alt="footer-bg"
          className="object-cover object-bottom w-full h-full opacity-50 nonview"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default FooterBackground;
