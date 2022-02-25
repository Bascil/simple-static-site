import React, { useState } from 'react';
import './article.css';

const Article = ({ data }) => {
  const [city, setCity] = useState(null);

  const getAqi = () => {
    const aqi = city.split('#')[0];
    return aqi;
  };

  const getCigg = () => {
    const cigg = city.split('#')[1];
    return cigg;
  };

  return (
    <div>
      {' '}
      <div className="row g-5">
        <div className="col-md-12 pb-4 mb-4">
          <article className="blog-post">
            <h2 className="blog-post-title">
              <a href={data['article-info_1_category_url']}>
                {data['article-info_1_category']}
              </a>
            </h2>
            <p className="blog-post-meta">
              {data['article-info_1_date']}{' '}
              <a href="#">{data['article-info_1_byline']}</a>
            </p>

            <p>{data['p_1_value']}</p>
            <small>Total cities {data['total_cities_1_value']}</small>

            <hr />
            <p>{data['p_2_value']}</p>
            <p>{data['p_3_value']}</p>
            <p>{data['p_4_value']}</p>
            <p>{data['p_5_value']}</p>

            <h5>{data['compare-tabs_1_method']}</h5>

            <blockquote className="blockquote">
              {data['compare-tabs_1_title']}
            </blockquote>

            <select
              name="city"
              data-testid="select-city"
              onChange={(e) => setCity(e.target.value)}
              className="mb-4"
            >
              <option value="">Select your City</option>
              <option
                data-testid="select-city-1"
                value={
                  `${data['compare-tabs_1_city_1_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_1_cigg']}`
                }
              >
                {data['compare-tabs_1_city_1_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_2_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_2_cigg']}`
                }
              >
                {data['compare-tabs_1_city_2_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_3_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_3_cigg']}`
                }
              >
                {data['compare-tabs_1_city_3_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_4_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_4_cigg']}`
                }
              >
                {data['compare-tabs_1_city_4_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_5_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_5_cigg']}`
                }
              >
                {data['compare-tabs_1_city_5_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_6_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_6_cigg']}`
                }
              >
                {data['compare-tabs_1_city_6_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_7_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_7_cigg']}`
                }
              >
                {data['compare-tabs_1_city_7_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_8_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_8_cigg']}`
                }
              >
                {data['compare-tabs_1_city_8_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_9_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_9_cigg']}`
                }
              >
                {data['compare-tabs_1_city_9_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_10_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_10_cigg']}`
                }
              >
                {data['compare-tabs_1_city_10_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_12_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_12_cigg']}`
                }
              >
                {data['compare-tabs_1_city_12_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_13_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_13_cigg']}`
                }
              >
                {data['compare-tabs_1_city_13_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_14_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_14_cigg']}`
                }
              >
                {data['compare-tabs_1_city_14_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_15_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_15_cigg']}`
                }
              >
                {data['compare-tabs_1_city_15_name']}
              </option>
              <option
                value={
                  `${data['compare-tabs_1_city_16_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_16_cigg']}`
                }
              >
                {data['compare-tabs_1_city_16_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_17_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_17_cigg']}`
                }
              >
                {data['compare-tabs_1_city_17_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_18_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_18_cigg']}`
                }
              >
                {data['compare-tabs_1_city_18_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_19_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_19_cigg']}`
                }
              >
                {data['compare-tabs_1_city_19_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_20_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_20_cigg']}`
                }
              >
                {data['compare-tabs_1_city_20_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_21_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_21_cigg']}`
                }
              >
                {data['compare-tabs_1_city_21_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_22_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_22_cigg']}`
                }
              >
                {data['compare-tabs_1_city_22_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_23_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_23_cigg']}`
                }
              >
                {data['compare-tabs_1_city_23_name']}
              </option>
              <option
                value={
                  `${data['compare-tabs_1_city_24_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_24_cigg']}`
                }
              >
                {data['compare-tabs_1_city_24_name']}
              </option>
              <option
                value={
                  `${data['compare-tabs_1_city_25_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_25_cigg']}`
                }
              >
                {data['compare-tabs_1_city_25_name']}
              </option>
              <option
                value={
                  `${data['compare-tabs_1_city_26_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_26_cigg']}`
                }
              >
                {data['compare-tabs_1_city_26_name']}
              </option>
              <option
                value={
                  `${data['compare-tabs_1_city_27_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_27_cigg']}`
                }
              >
                {data['compare-tabs_1_city_27_name']}
              </option>
              <option
                value={
                  `${data['compare-tabs_1_city_28_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_28_cigg']}`
                }
              >
                {data['compare-tabs_1_city_28_name']}
              </option>
              <option
                value={
                  `${data['compare-tabs_1_city_29_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_29_cigg']}`
                }
              >
                {data['compare-tabs_1_city_29_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_30_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_30_cigg']}`
                }
              >
                {data['compare-tabs_1_city_30_name']}
              </option>
              <option
                value={
                  `${data['compare-tabs_1_city_31_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_31_cigg']}`
                }
              >
                {data['compare-tabs_1_city_31_name']}
              </option>

              <option
                value={
                  `${data['compare-tabs_1_city_32_aqi']}` +
                  `#` +
                  `${data['compare-tabs_1_city_32_cigg']}`
                }
              >
                {data['compare-tabs_1_city_32_name']}
              </option>
            </select>

            {city && (
              <>
                <p>
                  <strong>Particulate Matter:</strong> {getAqi()}
                </p>
                <p>
                  <strong>Cigarattes:</strong> {getCigg()}
                </p>
              </>
            )}

            <p>
              <strong>{data['p_6_value']}</strong>
            </p>
            <p>{data['p_7_value']}</p>
            <p>{data['p_8_value']}</p>
            <p>{data['p_9_value']}</p>
            <p>{data['p_10_value']}</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Article;
