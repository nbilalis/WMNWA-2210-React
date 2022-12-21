import './Card.scoped.scss';

function Card({ subtype }) {
  return (
    <div className="card">
      <h3>{subtype.title}</h3>
      <div className="description">{subtype.description}</div>
      <div className="abv">
        <abbr title="Beer Alcohol Content">ABV</abbr>{' '}
        {subtype.abv.from
          ? `${subtype.abv.from}-${subtype.abv.to}${subtype.abv.unit}`
          : subtype.abv}
      </div>
      <div className="ibu">
        <abbr title="Bitterness Units">IBU</abbr>:{' '}
        {subtype.ibu.from ? `${subtype.ibu.from}-${subtype.ibu.to}` : subtype.ibu}
      </div>
      <div className="temp">
        Serving temp.:{' '}
        {subtype.serving_temperature.from
          ? `${subtype.serving_temperature.from}-${subtype.serving_temperature.to}${subtype.serving_temperature.unit}`
          : subtype.serving_temp}
      </div>
      <div>{subtype.image_url && <img src={subtype.image_url} alt={subtype.title} />}</div>
    </div>
  );
}

export default Card;
