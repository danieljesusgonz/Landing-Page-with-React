import React from "react";

export const Card = () => {
  return (
    <div className="card m-2">
      <img
        src="https://picsum.photos/500/325"
        className="card-img-top"
        alt="beach picture"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-center">
          <button class="btn btn-primary btn-md p-1 " type="button">
            Find Out More!
          </button>
        </li>
      </ul>
    </div>
  );
};
