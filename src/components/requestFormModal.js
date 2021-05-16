import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, Form, Input } from 'antd';
import BaseLine from './baseLine'
import './components.less'

const RequestForm = ({ visible, loading, errorMessage, clearErrorMessage, handleOk, handleCancel }) => {
  const [form] = Form.useForm();

  const afterClose = () => {
    form.resetFields();
    clearErrorMessage();
  };

  return (
    <Modal
      className='myModal'
      visible={visible}
      closable={false}
      title={<div style={{ textAlign: 'center' }}>
        Request an invite
        <BaseLine />
      </div>}
      onCancel={handleCancel}
      afterClose={afterClose}
      footer={[
        <Button
          key="submit"
          loading={loading}
          onClick={
            () => {
              form
                .validateFields()
                .then((values) => {
                  handleOk(values);
                })
                .catch((info) => {
                  console.log('Validate Failed:', info);
                });
            }
          }
        >
          {loading ? 'Sending, please wait...' : 'Send'}
        </Button>,
        errorMessage.length
          ? <span key='message' style={{ color: 'red' }}>{errorMessage}</span>
          : null
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input the name!',
            },
            () => ({
              validator(_, value) {
                if (value && value.length > 2) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('the Full name must at least there characters'));
              },
            }),
          ]}
        >
          <Input placeholder='Full name' />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder='Email' />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={['email']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your email!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('email') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two email that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input placeholder='Confirm Email' />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const AllDoneModal = ({ visible, handleAlldoneClose }) => (
  <Modal
    className='myModal'
    visible={visible}
    closable={false}
    title={<div style={{ textAlign: 'center' }}>
      All done!
        <BaseLine />
    </div>}
    onCancel={handleAlldoneClose}
    footer={[
      <Button
        key="ok"
        onClick={handleAlldoneClose}
      >
        OK
        </Button>
    ]}
  >
    You will be the first to experience Broccoli & Co. when we launch.
  </Modal>
);

const RequestFormModal = () => {
  const [visible, setVisible] = useState(false);
  const [allDoneVisible, setAllDoneVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleOk = (values) => {
    setLoading(true);
    setErrorMessage('');
    axios.post('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth', {
      name: values.name,
      email: values.email
    }).then(() => {
      setLoading(false);
      setVisible(false);
      setAllDoneVisible(true);
    }).catch(e => {
      if (e.response && e.response.data && e.response.data.errorMessage) {
        setErrorMessage(e.response.data.errorMessage)
      } else {
        setErrorMessage('server error')
      }
      setLoading(false);
    })
  };

  const clearErrorMessage = () => {
    setErrorMessage('')
  };

  return (
    <div>
      <Button
        size="large"
        onClick={() => {
          setVisible(true);
        }}
      >
        Request an invite
      </Button>
      <RequestForm
        visible={visible}
        loading={loading}
        errorMessage={errorMessage}
        clearErrorMessage={clearErrorMessage}
        handleOk={handleOk}
        handleCancel={() => {
          setVisible(false);
        }}
      />
      <AllDoneModal
        visible={allDoneVisible}
        handleAlldoneClose={() => {
          setAllDoneVisible(false);
        }} />
    </div>
  );
};

export default RequestFormModal;