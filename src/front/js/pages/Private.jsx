import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (store.token === "" || !store.token) {
      navigate("/");
      return;
    }
    
    actions.getPrivateData();
  }, [store.token]);
  return (
    <div>
      {store.userData ? (
        <div>
          Usuario: {store.userData.email}
          id: {store.userData.id}
        </div>
      ) : (
        <div>No tienes datos :(</div>
      )}
      <button className="btn-danger" onClick={actions.logout}>
        Cerrar sesion
      </button>
    </div>
  );
};

export default Private;