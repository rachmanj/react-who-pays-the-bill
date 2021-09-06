import React, { useContext } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { MyContext } from '../context';

const Stage1 = () => {
  const context = useContext(MyContext);

  const formik = useFormik({
    initialValues: { player: '' },
    validationSchema: Yup.object({
      player: Yup.string()
        .max(15, 'Must be at least 15 characters or less')
        .required('Sorry the name is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      context.addPlayer(values.player);
      resetForm();
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="mt-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add player name"
            name="player"
            onChange={formik.handleChange}
            value={formik.values.player}
          />
        </Form.Group>
        {formik.errors.player && formik.touched.player ? (
          <Alert variant="danger">{formik.errors.player}</Alert>
        ) : null}
        <Button className="miami" variant="primary" type="submit">
          Add Player
        </Button>
      </Form>

      {context.state.players && context.state.players.length > 0 ? (
        <>
          <hr />
          <div>
            <ul className="list-group">
              {context.state.players.map((item, idx) => (
                <li
                  key={idx}
                  className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                >
                  {item}
                  <span
                    className="badge badge-danger"
                    onClick={() => context.removePlayer(idx)}
                  >
                    X
                  </span>
                </li>
              ))}
            </ul>
            <div className="action_button" onClick={() => context.next()}>
              NEXT
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Stage1;
