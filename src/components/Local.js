import React from "react";
import { Formik, Field, Form } from 'formik';
import '../App.css';

function local() {
    function onSubmit(values, actions) {
        console.log('SUBMIT', values);
      }
    
    function onBlurCep(ev, setFieldValue) {
        const { value } = ev.target;
    
        const cep = value?.replace(/[^0-9]/g, '');
    
        if (cep?.length !== 8) {
            return;
        }
    
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
            setFieldValue('logradouro', data.logradouro);
            setFieldValue('bairro', data.bairro);
            setFieldValue('cidade', data.localidade);
            setFieldValue('uf', data.uf);
        });
    }
    
      return (
        <div className="App">
        <h1>Buscar CEP</h1>
          <Formik
            onSubmit={onSubmit}
            validateOnMount
            initialValues={{
              cep: '',
              logradouro: '',
              bairro: '',
              cidade: '',
              uf: '',
            }}
            render={({ isValid, setFieldValue }) => (
              <Form>
                <div className="form-control-group">
                  <label>Cep</label>
                  <Field name="cep" type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
                </div>
                <div className="form-control-group">
                  <label>Logradouro</label>
                  <Field name="logradouro" type="text" />
                </div>
                <div className="form-control-group">
                  <label>Bairro</label>
                  <Field name="bairro" type="text" />
                </div>
                <div className="form-control-group">
                  <label>Cidade</label>
                  <Field name="cidade" type="text" />
                </div>
                <div className="form-control-group">
                  <label>Estado</label>
                  <Field name="uf" type="text"/>
                </div>
              </Form>
            )}
          />
        </div>
      );
}


export default local

