type Props = {
  image: string;
  imageAlt: string;
  text: string;
};

export default function MarketPresenter({ image, imageAlt, text }: Props) {
  return (
    <div className="row mb-5">
      <div className="col-12">
        <div
          className="d-flex flex-column flex-md-row align-items-center gap-3 gap-md-4 wow animate__animated animate__fadeInUp"
          data-wow-delay="0.2s"
        >
          <img
            src={image}
            alt={imageAlt}
            className="rounded-circle icon-144 flex-shrink-0"
            style={{ objectFit: 'cover' }}
          />

          <p className="mb-0 text-center text-md-start">{text}</p>
        </div>
      </div>
    </div>
  );
}
