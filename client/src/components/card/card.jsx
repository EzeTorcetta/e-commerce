import { Link } from "react-router-dom";



const Card = (props) => {

    // const [isFav, setIsFav] = useState(false);

    // const handleFavorite = async (idUser, id) => {
    //     if (idUser) {
    //       setIsFav(!isFav);
    //       isFav
    //         ? await axios.delete(`${URL_BASE}/favorites/${idUser}/${id}`)
    //         : await axios.post(`${URL_BASE}/favorites/${idUser}/${id}`);
    //       dispatch(FuncionAllFavoritesHotel(User.id));
    //     } else {
    //       swal({
    //         text: "Debes iniciar sesion ",
    //         icon: "warning",
    //         buttons: "Aceptar",
    //       });
    //     }
    //   };

    return (
        <div>
             {/* {!User || User?.rol === 1 ? (
          isFav ? (
            <button
              onClick={() => handleFavorite(User?.id, id)}
              className={style.button}
            >
              ❤️
            </button>
          ) : (
            <button
              onClick={() => handleFavorite(User?.id, id)}
              className={style.button}
            >
              🤍
            </button>
          )
        ) : (
          <></>
        )} */}
        <Link to={`/detail/${props.id}`}>
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <p>{props.price}</p>
        </Link>
        </div>
    )
}


export default Card; 