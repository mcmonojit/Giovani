import "../productCard/ProductCard.css";

const ProductCard = () => {
  return (
    <div className="component-container">
      <div className="card-1 shadow">
        <img className="card-1-img" src="./Assets/img10.jpg" alt="Food" />

        <div className="card-overlay-badge">
          <button className="btn btn-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bookmark-check-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
              />
            </svg>
          </button>
        </div>

        <div className="card-1-overlay-text">
          <h4>10% OFF</h4>
        </div>
        <div className="card-info-container">
          <div className="card-info-side">
            <h2>Veg Dosa</h2>
            <div className="rating-container green">
              <span>4.5</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-	star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 			        					6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327    4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
          </div>
          <div className="card-info-side">
            <p>
              from <span>Peter Cat</span>
            </p>
            <p className="info-big">₹369</p>
          </div>
          <div className="card-info-side">
            <p>Delivered within</p>
            <p className="time">20 min</p>
          </div>
          <button className="btn btn-primary btn-icon-label margin-auto">
            <label>Add to bag</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-		bag-check-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 		2 0 	0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 			9.646a.5.5 0 	1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
