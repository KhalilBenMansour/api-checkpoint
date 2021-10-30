import React, { useEffect } from "react";
import { Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/actions/userActions";
import User from "./User";

const UserList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <Row className="mx-auto">
      {state.error ? (
        <h1>{state.error.message}</h1>
      ) : (
        state.listOfUser.map((user) => <User key={user.id} user={user} />)
      )}
    </Row>
  );
};

export default UserList;
