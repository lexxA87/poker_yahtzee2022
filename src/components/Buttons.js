import "bootstrap-icons/font/bootstrap-icons.css";

function Buttons({ endGame, newPlayGame }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <button
          onClick={() => newPlayGame()}
          className="btn btn-dark col-auto shadow btn-lg"
          type="button"
        >
          Roll the dice
        </button>
      </div>
      <div className="row justify-content-between fixed-bottom m-4">
        <div className="col-auto me-auto">
          <button
            onClick={() => endGame(false)}
            className="btn btn-dark"
            type="button"
          >
            End Game
          </button>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-light "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i className="bi bi-info-lg"></i>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Offcanvas right</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
